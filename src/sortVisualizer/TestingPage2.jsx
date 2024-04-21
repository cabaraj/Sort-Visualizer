import React from "react";
import DisplayBars from "./DisplayBars.jsx";
import bubbleSort from "./algorithms/bubbleSortAlgo.js";

const INITIAL_NUMBER_OF_BARS = 30;
const INITIAL_COLOR = "gray";
const COMPARING_COLOR = "blue";
const SWAP_COLOR = "red";
const COMPLETED_COLOR = "green";
const ANIMATION_WAIT_TIME_MS = 190;//1000 / NUMBER_OF_BARS*10;
//10 bars = 0 wait
//15 170
//20 150
//25 130
//30 bars = 110
//35 90
//40 70
//45 50
//50 bars = 30

export default class TestSortVisualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array : [],
            sorted: false,
            numberOfBars: INITIAL_NUMBER_OF_BARS,
        };
    }

    //when the component first gets included into the main HTML file
    componentDidMount() {
        this.initArray();
    }

    initArray() {
        const n = this.state.numberOfBars;
        function getRandomInt() {
            return Math.floor(Math.random() * n)+1
        }
        const newArray = [];
        
        for (let i = 0; i < n; i++){
            newArray.push(getRandomInt())
        }

        this.setState({array:newArray, sorted:false});
    }

    //function to call sort algo and receives an array with the necessary swaps
    async startSort() {
        const copyArray = [...this.state.array];
        
        //DISABLE BUTTONS
        const btns = document.getElementsByClassName('btn-d');
        for(let btn of btns){
            btn.setAttribute('disabled', 'disabled');
        }
        if(this.state.sorted){
            animateSortedBars();
        } else {
            this.setState({sorted:true})
            let swaps = [];
            if (this.props.algorithm === "bubble sort") {
                //swaps = bubbleSort(copyArray);
                swaps = bubbleSort(copyArray);
                //bubbleSort(this.state.array);
            }
            for(let swap of swaps){
                
                animateBars(swap);
                await sleep(3);
            }
            sleep(1);
            animateSortedBars();
        }
        console.log(this.state.array);
        //activate buttons
        for(let btn of btns){
            btn.removeAttribute('disabled');
        }
    }
    
    updateElements() {
        //to update slider dynamicaly
        const slider = document.getElementById('elementSlider');
        const elementOutput = document.getElementById('elementAmount');
        elementOutput.innerHTML = slider.value;
        this.state.numberOfBars = slider.value;
        console.log(this.state.numberOfBars);
        this.initArray()
        /*
        slider.oninput = () => {
            elementOutput.innerHTML = slider.value;
        }
        */
    }
    //function that will return something to be displayed initially
    render() {
        //const {array} = this.state;
        const array = [...this.state.array];        

        return (
            <>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-secondary btn-d" onClick={() => this.initArray()}>Generate New Array</button>
                        <button className="btn btn-secondary btn-d" onClick={() => this.startSort()} >Sort</button>
                        <div className="slidecontainer">
                            {'Elements: '}
                            <span id="elementAmount">30</span>
                            <br/>
                            <input
                                type="range"
                                min={10}
                                max={50}
                                step={5}
                                defaultValue={30}
                                className="slider"
                                id="elementSlider"
                                onChange={() => this.updateElements()}
                            />
                        </div>
                    </div>                
                </div>
                <div className="row" id="bar-container">
                    <DisplayBars array={array} barColor={INITIAL_COLOR} noOfBars={this.state.numberOfBars}/>                        
                </div>                
            </>
        );
        
    }
}

function isSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

async function sleep(n){
    // n is the number of times the function was called in the nested function
    return new Promise(resolve => setTimeout(resolve, ANIMATION_WAIT_TIME_MS*n));
}

/* to show as if we change bars, we modify their height */
async function animateBars(currentBars, i) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const b1 = arrayBars[currentBars[0]].style;
    const b2 = arrayBars[currentBars[1]].style;
    //change bars color to COMPARING and check if swap is needed
    //await sleep();
    b1.backgroundColor = b2.backgroundColor = COMPARING_COLOR;
    await sleep(1);    
    if(currentBars[2]){
        [b1.height, b2.height] = [b2.height, b1.height];
        b1.backgroundColor = b2.backgroundColor = SWAP_COLOR;
        
    } else {
        b1.backgroundColor = b2.backgroundColor = COMPLETED_COLOR;
    }
    await sleep(1); 
    b1.backgroundColor = b2.backgroundColor = INITIAL_COLOR;
    await sleep(1);
}

async function animateSortedBars() {
    const arrayBars = document.getElementsByClassName("array-bar");
    for(let i = 0; i < arrayBars.length; i++){
        const b1 = arrayBars[i].style;
        b1.backgroundColor = COMPLETED_COLOR;
        await sleep(.5);
        //b1.backgroundColor = INITIAL_COLOR;
    }
}

