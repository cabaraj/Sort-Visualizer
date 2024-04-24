import SortVisualizer from "./SortVisualizer";

export default function InsertionSortPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 id="title">Insertion Sort</h1>
                </div>
            </div>            
            <SortVisualizer algorithm={'insertion sort'}/>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <h3>Description</h3>
                    <p>
                        The name of Bubble Sort was given from the idea that under the water, bigger bubbles will reach the surface faster than the small ones. Thus, bigger elements will be sorted before those with smaller values.
                        <br/>
                        While Bubble Sort is one of the simplest sorting algorithm to implement, it is also one of the least efficient.
                        <br/>
                        It operates by repeatedly comparing adjacent elements in a list and swapping them if they are in the wrong order. The algorithm is a process of multiple comparing and swapping steps described as follows:
                    </p>
                    <ul>
                        <li className="bullet-point">
                            The algorithm starts by comparing the first two elements in the list.
                        </li>
                        <li className="bullet-point">
                            If the first element is greater than the second, they are swapped.
                        </li>
                        <li className="bullet-point">
                            This process continues for adjacent pairs of elements throughout the entire list.
                        </li>
                        <li className="bullet-point">
                            After the first pass, the largest element will have “bubbled up” to the rightmost position.
                        </li>
                        <li className="bullet-point">
                            Bubble Sort repeats this process for subsequent passes.
                        </li>
                        <li className="bullet-point">
                            In each pass, the next largest element is moved to its correct position.
                        </li>
                        <li className="bullet-point">
                            The process continues until all elements are sorted.
                        </li>
                    </ul>
                    <p>	
                        This is the simplest version of Bubble Sort. However, there exist few optimized versions where it stops early if no swaps occur during an entire iteration. This avoids unnecessary iterations when the list is already sorted.
                    </p>
                </div>
                <div className="col-12 col-lg-4">
                    <h3>Complexity Analysis</h3>
                    <h4 className="table-heading">Time</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Best Case</td>
                                <td>O(n)</td>
                            </tr>
                            <tr>
                                <td>Average Case</td>
                                <td>O(n<sup>2</sup>)</td>
                            </tr>
                            <tr>
                                <td>Worst Case</td>
                                <td>O(n<sup>2</sup>)</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="table-heading">Space</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Auxiliary Space</td>
                                <td>O(1)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Pseudocode Implementation</h3>
                    <div className="code-content">
                        <pre>
                            <b>define </b>bubbleSort(A):{"\n"}
                            {"  "}n = length(A){"\n"}
                            {"  "}<b>for</b> i from 0 to (n-1) <b>do:</b>{"\n"}
                            {"    "}<b>for</b> j from 0 to (n-i-1) <b>do:</b>{"\n"}
                            {"      "}<b>if</b> A[j] {'>'} A[j+1] <b>then:</b>{"\n"}
                            {"        "}temp = A[j]{"\n"}
                            {"        "}A[j] = A[j+1]{"\n"}
                            {"        "}A[j+1] = temp{"\n"}
                        </pre>
                    </div>
                </div>
            </div>            
        </div>
    );
}