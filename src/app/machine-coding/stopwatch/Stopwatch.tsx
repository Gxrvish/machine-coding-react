"use client";
import { type ChangeEvent, useEffect, useRef, useState } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState({
        hour: 0,
        minute: 0,
        second: 0,
    });

    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement>,
        field: "hour" | "minute" | "second",
    ) => {
        const inputValue = Math.max(0, parseInt(e.target.value, 10) || 0);
        const newTime = { ...time, [field]: inputValue };

        newTime.minute += Math.floor(newTime.second / 60);
        newTime.second = newTime.second % 60;
        newTime.hour += Math.floor(newTime.minute / 60);
        newTime.minute = newTime.minute % 60;

        setTime(newTime);
    };

    const handleStart = () => {
        // Prevent starting if already 0:0:0
        if (time.hour === 0 && time.minute === 0 && time.second === 0) return;
        setIsRunning((prev) => !prev);
    };

    const handleReset = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsRunning(false);
        setTime({ hour: 0, minute: 0, second: 0 });
    };

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = window.setInterval(() => {
                setTime((prevTime) => {
                    let { hour, minute, second } = prevTime;

                    if (hour === 0 && minute === 0 && second === 0) {
                        setIsRunning(false);
                        return prevTime;
                    }

                    if (second > 0) {
                        second--;
                    } else if (minute > 0) {
                        minute--;
                        second = 59;
                    } else if (hour > 0) {
                        hour--;
                        minute = 59;
                        second = 59;
                    }

                    return { hour, minute, second };
                });
            }, 1000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isRunning]);

    return (
        <div className="container">
            <div className="input-container">
                <input
                    value={time.hour}
                    onChange={(e) => handleChange(e, "hour")}
                    type="number"
                    min="0"
                    placeholder="HH"
                    disabled={isRunning}
                />
                <span>:</span>
                <input
                    value={time.minute}
                    onChange={(e) => handleChange(e, "minute")}
                    type="number"
                    min="0"
                    placeholder="MM"
                    disabled={isRunning}
                />
                <span>:</span>
                <input
                    value={time.second}
                    onChange={(e) => handleChange(e, "second")}
                    type="number"
                    min="0"
                    placeholder="SS"
                    disabled={isRunning}
                />
            </div>
            <div className="btn-container">
                <button className="btn-start" onClick={handleStart}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button className="btn-reset" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
