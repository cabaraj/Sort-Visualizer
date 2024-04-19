import SortVisualizer from "./SortVisualizer";

export default function BubbleSortPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 id="title">Bubble Sort</h1>
                </div>
            </div>            
            <SortVisualizer algorithm={'bubble sort'}/>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <h3>Description</h3>
                    <p>
                        The name of Bubble Sort was given from the idea that under the water, bigger bubbles will reach the surface faster than the small ones. Thus, bigger elements will be sorted before those with smaller values.
                        <br/>
                        While Bubble Sort is one of the simplest sorting algorithm to implement, it is also one of the least efficient.
                        <br/>
                        It operates by repeatedly comparing adjacent elements in a list and swapping them if they are in the wrong order. The algorithm is a process of multiple comparing and swapping steps described as follows:
                        <br/>
                        <ul>
                            <li>
                                The algorithm starts by comparing the first two elements in the list.
                            </li>
                            <li>
                                If the first element is greater than the second, they are swapped.
                            </li>
                            <li>
                                This process continues for adjacent pairs of elements throughout the entire list.
                            </li>
                            <li>
                                After the first pass, the largest element will have “bubbled up” to the rightmost position.
                            </li>
                            <li>
                                Bubble Sort repeats this process for subsequent passes.
                            </li>
                            <li>
                                In each pass, the next largest element is moved to its correct position.
                            </li>
                            <li>
                                The process continues until all elements are sorted.
                            </li>
                        </ul>	
                        This is the simplest version of Bubble Sort. However, there exist few optimized versions where it stops early if no swaps occur during an entire iteration. This avoids unnecessary iterations when the list is already sorted.
                    </p>
                </div>
                <div className="col-12 col-lg-4">
                    <h3>Complexity Analysis</h3>
                    <h4>Time</h4>
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
                    <h4>Space</h4>
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
                <div className="col-6">
                    <h3>Pseudo-Code</h3>
                    <div className="code-content">                      
                        <span className="kw">define </span><span className="algo-name">bubbleSort</span>(A):<br/>
                        &emsp; <span className="var">n</span> = length(A) <br/>
                        &emsp; <span className="kw">for</span> <span className="var">i</span> from 0 to (<span className="var">n</span>-1) <span className="kw">do:</span><br/>
                        &emsp;&emsp; <span className="kw">for</span> <span className="var">j</span> from 0 to (<span className="var">n</span>-<span className="var">i</span>-1) <span className="kw">do:</span><br/>
                        &emsp;&emsp;&emsp; <span className="kw">if</span> A[<span className="var">j</span>] {'>'} A[<span className="var">j</span>+1] <span className="kw">then:</span><br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;<span className="var">temp</span> = A[<span className="var">j</span>]<br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;A[<span className="var">j</span>] = A[<span className="var">j</span>+1]<br/>
                        &emsp;&emsp;&emsp;&emsp;&emsp;A[<span className="var">j</span>+1] = <span className="var">temp</span><br/>
                    </div>
                    <div className="code-content" id="test">                      
                        <b>define </b>bubbleSort(A):<br/>
                        &emsp; n = length(A) <br/>
                        &emsp; <b>for</b> i from 0 to (n-1) <b>do:</b><br/>
                        &emsp;&emsp; <b>for</b> j from 0 to (n-i-1) <b>do:</b><br/>
                        &emsp;&emsp;&emsp; <b>if</b> A[j] {'>'} A[j+1] <b>then:</b><br/>
                        &emsp;&emsp;&emsp;&emsp; temp = A[j]<br/>
                        &emsp;&emsp;&emsp;&emsp; A[j] = A[j+1]<br/>
                        &emsp;&emsp;&emsp;&emsp; A[j+1] = temp<br/>
                    </div>
                </div>
            </div>            
        </div>
    );
}