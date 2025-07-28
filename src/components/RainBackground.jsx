"use client"
import React, { useState, useEffect } from 'react'

const createRaindrop = () => ({
    id: Math.random(),
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 0.6 + 0.5}s`, // 0.5s to 1.1s
    delay: `${Math.random() * 2}s`,
    initialTop: `-${Math.random() * 100}px` // start above the viewport
})

const RainBackground = () => {
    const [raindrops, setRaindrops] = useState([]);

    useEffect(() => {
        // Generate a fixed number of raindrops
        const drops = Array.from({length: 60}, () => createRaindrop());
        setRaindrops(drops);
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none'>
            {raindrops.map((drop) => (
                <div
                    key={drop.id}
                    className='absolute w-[2px] h-[30px] bg-raindrop rounded-full opacity-80'
                    style={{
                        left: drop.left,
                        top: drop.initialTop,
                        animation: `rain-fall ${drop.animationDuration} linear infinite`,
                        animationDelay: drop.delay
                    }}
                />
            ))}
        </div>
    );
}

export default RainBackground