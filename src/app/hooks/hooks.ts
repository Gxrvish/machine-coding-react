import { useCallback, useEffect, useRef } from "react";

export function useDebounced<T extends (...args: unknown[]) => void>(
    fn: T,
    delay: number,
) {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const fnRef = useRef(fn);
    useEffect(() => {
        fnRef.current = fn;
    }, [fn]);
    return useCallback(
        (...args: Parameters<T>) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => {
                fnRef.current(...args);
            }, delay);
        },
        [delay],
    );
}
