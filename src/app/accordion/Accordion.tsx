"use client";
// @ts-expect-error: side-effect CSS import without type declarations
import "./Accordion.css";

import { useState } from "react";

import type { QnA } from "./Faq";

interface AccordionProps {
    qna: QnA;
    key: number | string;
}

const Accordion = ({ qna }: AccordionProps) => {
    const [show, setShow] = useState(false);
    return (
        <div className="accordion">
            <h3>
                {qna.question}
                <span
                    className="extend"
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    {show ? "-" : "+"}
                </span>
            </h3>
            {show && <p>{qna.answer}</p>}
        </div>
    );
};

export default Accordion;
