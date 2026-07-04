"use client";

import "./countries";

import { ControlledDropdownButton } from "./ControlledDropdownButton";

const page = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <ControlledDropdownButton
                model="countries.list"
                buttonName="Select country"
                labelKey="name"
                valueKey="code"
            />
        </div>
    );
};

export default page;
