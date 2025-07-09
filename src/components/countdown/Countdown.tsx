'use client'

import React, {useEffect, useState} from "react";

export default function Countdown({ dateToCountdown }: { dateToCountdown: Date }) {

    const [date, setDate] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(dateToCountdown.getTime() - new Date().getTime());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [dateToCountdown]);
    let days, hours, minutes, seconds;
    if (date < 0 ){
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    }
    else {
        days = Math.floor(date / (1000 * 60 * 60 * 24));
        hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((date % (1000 * 60)) / 1000);
    }

    let dayText = " dni ";
    if (days === 1) dayText = " dzień ";

    return (
    <div className="flex gap-5 justify-center m-10 text-4xl font-bold">
        <div>
    <span className="countdown">
        <span style={{"--value":days} as React.CSSProperties } aria-live="polite" aria-label="counter" className="mr-4">{days}</span>
        {dayText}
    </span>
        </div>
        <div>
    <span className="countdown">
        <span style={{"--value":hours} as React.CSSProperties } aria-live="polite" aria-label="counter" className="ml-8">{hours}</span>
        :
    </span>
        </div>
        <div>
    <span className="countdown">
      <span style={{"--value":minutes} as React.CSSProperties } aria-live="polite" aria-label="counter">{minutes}</span>
        :
    </span>
        </div>
        <div>
    <span className="countdown">
      <span style={{"--value":seconds} as React.CSSProperties } aria-live="polite" aria-label="counter">{seconds}</span>
    </span>
        </div>
    </div>);
}