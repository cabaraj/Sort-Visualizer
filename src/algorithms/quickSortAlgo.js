
export default function quickSort(A){
    const swaps = [];
    quickSortHelper(A, 0, A.length - 1, swaps);
    return swaps;
}

function quickSortHelper(A, left, right, swaps){
    if(left < right){
        let p = partition(A, left, right, swaps);
        quickSortHelper(A, left, p - 1, swaps);
        quickSortHelper(A, p + 1, right, swaps);
    }
}

function partition(A, left, right, swaps){
    let i = left;
    let j = right - 1;
    const pivot = A[right];

    while(i < j){
        while(i < right && A[i] < pivot){
            i++;
        }
        while(j > left && A[j] >= pivot){
            j--;
        }
        if(i < j){
            [A[i], A[j]] = [A[j], A[i]];
            swaps.push([i, j, true]);
        } else {
            swaps.push([i, j, false]);
        }
    }
    if(A[i] > pivot){
        [A[i], A[right]] = [A[right], A[i]];
        swaps.push([i, right, true]);
    }
    return i;
}

