"use client"
import React, { useEffect, useRef, useCallback } from 'react'
import './otp.css'

const Otp = ({ otpLength = 6 }) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
            const key = e.key;
            const input = inputRefs.current[index];
            if (key === 'ArrowLeft' || key === 'ArrowRight') {
                e.preventDefault();
                const targetIndex = key === 'ArrowLeft' ? index - 1 : index + 1;
                inputRefs.current[targetIndex]?.focus();
                return;
            }
            if (/^[0-9]$/.test(key)) {
                e.preventDefault();
                if (input) input.value = key;
                inputRefs.current[index + 1]?.focus();
                return;
            }
            if (key === 'Backspace') {
                e.preventDefault();
                if (input) input.value = '';
                inputRefs.current[index - 1]?.focus();
                return;
            }
            if (key !== 'Tab') {
                e.preventDefault();
            }
        },
        []
    );


    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            {Array.from({ length: otpLength }, (_, index) => (
                <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="otp-input"
                    ref={(el) => { inputRefs.current[index] = el }}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}
        </div>
    );
};

export default Otp;
