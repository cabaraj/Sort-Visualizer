import SortVisualizer from "../sortVisualizer/SortVisualizer";

export default function ShellSortPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 id="title">Shell Sort</h1>
                </div>
            </div>            
            <SortVisualizer algorithm={'shell sort'}/>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <h3>Approach</h3>
                    <ul>
                        <li className="bullet-point">
                            Define a gap to compare elements apart by the value of the gap. This sample initiates gap to be half the size of the array.
                        </li>
                        <li className="bullet-point">
                            Traverse the list of elements comparing the element at index (i) with element at (i + gap) until element at (i + gap) is the last one in the list.
                        </li>
                        <li className="bullet-point">
                            While traversing the list, swap the elements if element at (i) is greater than element at (i + gap).
                        </li>
                        <li className="bullet-point">
                            Update the value of gap to be half its value.
                        </li>
                        <li className="bullet-point">
                            Repeat previous steps until the value of gap equals 1.
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4">
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
                                <td>~ O(n<sup>1.25</sup>)</td>
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
                            <b>define</b> shellSort(A):{"\n"}
                            {"  "}n = length(A){"\n"}
                            {"  "}gap = n / 2{"\n"}
                            {"  "}<b>while</b> gap {'>'} 0 <b>do:</b>{"\n"}
                            {"    "}<b>for</b> i from gap to n <b>do:</b>{"\n"}
                            {"      "}temp = A[i]{"\n"}
                            {"      "}j = i{"\n"}
                            {"      "}<b>while</b> j {'>='} gap AND A[j-gap] {'>'} temp <b>do:</b>{"\n"}
                            {"        "}A[j] = A[j-gap]{"\n"}
                            {"        "}j = j - gap{"\n"}
                            {"      "}A[j] = temp{"\n"}
                            {"    "}gap = gap/2{"\n"}
                        </pre>
                    </div>
                </div>
            </div>            
        </div>
    );
}