const removeDuplicates = (list) => {
  const seen = {};
  const result = [];
  const len = list.length;
  for (let i = 0; i < len; i++) {
    const item = list[i];
    if (!seen[item]) {
      result.push(item);
      seen[item] = true;
    }
  }
  return result;
};

removeDuplicates([1, 1, 2]);
