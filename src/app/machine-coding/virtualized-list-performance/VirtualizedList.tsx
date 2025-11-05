import { useMemo } from "react";

import { generateData } from "../utils";

const VirtualizedList = () => {
    const data = useMemo(() => generateData(10000), []);
    return (
        <>
            {data.map((item) => {
                return <div key={item.id}>{item.name}</div>;
            })}
        </>
    );
};

export default VirtualizedList;
