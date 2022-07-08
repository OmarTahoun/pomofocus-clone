import React from "react";

class Clock extends React.Component{
    formatTime(mins, secs){
        let displayTime = mins < 10 ? "0"+mins.toString() : mins.toString();
        displayTime += ":";
        displayTime += secs < 10 ? "0"+secs.toString() : secs.toString();
        return displayTime;
    }

    render(){
        return(
            <h1>{this.formatTime(this.props.mins, this.props.secs)}</h1>
        );
    }
}

export {Clock};