function countSmaller(nums) {
    const n = nums.length;
    const result = Array(n).fill(0);
    const indices = nums.map((_, i) => i);

    function mergeSort(left, right) {
        if (left >= right) return;

        const mid = Math.floor((left + right) / 2);
        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        const temp = [];
        let l = left;
        let r = mid + 1;
        let rightCount = 0;

        while (l <= mid && r <= right) {
            if (nums[indices[r]] < nums[indices[l]]) {
                temp.push(indices[r]);
                rightCount++;
                r++;
            } else {
                result[indices[l]] += rightCount;
                temp.push(indices[l]);
                l++;
            }
        }

        while (l <= mid) {
            result[indices[l]] += rightCount;
            temp.push(indices[l]);
            l++;
        }

        while (r <= right) {
            temp.push(indices[r]);
            r++;
        }

        for (let i = left; i <= right; i++) {
            indices[i] = temp[i - left];
        }
    }

    mergeSort(0, n - 1);
    return result;
}

// Example usage:
const nums = [5, 2, 6, 1];
console.log(countSmaller(nums)); // Output: [2, 1, 1, 0]
