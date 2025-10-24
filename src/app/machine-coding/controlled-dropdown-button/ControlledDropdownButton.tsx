import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
        setOpen(!open);
        if (open) {
            setFilter("");
            setList(initialList);
        }
    };

    return (
        <div className="relative inline-block w-64">
            <button
                type="button"
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
                <div className="absolute mt-2 bg-white border rounded shadow-lg w-full max-h-80 overflow-y-auto">
                    <input
                        type="text"
                        value={filter}
                        onChange={handleInput}
                        placeholder="Search..."
                        className="w-full px-3 py-2 border-b focus:outline-none"
                    />
                    {list.length > 0 ? (
                        list.map((item) => (
                            <div
                                key={String(
                                    valueKey ? item[valueKey] : item[labelKey],
                                )}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setFilter(String(item[labelKey]));
                                    setOpen(false);
                                }}
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
