import moment from 'moment';
import React from 'react';

const Session = ({
        sessionLength,
        decrementSessionLengthByOneMinute,
        incrementSessionLengthByOneMinute,
    }) => {

    const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes();

    return (
        <div className={"btnSessionBreak"}>
            <button className={"btn_increment"} id="session-decrement" onClick = {decrementSessionLengthByOneMinute}>-</button>
            <div className={"SessionAndBreakTime"}>
                <p id="session-label">Session</p> 
                <p id="session-length">{sessionLengthInMinutes}</p> 
            </div>
            <button className={"btn_increment"} id="session-increment" onClick = {incrementSessionLengthByOneMinute}>+</button>
        </div>
    );
}

export default Session;