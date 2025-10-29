const toCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

export const normalizeKeys = obj => {
  if (Array.isArray(obj)) {
    return obj.map(normalizeKeys);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [toCamelCase(key), normalizeKeys(value)]));
  }
  return obj;
};
