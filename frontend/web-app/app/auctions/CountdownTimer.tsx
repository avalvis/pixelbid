'use client'

import React from 'react'
import Countdown, { zeroPad } from 'react-countdown';

type Props = {
    auctionEnd: string;
}

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }:
    { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {

    let bgColorClass = completed ? 'bg-red-600' : (days === 0 && hours < 10) ? 'bg-amber-600' : '';
    let bgColorStyle = (days !== 0 || hours >= 10) ? { backgroundColor: '#7ABA78' } : {};

    return (
        <div className={`border-2 border-white text-white py-1 px-2 rounded-lg flex justify-center ${bgColorClass}`}
            style={bgColorStyle}>

            {completed ? (
                <span>Finished</span>
            ) : (
                <span suppressHydrationWarning={true}>
                    {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                </span>
            )}
        </div>
    )
};

export default function CountdownTimer({ auctionEnd }: Props) {
    return (
        <div>
            <Countdown date={auctionEnd} renderer={renderer} />
        </div>
    )
}