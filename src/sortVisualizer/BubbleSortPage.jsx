import SortVisualizer from "./SortVisualizer";

export default function BubbleSortPage(){
    return (
        <>
            <h1 id="title">Bubble Sort</h1>
            <SortVisualizer algorithm={'bubble sort'}/>
            <h3>Description for Bubble Sort</h3>
        </>
    );
}