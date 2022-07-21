export const hashRE = /#.*$/;
export const extRE = /\.(md|html)$/;
export const endingSlashRE = /\/$/;
export const outboundRE = /^(https?:|mailto:|tel:)/;

/**
 * A little different than the source but works
 * https://jsbin.com/wowezadolo/edit?js,console
 */
export function sort(value, dataToSort) {
  if (!dataToSort || !Array.isArray(dataToSort)) {
    throw TypeError('You must pass in an array of data to sort');
  }

  if (!value || value.length < 1 || typeof value !== 'string') {
    return dataToSort;
  }

  const filters = value.split(':');
  const order = filters[1] ? -1 : 1; // -1 === descending, 1 === ascending
  const prop = filters[0]; // actual prop to check on

  return dataToSort.sort((a, b) => {
    const first = a[prop];
    const second = b[prop];

    // Coalesce the order if we have no data to compare against
    if (!first || !second) {
      return -1;
    }

    // + operator before a bool will create a bool's
    // integer equivilent: true => 1; false => 0
    return order * (first < second ? -1 : +(first > second));
  });
}

export function search(terms, searchableData) {
  const searchTerms = terms.toLowerCase();

  if (searchTerms.length < 1) {
    return searchableData;
  }

  return searchableData.filter((data) => {
    const conditions =
      (data.name && data.name.toLowerCase().includes(searchTerms)) ||
      (data.type && data.type.toLowerCase().includes(searchTerms)) ||
      (data.code && data.code.toLowerCase().includes(searchTerms)) ||
      (data.releaseDate && data.releaseDate.toLowerCase().includes(searchTerms));

    if (conditions) {
      return data;
    }
  });
}

export function filter(filter, dataToFilter) {
  return filter.length === 0
    ? // No filter, return all data
    dataToFilter
    : dataToFilter.filter((cur) => cur.type === filter);
}

export function prettifyType(str) {
  return (
    str
      // split each word by underscores
      .split('_')
      // uppercase each word
      .map((cur) => cur.charAt(0).toUpperCase() + cur.slice(1))
      // join them back with a space
      .join(' ')
  );
}

export function formatTime(time, overrideTime) {
  if (!time && typeof time !== 'string') {
    return '';
  }

  let sinceDate = time.split('-');
  let sinceYear = Number(sinceDate[0]);
  let sinceMonth = Number(sinceDate[1]);

  let newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1; // +1 because arrays are 0

  let totalYears = 0;
  let totalMonths = 0;
  let remainderMonths = 0;

  if (overrideTime && typeof overrideTime === 'string') {
    newDate = overrideTime.split('-');
    year = Number(newDate[0]);
    month = Number(newDate[1]);
  }

  totalMonths = 12 * (year - sinceYear) + (month - sinceMonth) + 1;
  totalYears = Math.floor(totalMonths / 12);
  remainderMonths = totalMonths % 12;

  if (totalYears < 1) {
    if (totalMonths > 1) {
      return `(${totalMonths} Months)`;
    } else {
      return `(${totalMonths} Month)`;
    }
  } else {
    if (totalYears < 2) {
      if (remainderMonths > 1) {
        return `(${totalYears} Year, ${remainderMonths} Months)`;
      } else if (remainderMonths === 1) {
        return `(${totalYears} Year, ${remainderMonths} Month)`;
      } else {
        return `(${totalYears} Year)`;
      }
    } else {
      if (remainderMonths > 1) {
        return `(${totalYears} Years, ${remainderMonths} Months)`;
      } else if (remainderMonths === 1) {
        return `(${totalYears} Years, ${remainderMonths} Month)`;
      } else {
        return `(${totalYears} Years)`;
      }
    }
  }
}

export function normalize(path) {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '');
}

export function getHash(path) {
  const match = path.match(hashRE);

  if (match) {
    return match[0];
  } else {
    return '';
  }
}

export function isExternal(path) {
  return outboundRE.test(path);
}

export function isMailto(path) {
  return /^mailto:/.test(path);
}

export function isTel(path) {
  return /^tel:/.test(path);
}

export function ensureExt(path) {
  if (isExternal(path)) {
    return path;
  }

  const hashMatch = path.match(hashRE);
  const hash = hashMatch ? hashMatch[0] : '';
  const normalized = normalize(path);

  if (endingSlashRE.test(normalized)) {
    return path;
  }

  return normalized + '.html' + hash;
}

export function isActive(route, path) {
  const routeHash = route.hash;
  const linkHash = getHash(path);
  if (linkHash && routeHash !== linkHash) {
    return false;
  }
  const routePath = normalize(route.path);
  const pagePath = normalize(path);
  return routePath === pagePath;
}
