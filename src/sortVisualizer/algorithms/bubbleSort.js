/* the 'swaps' var will be an array
    each array element contains 3 elements:
    -the 2 indices of bars being compared and
     a boolean indicating if a swap happened. */

export default function bubbleSort(A){
    const n = A.length;
    const swaps = [];
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n-i-1; j++){
            if(A[j] > A[j+1]){
                [A[j], A[j+1]] = [A[j+1], A[j]];
                swaps.push([j, j+1, true]);
            } else{
                swaps.push([j, j+1, false]);
            }
        }
    }
    return swaps;
}