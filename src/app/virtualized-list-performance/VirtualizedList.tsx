"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { generateData } from "./utils";

const WINDOW_SIZE = 100;
const STEP = 25;

export default function VirtualizedList() {
    const data = useMemo(() => generateData(10000), []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setStart] = useState(0);
    const [visible, setVisible] = useState(() => data.slice(0, WINDOW_SIZE));

    const firstRef = useRef<HTMLLIElement | null>(null);
    const lastRef = useRef<HTMLLIElement | null>(null);
    const topObserver = useRef<IntersectionObserver | null>(null);
    const bottomObserver = useRef<IntersectionObserver | null>(null);

    const loadPrevious = () => {
        setStart((prevStart) => {
            const nextStart = Math.max(prevStart - STEP, 0);
            setVisible(data.slice(nextStart, nextStart + WINDOW_SIZE));
            return nextStart;
        });
    };

    const loadNext = () => {
        setStart((prevStart) => {
            const nextStart = Math.min(
                prevStart + STEP,
                data.length - WINDOW_SIZE,
            );
            setVisible(data.slice(nextStart, nextStart + WINDOW_SIZE));
            return nextStart;
        });
    };

    // Top observer
    useEffect(() => {
        if (topObserver.current) topObserver.current.disconnect();

        topObserver.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) loadPrevious();
            },
            { threshold: 1 },
        );

        if (firstRef.current) topObserver.current.observe(firstRef.current);

        return () => topObserver.current?.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    // Bottom observer
    useEffect(() => {
        if (bottomObserver.current) bottomObserver.current.disconnect();

        bottomObserver.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) loadNext();
            },
            { threshold: 1 },
        );

        if (lastRef.current) bottomObserver.current.observe(lastRef.current);

        return () => bottomObserver.current?.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    return (
        <ul>
            {visible.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === visible.length - 1;
                return (
                    <li
                        key={item.id}
                        ref={isFirst ? firstRef : isLast ? lastRef : null}
                        className="my-3"
                    >
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
}
