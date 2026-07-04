"use client";
import "./FileExplorer.css";

import { useState } from "react";

interface FolderType {
    name: string;
    type: string;
    children?: FolderType[];
}

interface FileExplorerProps {
    folderData: FolderType;
}

const FileExplorer = ({ folderData }: FileExplorerProps) => {
    const [showChildren, setShowChildren] = useState(false);

    const handleClick = () => {
        setShowChildren(!showChildren);
    };

    return (
        <div className="container">
            <h5>
                {folderData.type === "folder"
                    ? showChildren
                        ? "📂"
                        : "📁"
                    : "📄"}
                <span onClick={handleClick}>{folderData.name}</span>
            </h5>
            {showChildren &&
                folderData?.children?.map((childData, index) => {
                    return <FileExplorer key={index} folderData={childData} />;
                })}
        </div>
    );
};

export default FileExplorer;
