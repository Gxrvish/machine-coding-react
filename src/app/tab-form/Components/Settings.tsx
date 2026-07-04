import React, { ChangeEvent } from "react";

import type { ProfileProps } from "../TabForm";

interface InputFieldProps {
    label: string;
    optionValue: string;
    checked: boolean;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    optionValue,
    checked,
    name,
    onChange,
}) => (
    <div className="flex justify-end my-3">
        <label className="mr-3 my-auto">{label}: </label>
        <input
            className="border-1 p-2"
            type="radio"
            name={name}
            value={optionValue}
            checked={checked}
            onChange={onChange}
        />
    </div>
);

const Settings: React.FC<ProfileProps> = ({ data, setData }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({
            ...prev,
            theme: e.target.value,
        }));
    };

    const themeOptions = [
        { label: "Dark", value: "dark" },
        { label: "Light", value: "light" },
    ];

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div>
                {themeOptions.map(({ label, value }) => (
                    <InputField
                        key={value}
                        label={label}
                        optionValue={value}
                        checked={data.theme === value}
                        name="theme"
                        onChange={handleInputChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default Settings;
