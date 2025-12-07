import React from 'react';

export default function CountdownDisplay({
  days,
  hours,
  minutes,
  seconds,
  dayText
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  dayText: string;
}) {
  return (
    <>
      <div className="grid grid-flow-col gap-1 md:gap-5 text-center auto-cols-max justify-center m-10 scale-80 sm:scale-100">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ '--value': days } as React.CSSProperties}
              aria-live="polite"
              aria-label="counter"
            >
              {days}
            </span>
          </span>
          {dayText}
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ '--value': hours } as React.CSSProperties}
              aria-live="polite"
              aria-label="counter"
            >
              {hours}
            </span>
          </span>
          godz.
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ '--value': minutes } as React.CSSProperties}
              aria-live="polite"
              aria-label="counter"
            >
              {minutes}
            </span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ '--value': seconds } as React.CSSProperties}
              aria-live="polite"
              aria-label="counter"
            >
              {seconds}
            </span>
          </span>
          sek
        </div>
      </div>
    </>
  );
}
