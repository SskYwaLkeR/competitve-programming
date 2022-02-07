const twoSum = (list, target) => {
  const compliment = {};
  for (let i = 0; i < list.length; i++) {
    if (compliment[target - list[i]] !== undefined) {
      console.log([compliment[target - list[i]], i]);
      return [i, compliment[target - list[i]]];
    } else {
      compliment[list[i]] = i;
    }
  }
};

twoSum([2, 7, 11, 15], 9);
