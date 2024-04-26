export default function mergeSort(A){
    const swaps = [];
    merge(A, 0, swaps);
    return swaps;
}


function merge(A, start, swaps){
    const n = A.length;
    if(n > 1){
        const half_point = Math.floor(n/2);
        const left = A.slice(0, half_point);
        const right = A.slice(half_point, n);

        merge(left, start, swaps);
        merge(right, start+half_point, swaps);

        let [i, j, k] = [0, 0, 0];

        

        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                A[k] = left[i];
                i++;
            } else {
                A[k] = right[j];
                j++;
            }
            k++;
            //console.log(A.slice(0, k));
        }
        while(i < left.length){
            A[k] = left[i];
            i++;
            k++;
        }
        while(j < right.length){
            A[k] = right[j];
            j++;
            k++;
        }
        swaps.push([start,A.slice(0, k)]);
    }
}
