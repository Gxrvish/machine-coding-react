"use client";

import { useState } from "react";

const ChipsInput = ({}) => {
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [value, setValue] = useState("");

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (value.trim() !== "") {
                setHobbies([...hobbies, value]);
            }
            setValue("");
        }
    };

    const handleDelete = (indexToRemove: number) => {
        setHobbies(hobbies.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="border-2 w-100 flex flex-col justify-center items-center">
            <div className="flex items-center w-full p-5">
                <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-white dark:text-gray-900 w-25"
                >
                    Hobbies
                </label>
                <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-75"
                    placeholder="Write you hobbies here..."
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            {!!hobbies.length && (
                <div className="flex justify-center items-center border-t-2 w-full min-h-20">
                    <ul className="flex flex-wrap">
                        {hobbies.map((hobby, id) => (
                            <li
                                key={id}
                                className="mx-2 bg-blue-300 rounded-4xl flex items-center my-2"
                            >
                                <span className="mr-1 pl-2">{hobby}</span>
                                <button
                                    className="bg-red-400 rounded-r-4xl p-1 px-2"
                                    onClick={() => handleDelete(id)}
                                >
                                    x
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ChipsInput;
