/**
 * A little different than the source but works
 * https://jsbin.com/wowezadolo/edit?js,console
 */
export const sort = (value: string, dataToSort: any[]): any[] => {
  if (!value || value.length < 1 || typeof value !== 'string') {
    return dataToSort;
  }

  const filters: string[] = value.split(':');
  const order: number = filters[1] ? -1 : 1; // -1 === descending, 1 === ascending
  const prop: string = filters[0]; // actual prop to check on

  return dataToSort.sort((a: object, b: object): number => {
    const first: object = a[prop];
    const second: object = b[prop];

    // Coalesce the order if we have no data to compare against
    if (!first || !second) {
      return -1;
    }

    // + operator before a bool will create a bool's
    // integer equivilent: true => 1; false => 0
    return order * (first < second ? -1 : +(first > second));
  });
};

export const search = (terms: string, searchableData: any[]) => {
  const searchTerms = terms.toLowerCase();

  if (searchTerms.length < 1) {
    return searchableData;
  }

  return searchableData.filter((data) => {
    const conditions: boolean =
      (data.name && data.name.toLowerCase().includes(searchTerms)) ||
      (data.type && data.type.toLowerCase().includes(searchTerms)) ||
      (data.code && data.code.toLowerCase().includes(searchTerms)) ||
      (data.releaseDate && data.releaseDate.toLowerCase().includes(searchTerms));

    if (conditions) {
      return data;
    }
  });
};

export const filter = (filter: string, dataToFilter: any[]) => {
  return filter.length === 0
    ? dataToFilter // No filter, return all data
    : dataToFilter.filter((cur: any) => cur.type === filter);
};

export const prettifyType = (str: string) => {
  return (
    str
      // split each word by underscores
      .split('_')
      // uppercase each word
      .map((cur) => cur.charAt(0).toUpperCase() + cur.slice(1))
      // join them back with a space
      .join(' ')
  );
};

export const formatDateToPretty = (stringDate: string): string => {
  const isoDate: Date = new Date(stringDate);
  const rawDate: Date = new Date(isoDate.getTime() - isoDate.getTimezoneOffset() * -60000);
  const year: number = rawDate.getFullYear();
  const date: number = rawDate.getDate();
  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month: string = months[rawDate.getMonth()];

  return `${month} ${date}, ${year}`;
};

export const formatTime = (time: string, overrideTime?: string): string => {
  if (!time && typeof time !== 'string') {
    return '';
  }

  let sinceDate: string[] = time.split('-');
  let sinceYear: number = Number(sinceDate[0]);
  let sinceMonth: number = Number(sinceDate[1]);

  let newDate: Date | string[] = new Date();
  let year: number = newDate.getFullYear();
  let month: number = newDate.getMonth() + 1;

  let totalYears: number = 0;
  let totalMonths: number = 0;
  let remainderMonths: number = 0;

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
};
