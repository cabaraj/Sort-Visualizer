import React from "react";
import DisplayBars from "./DisplayBars.jsx";
import bubbleSort from "./algorithms/bubbleSortAlgo.js";

const INITIAL_NUMBER_OF_BARS = 30;
const INITIAL_ANIMATION_WAIT_TIME_MS = 110;
const INITIAL_COLOR = "gray";
const COMPARING_COLOR = "blue";
const SWAP_COLOR = "red";
const NO_SWAP_COLOR = "black"
const COMPLETED_COLOR = "green";


export default class SortVisualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array : [],
            isSorted: false,
            numberOfBars: INITIAL_NUMBER_OF_BARS,
            waitTime: INITIAL_ANIMATION_WAIT_TIME_MS,
        };
    }

    //when the component first gets included into the main HTML file
    componentDidMount() {
        this.initArray();
    }
    //PAINT ALL BARS GRAY
    initArray() {
        const n = this.state.numberOfBars;
        function getRandomInt() {
            return Math.floor(Math.random() * n)+1
        }
        const newArray = [];
        
        for (let i = 0; i < n; i++){
            newArray.push(getRandomInt())
        }
        // init the array to have random integers to be represented with bars
        this.setState({array:newArray, isSorted:false});
        this.updateWaitTime();
        this.resetBarColor();
    }

    updateWaitTime() {
        const newTime = 230-4*this.state.numberOfBars;
        this.setState({waitTime:newTime});
    }

    resetBarColor() {
        const arrayBars = document.getElementsByClassName("array-bar");
        for(let i = 0; i < arrayBars.length; i++){
            const bar = arrayBars[i].style;
            bar.backgroundColor = INITIAL_COLOR;
        }
    }

    //function to call sort algo and receives an array with the necessary swaps
    async startSort() {
        const copyArray = [...this.state.array];
        
        this.deactivateButtons();

        if(!this.state.isSorted){
            this.setState({isSorted:true});
            let swaps = [];
            if (this.props.algorithm === "bubble sort") {
                swaps = bubbleSort(copyArray);
            }
            for(let swap of swaps){
                this.animateBars(swap);
                await this.sleep(3); 
            }
            await this.sleep(1);
            this.animateSortedBars();
        }
        
        this.activateButtons();
    }

    //to update slider dynamicaly
    updateElements() {
        const slider = document.getElementById('elementSlider');
        const elementOutput = document.getElementById('elementAmount');
        elementOutput.innerHTML = slider.value;
        this.state.numberOfBars = slider.value;
        this.initArray();
    }
    
    render() {
        const array = [...this.state.array];

        return (
            <>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-secondary btn-mode" onClick={() => this.initArray()}>Generate New Array</button>
                        <button className="btn btn-secondary btn-mode" onClick={() => this.startSort()} >Sort</button>
                        
                        <div className="btn slideContainer">
                            <div>
                                {'Elements: '}
                                <span id="elementAmount">{INITIAL_NUMBER_OF_BARS}</span>
                                <br/>
                            </div>
                            <input
                                type="range"
                                min={10}
                                max={50}
                                step={5}
                                defaultValue={30}
                                className="slider btn-mode"
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

    async sleep(n){
        // n is the number of times the function was called in the nested function
        const wt = this.state.waitTime;
        return new Promise(resolve => setTimeout(resolve, wt*n));
    }

    /* to show as if we change bars, we modify their height */
    async animateBars(currentBars) {
        const arrayBars = document.getElementsByClassName("array-bar");
        const b1 = arrayBars[currentBars[0]].style;
        const b2 = arrayBars[currentBars[1]].style;
        
        b1.backgroundColor = b2.backgroundColor = COMPARING_COLOR;
        await this.sleep(1);    
        if(currentBars[2]){
            [b1.height, b2.height] = [b2.height, b1.height];
            b1.backgroundColor = b2.backgroundColor = SWAP_COLOR;
        } else {
            b1.backgroundColor = b2.backgroundColor = NO_SWAP_COLOR;
        }
        await this.sleep(1);
        b1.backgroundColor = b2.backgroundColor = INITIAL_COLOR;
        await this.sleep(1);    
    }

    async animateSortedBars() {
        const arrayBars = document.getElementsByClassName("array-bar");
        for(let i = 0; i < arrayBars.length; i++){
            const b1 = arrayBars[i].style;
            b1.backgroundColor = COMPLETED_COLOR;
            await this.sleep(.5);
        }
    }

    deactivateButtons(){
        const btns = document.getElementsByClassName('btn-mode');
        for(let btn of btns){
            btn.setAttribute('disabled', 'disabled');
        }
    }

    activateButtons(){
        const btns = document.getElementsByClassName('btn-mode');
        for(let btn of btns){
            btn.removeAttribute('disabled');
        }
    }
}