import TestSortVisualizer from "./TestingPage2";
import insertionSort from "./algorithms/insertionSortAlgo";

export default function TestingPage(){
    let A = [2,8,5,3];
    let s = insertionSort(A);
    console.log(s);
    return (<TestSortVisualizer algorithm={'bubble sort'}/>
    );
}