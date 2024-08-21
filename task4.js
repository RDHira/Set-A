function countSubarrays(nums, K) {
    let count = 0; 
    let left = 0;  
    let freq = new Map(); 

    for (let right = 0; right < nums.length; right++) { 
        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1); 

    
        while (freq.size > K) {
            freq.set(nums[left], freq.get(nums[left]) - 1); 
            if (freq.get(nums[left]) === 0) {
                freq.delete(nums[left]); 
            }
            left++; 
        }

        count += right - left + 1;
    }

    return count;
}

function goodSubarrays(nums, K) {
    return countSubarrays(nums, K) - countSubarrays(nums, K - 1);
}

// Example usage:
const nums = [1, 2, 1, 2, 3];
const K = 2;
console.log(goodSubarrays(nums, K)); 

   // Output: 7