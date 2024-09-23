const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return null;

  const isContactType = ['work', 'home', 'personal'].includes(type);
  return isContactType ? type : null;
};

const paraseBoolean = (value) => {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;
  }

  return null;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = paraseBoolean(isFavourite);

  const filterParams = {};

  if (parsedContactType) {
    filterParams.contactType = parsedContactType;
  }

  if (parsedIsFavourite !== null) {
    filterParams.isFavourite = parsedIsFavourite;
  }

  return filterParams;
};
