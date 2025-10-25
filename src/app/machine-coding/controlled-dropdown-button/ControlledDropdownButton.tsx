import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

import { Registry } from "../registry";

type Props<T> = {
    model: string;
    buttonName: string;
    labelKey: keyof T;
    valueKey?: keyof T;
};

export function ControlledDropdownButton<T>({
    model,
    labelKey,
    buttonName,
    valueKey,
}: Props<T>) {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState("");

    const initialList: T[] = (Registry.get(model) as T[]) || [];
    const [list, setList] = useState<T[]>(initialList);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const input = ev.target.value;
        setFilter(input);
        const fullList: T[] = (Registry.get(model) as T[]) || [];
        setList(
            fullList.filter((item) =>
                String(item[labelKey])
                    .toLowerCase()
                    .includes(input.toLowerCase()),
            ),
        );
    };

    const handleToggle = () => {
        setOpen((prev) => !prev);
        if (open) {
            setFilter("");
            setList(initialList);
        }
    };

    const handleClick = (item: T) => {
        setFilter(String(item[labelKey]));
        setOpen(false);
    };

    const handleKeydown = (item: T, ev: React.KeyboardEvent) => {
        if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            handleClick(item);
        }
    };

    const handleListKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
        const items = Array.from(
            ev.currentTarget.querySelectorAll('[role="menuitem"]'),
        ) as HTMLElement[];

        const currentIndex = items.findIndex(
            (el) => el === document.activeElement,
        );
        if (ev.key === "ArrowDown") {
            ev.preventDefault();
            const next = items[(currentIndex + 1) % items.length];
            next.focus();
        } else if (ev.key === "ArrowUp") {
            ev.preventDefault();
            const prev =
                items[(currentIndex - 1 + items.length) % items.length];
            prev.focus();
        } else if (ev.key === "Escape") {
            setOpen(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (open) {
            inputRef.current?.focus();
        }
    }, [open]);

    return (
        <div ref={containerRef} className="relative inline-block w-64">
            <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={`${model}-dropdown`}
                onClick={handleToggle}
                className="w-full text-left focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-offset-2 focus:ring-offset-white rounded-lg bg-green-700 hover:bg-green-800 text-white font-medium px-5 py-2.5 flex justify-between items-center"
            >
                {filter || buttonName}
                <span
                    className="inline-block transition-transform duration-300 ease-in-out"
                    style={{
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                >
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </button>

            {open && (
                <div
                    id={`${model}-dropdown`}
                    role="menu"
                    onKeyDown={handleListKeyDown}
                    className="absolute mt-2 bg-white border rounded shadow-lg w-full max-h-80 overflow-y-auto"
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={filter}
                        onChange={handleInput}
                        placeholder="Search..."
                        className="w-full px-3 py-2 border-b focus:outline-none"
                    />
                    {list.length > 0 ? (
                        list.map((item) => (
                            <div
                                role="menuitem"
                                tabIndex={0}
                                key={String(
                                    valueKey ? item[valueKey] : item[labelKey],
                                )}
                                className="px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 cursor-pointer outline-none"
                                onKeyDown={(ev) => handleKeydown(item, ev)}
                                onClick={() => handleClick(item)}
                            >
                                {String(item[labelKey])}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-gray-500">
                            No results!
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
