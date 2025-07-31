"use client";
import React, { useState } from "react";

import Interests from "./Components/Interests";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";

export interface ProfileData {
    name: string;
    email: string;
    age: number;
    interests: string[];
    theme: string;
}

export interface ProfileProps {
    data: ProfileData;
    setData: React.Dispatch<React.SetStateAction<ProfileData>>;
}

type Tab = {
    name: string;
    component: React.FC<ProfileProps>;
};

const TabForm = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState<ProfileData>({
        name: "Your name",
        email: "your@email.com",
        age: 18,
        interests: [],
        theme: "dark",
    });

    const tabs: Tab[] = [
        { name: "Profile", component: Profile },
        { name: "Interests", component: Interests },
        { name: "Settings", component: Settings },
    ];

    const ActiveTabComponent = tabs[activeTab].component;

    const handleSubmit = () => {
        console.warn(data);
    };

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <div className="flex flex-col">
                <div className="border-2 flex self-start overflow-hidden border-b-0">
                    {tabs.map((t, idx) => (
                        <div
                            key={idx}
                            className={`p-3 cursor-pointer ${
                                idx !== tabs.length - 1 ? "border-r-2" : ""
                            } ${idx === activeTab ? "bg-black text-white" : ""}`}
                            onClick={() => setActiveTab(idx)}
                        >
                            {t.name}
                        </div>
                    ))}
                </div>
                <div className="border-2 w-100 h-80">
                    <ActiveTabComponent data={data} setData={setData} />
                </div>
            </div>
            <div className="mt-5 flex gap-2">
                {activeTab > 0 && (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setActiveTab(activeTab - 1)}
                    >
                        Prev
                    </button>
                )}
                {activeTab < tabs.length - 1 && (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setActiveTab(activeTab + 1)}
                    >
                        Next
                    </button>
                )}
                {activeTab === tabs.length - 1 && (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default TabForm;
