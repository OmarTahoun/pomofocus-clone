import React from "react";
import {Clock} from "./clock.js";

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mins : this.props.mins,
            secs : this.props.secs,
            running: false,
        };
    }

    componentDidMount(){
        this.TimerID = setInterval(() => this.tick(), 10);
    }

    componentWillUnmount(){
        clearInterval(this.TimerID);
    }

    tick(){
        if(this.state.mins === 0 && this.state.secs === 0){
            this.setState({
                mins: this.props.mins,
                secs: this.props.secs,
                running: false,
            });
        }

        if(this.state.running && (this.state.mins > 0 || this.state.secs > 0)){
            const newMins = this.state.secs === 0 ? this.state.mins - 1 : this.state.mins;
            const newSecs = this.state.secs === 0 ? 59 : this.state.secs - 1;

            this.setState({
                mins: newMins,
                secs: newSecs,
            });
        }
    }

    toggleTimer(){
        this.setState({running:!this.state.running});
    }

    render(){
        return(
            <>
            <Clock mins={this.state.mins} secs={this.state.secs}/>

            <button onClick={() => this.toggleTimer()}>
                {
                    this.state.running ? "Stop" : "Start"
                }
            </button>
            </>
        );
    }
}

export {Timer}