import React, {useState, useEffect} from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import "./scss/app.scss";

function App() {
    const [currentSessionType, setCurrentSessionType] = useState("Session"); // 'Session' or 'Break'
    const [intervalId, setIntervalId] = useState(null);
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const [breakLength, setBreakLength] = useState(300);
    const [timeLeft, setTimeLeft] = useState(sessionLength);

    // change timeLeft whenever sessionLength change
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60;
        if (newBreakLength > 0) {
            setBreakLength(newBreakLength);
        }
    };

    const incrementBreakLengthByOneMinute = () => {
        setBreakLength(breakLength + 60);
    };

    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength - 60;
        if (newSessionLength > 0) {
            setSessionLength(newSessionLength);
        }
    };

    const incrementSessionLengthByOneMinute = () => {
        setSessionLength(sessionLength + 60);
    };

    const isStarted = intervalId !== null;

    const handleStartStopClick = () => {
        if (isStarted) {
            // we want to stop the timer
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            // decrement timeLeft by one every second (1000ms)
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };

    const handleResetButtonClick = () => {
        // clear the timeout interval
        clearInterval(intervalId);
        // set the intervalId null
        setIntervalId(null);
        // set the sessiontype to 'session'
        setCurrentSessionType("Session");
        // reset the session length to 25 minutes
        setSessionLength(60 * 25);
        // reset the break length to 5 minutes
        setBreakLength(60 * 5);
        // reset the timer to 25 minutes
        setTimeLeft(60 * 25);
    };

    return (
        <div className={"App"}>
            <Break
                breakLength={breakLength}
                decrementBreakLengthByOneMinute={
                    decrementBreakLengthByOneMinute
                }
                incrementBreakLengthByOneMinute={
                    incrementBreakLengthByOneMinute
                }
            />
            <TimeLeft
                handleStartStopClick={handleStartStopClick}
                timerLabel={currentSessionType}
                startStopButtonLabel={isStarted ? "Stop" : "Start"}
                timeLeft={timeLeft}
            />
            <Session
                sessionLength={sessionLength}
                decrementSessionLengthByOneMinute={
                    decrementSessionLengthByOneMinute
                }
                incrementSessionLengthByOneMinute={
                    incrementSessionLengthByOneMinute
                }
            />
            <button
                type={"button"}
                id={"reset"}
                onClick={handleResetButtonClick}>
                {"Reset"}
            </button>
        </div>
    );
}

export default App;
