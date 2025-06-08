"use client";
import { useState } from 'react'
import ProgressBar from './ProgressBar'
import "./ProgressBar.css"

const page = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="wrapwrap">
            {show && <ProgressBar />}
            <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
    )
}

export default page
