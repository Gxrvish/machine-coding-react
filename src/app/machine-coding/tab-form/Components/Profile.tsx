import React, { ChangeEvent } from "react";

import type { ProfileData, ProfileProps } from "../TabForm";

interface InputFieldProps {
    label: string;
    type: string;
    value: string | number;
    name: keyof ProfileData;
    onChange: (
        e: ChangeEvent<HTMLInputElement>,
        name: keyof ProfileData,
    ) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    value,
    name,
    onChange,
}) => (
    <div className="flex justify-end my-3">
        <label className="mr-3 my-auto">{label}: </label>
        <input
            className="border-1 p-2"
            type={type}
            value={value}
            onChange={(e) => onChange(e, name)}
        />
    </div>
);

const Profile: React.FC<ProfileProps> = ({ data, setData }) => {
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        name: keyof ProfileData,
    ) => {
        const value = name === "age" ? Number(e.target.value) : e.target.value;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const inputs: InputFieldProps[] = [
        {
            label: "Name",
            type: "text",
            value: data.name,
            name: "name",
            onChange: handleInputChange,
        },
        {
            label: "Email",
            type: "email",
            value: data.email,
            name: "email",
            onChange: handleInputChange,
        },
        {
            label: "Age",
            type: "number",
            value: data.age,
            name: "age",
            onChange: handleInputChange,
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <div className="">
                {inputs.map(({ label, type, value, name, onChange }) => (
                    <InputField
                        key={String(name)}
                        label={label}
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default Profile;
