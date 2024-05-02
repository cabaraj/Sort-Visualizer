import React from "react";
import DisplayBars from "./DisplayBars.jsx";
import bubbleSort from "../algorithms/bubbleSortAlgo.js";
import insertionSort from "../algorithms/insertionSortAlgo.js";
import shellSort from "../algorithms/shellSortAlgo.js";
import quickSort from "../algorithms/quickSortAlgo.js";
import mergeSort from "../algorithms/mergeSortAlgo.js";

const INITIAL_NUMBER_OF_BARS = 30;
const INITIAL_ANIMATION_WAIT_TIME_MS = 110;
const INITIAL_COLOR = '#4e626f';
const COMPARING_COLOR = '#e39f4d';
const SWAP_COLOR = '#1d9559';
const NO_SWAP_COLOR = '#e3614d';
const COMPLETED_COLOR = '#1d9559';

const PIVOT_COLOR = '#8f44e3';

const ALGORITHM = {
    'bubble sort' : bubbleSort,
    'insertion sort': insertionSort,
    'shell sort' : shellSort,
    'quick sort' : quickSort,
    'merge sort' : mergeSort,
}


export default class SortVisualizer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            array : [],
            isSorted: false,
            numberOfBars: INITIAL_NUMBER_OF_BARS,
            waitTime: INITIAL_ANIMATION_WAIT_TIME_MS,
            maxValue : 0,
        };
    }

    //when the component first gets included into the main HTML file
    componentDidMount() {
        this.initArray();
    }
    //PAINT ALL BARS GRAY
    initArray() {
        //reset slider value
        const slider = document.getElementById('speedSlider');
        slider.value = 1;
        const speedOutput = document.getElementById('speedAmount');
        speedOutput.innerHTML = 1;

        const n = this.state.numberOfBars;
        function getRandomInt() {
            return Math.floor(Math.random() * n)+1
        }
        const newArray = [];
        
        for (let i = 0; i < n; i++){
            newArray.push(getRandomInt())
        }
        // init the array to have random integers to be represented with bars
        const m = Math.max(...newArray);
        this.setState({array:newArray, isSorted:false, maxValue:m });
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
            const swaps = ALGORITHM[this.props.algorithm](copyArray);
            if(this.props.algorithm === 'merge sort'){
                for(let swap of swaps){
                    this.animateMergedBars(swap);
                    let n = swap[1].length;
                    await this.sleep(2*n+3);//adding +3 to prevent overlapping of modifications
                }
            }
            else if(this.props.algorithm === 'quick sort'){
                let newPivot = true;
                for(let swap of swaps){
                    if(swap.length === 1){
                        this.animateQuickPivot(swap, newPivot);
                        newPivot = !newPivot;
                        await this.sleep(1);
                    } else {
                        this.animateQuickBars(swap);
                        await this.sleep(6);
                    }
                }
            }
            else{
                for(let swap of swaps){
                    this.animateBars(swap);
                    await this.sleep(3);
                }
            }
            await this.sleep(1);
            this.animateSortedBars();
            await this.sleep(3);            
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

    updateSpeed() {
        
        const slider = document.getElementById('speedSlider');
        const elementOutput = document.getElementById('speedAmount');
        elementOutput.innerHTML = slider.value;
        //update wait time
        let wt = this.state.waitTime;
        wt = wt/slider.value;
        this.setState({waitTime:wt});
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
                                <b>{'Elements: '}
                                <span id="elementAmount">{INITIAL_NUMBER_OF_BARS}</span></b>
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
                        <div className="btn slideContainer">
                            <div>
                                <b>{'Speed: x'}
                                <span id="speedAmount">1</span></b>
                                <br/>
                            </div>
                            <input
                                type="range"
                                min={.5}
                                max={2}
                                step={.5}
                                defaultValue={1}
                                className="slider btn-mode"
                                id="speedSlider"
                                onChange={() => this.updateSpeed()}
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

    async animateBars(swapInfo) {
        const arrayBars = document.getElementsByClassName("array-bar");
        const index1 = swapInfo[0];
        const index2 = swapInfo[1];
        const shouldSwap = swapInfo[2];

        const b1 = arrayBars[index1].style;
        const b2 = arrayBars[index2].style;
        
        b1.backgroundColor = b2.backgroundColor = COMPARING_COLOR;

        await this.sleep(1);    
        if(shouldSwap){
            [b1.height, b2.height] = [b2.height, b1.height];
            b1.backgroundColor = b2.backgroundColor = SWAP_COLOR;
        } else {
            b1.backgroundColor = b2.backgroundColor = NO_SWAP_COLOR;
        }
        await this.sleep(1);
        b1.backgroundColor = b2.backgroundColor = INITIAL_COLOR;
        await this.sleep(1);    
    }

    /* Function for Quick Sort */
    async animateQuickPivot(swapInfo, isNewPivot){
        //only change bar color btw PIVOT_COLOR and ORIGINAL
        const arrayBars = document.getElementsByClassName("array-bar");
        const index = swapInfo[0];
        const b = arrayBars[index].style;
        
        if(isNewPivot){
            b.backgroundColor = PIVOT_COLOR;
        } else {
            b.backgroundColor = INITIAL_COLOR;
        }
    }

    async animateQuickBars(swapInfo) {
        const arrayBars = document.getElementsByClassName("array-bar");

        const index1 = swapInfo[0];
        const index2 = swapInfo[1];
        const shouldSwap = swapInfo[2];
        
        const b1 = arrayBars[index1].style;
        const b2 = arrayBars[index2].style;
        
        b1.backgroundColor = b2.backgroundColor = COMPARING_COLOR;

        await this.sleep(2);    
        if(shouldSwap){
            [b1.height, b2.height] = [b2.height, b1.height];
            b1.backgroundColor = b2.backgroundColor = SWAP_COLOR;
        } else {
            b1.backgroundColor = b2.backgroundColor = NO_SWAP_COLOR;
        }
        await this.sleep(2);
        b1.backgroundColor = b2.backgroundColor = INITIAL_COLOR;
        await this.sleep(2);    
    }
    /* Function for Merge Sort */
    async animateMergedBars(info){
        let i = info[0];
        const arr = info[1];

        const arrayBars = document.getElementsByClassName("array-bar");
        for(let val of arr){
            let b = arrayBars[i].style;
            b.height = `${val/this.state.maxValue*100}%`;
            b.backgroundColor = COMPARING_COLOR;
            await this.sleep(1);
            b.backgroundColor = INITIAL_COLOR;
            await this.sleep(1); 
            i++;
        }

    }
    /* Function for remaining algorithms */
    async animateSortedBars() {
        const arrayBars = document.getElementsByClassName("array-bar");
        for(let i = 0; i < arrayBars.length; i++){
            const b1 = arrayBars[i].style;
            b1.backgroundColor = COMPLETED_COLOR;
            await this.sleep(.5);
        }
    }

    deactivateButtons(){
        //disable buttons
        const btns = document.getElementsByClassName('btn-mode');
        for(let btn of btns){
            btn.setAttribute('disabled', 'disabled');
        }
        //disable links
        const links = document.getElementsByClassName('link-mode');
        for(let link of links){
            link.classList.remove('active');
            link.classList.add('disabled');
        }
    }

    activateButtons(){
        //activate buttons
        const btns = document.getElementsByClassName('btn-mode');
        for(let btn of btns){
            btn.removeAttribute('disabled');
        }
        //activate links
        const links = document.getElementsByClassName('link-mode');
        for(let link of links){
            link.classList.remove('disabled');
            link.classList.add('active');
        }
    }

}