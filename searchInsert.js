var searchInsert = function (list, target, start, end) {
    if (start > end) {
        if (list[start] > target) {
            return start;
        }
        else {
            return end;
        }
    }
    var mid = Math.floor((start + end) / 2);
    if (list[mid] === target)
        return mid;
    if (list[mid] > target) {
        return searchInsert(list, target, start, mid - 1);
    }
    else {
        return searchInsert(list, target, mid + 1, end);
    }
};
console.log(searchInsert([1, 3, 5, 6], 7, 0, 4));
