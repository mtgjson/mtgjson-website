export default (terms, searchableData) => {
  const searchTerms = terms.toLowerCase();

  if(searchTerms.length < 1){
    return searchableData
  }

  // Delay it a bit so we dont go nuts
  return searchableData.filter(data => {
    if (
      (data.name && data.name.toLowerCase().includes(searchTerms)) ||
      (data.type && data.type.toLowerCase().includes(searchTerms)) ||
      (data.code && data.code.toLowerCase().includes(searchTerms)) ||
      (data.releaseDate && data.releaseDate.toLowerCase().includes(searchTerms))
    ) {
      return data;
    }
  });
};
