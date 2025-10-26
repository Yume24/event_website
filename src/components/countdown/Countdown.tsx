'use client';

import React, { useEffect, useState } from 'react';
import CountdownDisplay from '@/components/countdown/CountdownDisplay';

export default function Countdown({
  dateToCountdown
}: {
  dateToCountdown: Date;
}) {
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(dateToCountdown.getTime() - new Date().getTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dateToCountdown]);
  let days, hours, minutes, seconds;
  if (remaining < 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  } else {
    days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  }

  let dayText = ' dni ';
  if (days === 1) dayText = ' dzień ';
  return (
    <CountdownDisplay
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      dayText={dayText}
    />
  );
}
