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
                                <td>O()</td>
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
                            <b>define </b>mergeSort(A):{"\n"}
                        </pre>
                    </div>
                </div>
            </div>            
        </div>
    );
}