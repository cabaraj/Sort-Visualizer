import SortVisualizer from "../sortVisualizer/SortVisualizer";

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
                <div className="col-12 col-lg-7">
                    <h3>Approach</h3>
                    <ul className="bullet-point">
                        <li>
                            Define a 'key' to keep track of the 'end' of the sorted sub-array. This is initially the second element of the array and the sorted sub-array will start from left to right.
                        </li>
                        <li>
                            Set a variable 'i' to be the index of 'key'.
                        </li>
                        <li>
                            Check if the value of element at [i] is less than the value of element at [i - 1]. If so swap the values and continue checking until element at [i] is greater than or equal to [i - 1] OR until 'i' is the first element.
                        </li>
                        <li>
                            Increase key to be the next element after it and do the comparision process from the previous step.
                        </li>
                        <li>
                            Do this until 'key' is the last element in the array.
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-5">
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
                    <i>Where <b>n</b> is the number of elements in the array.</i><br/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Pseudocode Implementation</h3>
                    <div>
                        <pre className="code-content">
                            <b>define</b> insertionSort(A):{"\n"}
                            {"  "}n = length(A){"\n"}
                            {"  "}<b>for</b> i from 0 to (n-1) <b>do:</b>{"\n"}
                            {"    "}key = A[i]{"\n"}
                            {"    "}j = i - 1{"\n"}
                            {"    "}<b>while</b> j {'>='} 0 AND key {'<'} A[j] <b>do:</b>{"\n"}
                            {"      "}A[j+1] = A[j]{"\n"}
                            {"      "}j = j - 1{"\n"}
                            {"    "}A[j+1] = key{"\n"}
                        </pre>
                    </div>
                </div>
            </div>            
        </div>
    );
}