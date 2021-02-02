import moment from 'moment';
import React from 'react';

const Break = ({
        breakLength,
        decrementBreakLengthByOneMinute,
        incrementBreakLengthByOneMinute,
    }) => {

    const breakLengthInMinutes = moment.duration(breakLength, 's').minutes();

    return (
        <div className={"btnSessionBreak"}>
            <button className={"btn_increment"} id="break-decrement" onClick = {decrementBreakLengthByOneMinute}>-</button>
            <div className={"SessionAndBreakTime"}>
                <p id="break-label">Break</p> 
                <p id="break-length">{breakLengthInMinutes}</p> 
            </div>
            <button className={"btn_increment"} id="break-increment" onClick = {incrementBreakLengthByOneMinute}>+</button>
        </div>
    );
}

export default Break;