export default function Home() {
    return (
        <>
            <div style={{'background-color':'#5d7b89'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6" style={{'margin-top':'5%', 'margin-bottom':'5%'}}>
                            <img src="src/static/bars.png" className="img-fluid" id="home-img" />
                        </div>
                        <div className="col-12 col-lg-6" id="title-name">SORTING VISUALIZER</div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{'margin-top':'5%'}}>
                    <h1>What are Sorting Algorithms?</h1>
                    <div className="col-11 col-lg-8 home-info">
                        <h4>
                            In sorting problems, the algorithm receives a collection of <i>n</i> comparable items and its task is to place them in order, either ascending or descending.<br/>
                            <br/>
                            One of the reasons to sort a list of elements is to optimize efficiency for further actions, such as searching for an element or adding a new one at its sorted position.<br/>
                            <br/>
                            Complexity analysis is a crucial concept in computer science for evaluating algorithms. It assesses an algorithm's efficiency by estimating the <b>time</b> and <b>space</b> required for its execution, such as sorting a list of elements.<br/>
                            <br/>
                            Asymptotic notation is a mathematical tool used to describe this complexity, with Big O notation (O) being the most commonly used form. Asymptotic notations typically express complexity as a function of the input size, denoted by <i>'n'</i>. In cases where the complexity is independent of the input size, it is described as <i>'constant'</i> and represented by O(1).<br/>
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <h2><b>The goal of the project</b></h2>
                    <div className="col-11 col-lg-8 home-info">
                        <h4>
                            Data structures and algorithms constitute the fundament of computer science, providing the framework for efficient data management and problem-solving. However, the abstract nature of these concepts can pose a challenge, particularly for visual learners who benefit from seeing ideas in action.<br/>
                            <br/>
                            A sorting visualizer serves as an invaluable tool in this context, transforming the abstract into the concrete. By visually demonstrating the step-by-step execution of algorithms, a sorting visualizer helps in understanding how different algorithms approach the problem of sorting data, and the efficiency of each method.<br/>
                        </h4>
                    </div>
                </div>
            </div>
        </>
        
    );
}