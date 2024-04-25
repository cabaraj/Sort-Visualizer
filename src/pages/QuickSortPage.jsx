import SortVisualizer from "../sortVisualizer/SortVisualizer";

export default function QuickSortPage(){
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 id="title">Quick Sort</h1>
                </div>
            </div>            
            <SortVisualizer algorithm={'quick sort'}/>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <h3>Approach</h3>
                    <ul>
                        <li className="bullet-point">
                        </li>
                        <li className="bullet-point">
                        </li>
                        <li className="bullet-point">
                        </li>
                        <li className="bullet-point">
                        </li>
                        <li className="bullet-point">
                        </li>
                        <li className="bullet-point">
                        </li>
                        <li className="bullet-point">
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
                                <td>O()</td>
                            </tr>
                            <tr>
                                <td>Average Case</td>
                                <td>O())</td>
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