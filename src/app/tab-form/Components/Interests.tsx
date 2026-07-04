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
            type="checkbox"
            name={name}
            value={optionValue}
            checked={checked}
            onChange={onChange}
        />
    </div>
);

const Interests: React.FC<ProfileProps> = ({ data, setData }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setData((prev) => {
            const currentInterests = prev.interests || [];

            if (isChecked) {
                if (!currentInterests.includes(value)) {
                    return {
                        ...prev,
                        interests: [...currentInterests, value],
                    };
                }
                return prev;
            } else {
                return {
                    ...prev,
                    interests: currentInterests.filter(
                        (item) => item !== value,
                    ),
                };
            }
        });
    };

    const interestsOptions = [
        { label: "Coding", value: "coding" },
        { label: "Music", value: "music" },
        { label: "Gaming", value: "gaming" },
        { label: "Gym", value: "gym" },
        { label: "Cooking", value: "cooking" },
    ];

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div>
                {interestsOptions.map(({ label, value }) => (
                    <InputField
                        key={value}
                        label={label}
                        optionValue={value}
                        checked={data.interests?.includes(value)}
                        name={`interest-${value}`}
                        onChange={handleInputChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default Interests;
