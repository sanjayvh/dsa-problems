// https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1
// Medium

class Solution {
    partition(arr, l, r) {
        let i = l - 1;
        let pivot = arr[r];

        for (let j = l; j < r; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        i++;
        [arr[i], arr[r]] = [arr[r], arr[i]];

        return i;
    }

    kthSmallest(arr, l, r, k) {
        let pivot = this.partition(arr, l, r);

        if (pivot === k - 1) return arr[pivot];
        else if (pivot > k - 1) return this.kthSmallest(arr, l, pivot - 1, k);
        else return this.kthSmallest(arr, pivot + 1, r, k);
    }
}