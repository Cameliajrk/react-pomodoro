import React from 'react';
import moment from 'moment'; 
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({
    handleStartStopClick,
    startStopButtonLabel,
    timeLeft,
    timerLabel,
}) => {

    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});
    return (
        <div className={"timer_infos"}>
            <p id="timer-label">{timerLabel}</p>
            <p id="time-left">{formattedTimeLeft}</p>
        </div>
    );
};

export default TimeLeft;
