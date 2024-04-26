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
                <div className="col-12 col-lg-7">
                    <h3>Approach</h3>
                    <ul className="bullet-point">
                        <li>
                            Create a helper function <i>partition()</i> to place the pivot (could be choosen at random, but this sample chooses the last element in the subarray as the pivot) at its correct position in the sorted array.
                        </li>
                        <li>
                            In <i>partition()</i> store elements less than pivot in left subarray and elements greater than pivot in right subarray.
                        </li>
                        <li>
                            Call quicksort recursively on the left subarray.
                        </li>
                        <li>
                            Call quicksort recursively on the right subarray.
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
                                <td>O(n<sup>2</sup>)</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="table-heading">Space</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Auxiliary Space</td>
                                <td>O(1)*</td>
                            </tr>
                        </tbody>
                    </table>
                    <i>Where <b>n</b> is the number of elements in the array.</i><br/>
                    <p style={{'font-size':'small'}}>* in the worst case, where the pivot is always either the biggest or the smallest element on every iteration, the auxiliary space will be O(n).</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Pseudocode Implementation</h3>
                    <div>
                        <pre className="code-content">
                            <b>define </b>quickSort(A, left, right):{"\n"}
                            {"  "}<b>if</b> left AND right are null <b>then:</b>{"\n"}
                            {"    "}left = 0{"\n"}
                            {"    "}right = length(A) - 1{"\n"}
                            {"  "}<b>if</b> left {'<'} right <b>then:</b>{"\n"}
                            {"    "}p = partition(A, left, right){"\n"}
                            {"    "}quickSort(A, left, p - 1){"\n"}
                            {"    "}quickSort(A, p + 1, right){"\n"}
                            {"\n"}
                            <b>define </b>partition(A, left, right):{"\n"}
                            {"  "}i = left{"\n"}
                            {"  "}j = right - 1{"\n"}
                            {"  "}pivot = A[right]{"\n"}
                            {"  "}<b>while</b> i {'<'} j <b>do:</b>{"\n"}
                            {"    "}<b>while</b> i {'<'} right AND A[i] {'<'} pivot <b>do:</b>{"\n"}
                            {"      "}i = i + 1{"\n"}
                            {"    "}<b>while</b> j {'>'} left AND A[j] {'>'} pivot <b>do:</b>{"\n"}
                            {"      "}j = j - 1{"\n"}
                            {"    "}<b>if</b> i {'<'} j <b>then:</b>{"\n"}
                            {"      "}swap A[i] with A[j]{"\n"}
                            {"  "}<b>if</b> A[i] {'>'} pivot <b>then:</b>{"\n"}
                            {"    "}swap A[i] with A[right]{"\n"}
                            {"  "}return i{"\n"}
                        </pre>
                    </div>
                </div>
            </div>            
        </div>
    );
}