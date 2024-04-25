export default function shellSort(A){
    const n = A.length;
    const swaps = [];
    for(let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)){
        for(let i = gap; i < n; i++){
            let temp = A[i];
            let j = i;
            if(A[j - gap] <= temp){
                //ONLY FOR ANIMATION PURPOSES
                swaps.push([j, j-gap, false])
            }
            for(j = i; j >= gap && A[j - gap] > temp; j -= gap){
                A[j] = A[j - gap];
                swaps.push([j, j-gap, true])
            }
            A[j] = temp;
        }
    }
    return swaps;
}