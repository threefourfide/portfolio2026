import React from 'react';

export default function ArrowIcon({ size = 18, direction = 'right' }) {
    const rotation = {
        right: 0,
        up: -90,
        diagonal: -45
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                transform: `rotate(${rotation[direction] ?? 0}deg)`,
                flexShrink: 0
            }}
            aria-hidden="true"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}