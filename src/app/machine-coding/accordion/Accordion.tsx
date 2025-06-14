"use client"
import { useState } from 'react';
import "./Accordion.css"

interface AccordionProps {
    qna: any;
    key: number | string;
}

const Accordion = ({ qna }: AccordionProps) => {
    const [show, setShow] = useState(false);
    return (
        <div className="accordion">
            <h3>
                {qna.question}
                <span className='extend' onClick={() => { setShow(!show) }}>
                    {show ? "-" : "+"}
                </span>
            </h3>
            {show && <p>{qna.answer}</p>}
        </div>
    )
}

export default Accordion
