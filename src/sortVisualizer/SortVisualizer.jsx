import React from "react";
import "./BubbleSort.css";
import DisplayBars from "./DisplayBars.js";

const NUMBER_OF_BARS = 20;
const INITIAL_COLOR = "blue";
const COMPARING_COLOR = "red";
const COMPLETED_COLOR = "green";

export default class BubbleSortVisualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array : [],
        };
    }

    //when the component first gets included into the main HTML file
    componentDidMount() {
        this.initArray();
    }

    initArray() {
        function getRandomInt() {
            return Math.floor(Math.random() * NUMBER_OF_BARS)+1
        }
        const array = [];
        
        for (let i = 0; i < NUMBER_OF_BARS; i++){
            array.push(getRandomInt())
        }
        // init the array to have random integers
        this.setState({array});
    }

    render() {
        const {array} = this.state;
        return (
            <>
                <DisplayBars array={array} barColor={INITIAL_COLOR}/>
                <button onClick={() => this.initArray()}>Generate New Array</button>
                <button onClick={() => colorBars()}>Color</button>
                <button onClick={() => swapBars()}>Swap</button>
            </>
        );
        
    }
}

/*
function DisplayBars({ array, sorting=false }) {
    let bgColor = (sorting === true) ? COMPARING_COLOR : INITIAL_COLOR;

    return (
        <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" key={idx}
                    style={{
                        backgroundColor: bgColor,
                        height: `${value*5}px`,
                    }}>
                </div>
            ))}
        </div>
    );
}
*/

/* to change the color of a bar:
    get the style for the desired bar and change its background color*/
function colorBars() {
    console.log('BARS')
    const arrayBars = document.getElementsByClassName("array-bar");
    const barOneStyle = arrayBars[1].style;
    barOneStyle.backgroundColor = 'red';

    const index = [];
    for (let i=0; i<NUMBER_OF_BARS;i++){
        index.push(i)
    }
    //const bar = document
}

/* to change bars, we change their height */
function swapBars() {

    const arrayBars = document.getElementsByClassName("array-bar");
    const b1 = arrayBars[0].style;
    const b2 = arrayBars[1].style;
    //console.log(arrayBars);
    //arrayBars[0] = b2;
    [b1.height, b2.height] = [b2.height, b1.height];
    //console.log(arrayBars);
}