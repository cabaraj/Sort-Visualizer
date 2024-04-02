import React from "react";
import "./BubbleSort.css";

const NUMBER_OF_BARS = 100;
const INITIAL_COLOR = "blue";
const COMPARING_COLOR = "";
const COMPLETED_COLOR = "";

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
            return Math.floor(Math.random() * NUMBER_OF_BARS)
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
            <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx}
                        style={{
                            backgroundColor: INITIAL_COLOR,
                            height: `${value}px`,
                        }}>
                    </div>
                ))}
            </div>
        );
        
    }
}