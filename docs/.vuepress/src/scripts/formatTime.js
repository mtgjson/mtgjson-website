export default (time, overrideTime) => {
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
};
