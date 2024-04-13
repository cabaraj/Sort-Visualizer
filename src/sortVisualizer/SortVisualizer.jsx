import React from "react";
import "./SortVisualizer.css";
import DisplayBars from "./DisplayBars.jsx";

const NUMBER_OF_BARS = 20;
const INITIAL_COLOR = "blue";
const COMPARING_COLOR = "red";
const COMPLETED_COLOR = "green";
const SWAP_SPEED_MS = 500;

export default class SortVisualizer extends React.Component {
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
        // init the array to have random integers to be represented with bars
        this.setState({array});
    }

    //function to call sort algo and receives an array with the necessary swaps
    startSort() {
        const copyArray = [...this.state.array];
        const swaps = [[0,1],[1,2]]; //call actual function using copyArray
        
        let i = 1;
        for (let swap of swaps) {
            setTimeout(swapBars, i*SWAP_SPEED_MS, swap);
            i++;
        }
        
    }
    
    //function that will return something to be displayed initially
    render() {
        //const {array} = this.state;
        const array = this.state.array;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Sorting Visualizer</h1>
                    </div>
                </div>
                <div className="row">
                    <DisplayBars array={array} barColor={INITIAL_COLOR}/>                        
                </div>
                <div className="row">
                    <div className="col">
                        <button onClick={() => this.initArray()}>Generate New Array</button>
                        <button onClick={() => this.startSort()}>Sort</button>
                    </div>                
                </div>
            </div>
        );
        
    }
}

/* to show as if we change bars, we modify their height */
function swapBars(pair) {

    const arrayBars = document.getElementsByClassName("array-bar");
    const b1 = arrayBars[pair[0]].style;
    const b2 = arrayBars[pair[1]].style;

    [b1.height, b2.height] = [b2.height, b1.height];
}




/* to change the color of a bar:
    get the style for the desired bar and change its background color
    CHANGE BETWEEN BLACK AND RED
    */
function changeBarColor() {
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

