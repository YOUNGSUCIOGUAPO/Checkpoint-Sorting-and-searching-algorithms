//Start with an unsorted array arr of length n.
//Iterate over the array from index 1 to n-1 (assuming zero-based indexing).
//For each iteration, consider the current element arr[i] as the key.
//Initialize a variable j with the value i-1 as the second counter.
//Compare key with each element arr[j] from j to 0 (backwards).
//If key is smaller than arr[j], shift arr[j] to the right by one position.
//Decrement j by 1.
//Repeat steps 6 and 7 as long as j is greater than or equal to 0 and arr[j] is greater than key.
//Insert key into its correct position by assigning key to arr[j+1].
//Repeat steps 3 to 9 for the remaining elements in the array.
//After the loop ends, the array will be sorted in ascending order.

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  }
  
  // usage:
  const arr = [5, 2, 4, 6, 1, 3];
  insertionSort(arr);
  console.log(arr); // Output: [1, 2, 3, 4, 5, 6]
  