import SortVisualizer from "../sortVisualizer/SortVisualizer";

export default function MergeSortPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 id="title">Merge Sort</h1>
                </div>
            </div>            
            <SortVisualizer algorithm={'merge sort'}/>
            <div className="row">
                <div className="col-12 col-lg-7">
                    <h3>Approach</h3>
                    <ul className="bullet-point">
                        <li>
                            Divide the array into two halves based on the midpoint.
                        </li>
                        <li>
                            Recursively call the merge sort function for both subarrays until the subarray has only one element in it.
                        </li>
                        <li>
                            After the recursive call, iterate over the two subarray merging their sorted values into the original array, keeping track of the current indeces.
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
                                <td>O(n*log(n))</td>
                            </tr>
                            <tr>
                                <td>Average Case</td>
                                <td>O(n*log(n))</td>
                            </tr>
                            <tr>
                                <td>Worst Case</td>
                                <td>O(n*log(n))</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="table-heading">Space</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Auxiliary Space</td>
                                <td>O(n)</td>
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
                            <b>define </b>mergeSort(A):{"\n"}
                            {"  "}n = length(A){"\n"}
                            {"  "}<b>if</b> n {'>'} 1 <b>then:</b>{"\n"}
                            {"    "}midpoint = floor_of(n/2){"\n"}
                            {"    "}left = A[0, midpoint]{"\n"}
                            {"    "}right = A[midpoint, n]{"\n"}
                            {"    "}mergeSort(left){"\n"}
                            {"    "}mergeSort(right){"\n"}
                            {"    "}i = j = k = 0{"\n"}
                            {"    "}<b>while</b> i {'<'} length(left) AND j {'<'} length(right) <b>do:</b>{"\n"}
                            {"      "}<b>if</b> left[i] {'<'} right[i] <b>then:</b>{"\n"}
                            {"        "}A[k] = left[i]{"\n"}
                            {"        "}i++{"\n"}
                            {"      "}<b>else then:</b>{"\n"}
                            {"        "}A[k] = right[j]{"\n"}
                            {"        "}j++{"\n"}
                            {"      "}k++{"\n"}
                            {"    "}<b>while</b> i {'<'} length(left):{"\n"}
                            {"      "}A[k] = left[i]{"\n"}
                            {"      "}i++{"\n"}
                            {"      "}k++{"\n"}
                            {"    "}<b>while</b> j {'<'} length(right):{"\n"}
                            {"      "}A[k] = right[j]{"\n"}
                            {"      "}j++{"\n"}
                            {"      "}k++{"\n"}
                        </pre>
                    </div>
                </div>
            </div>            
        </div>
    );
}