// @ts-expect-error: side-effect CSS import without type declarations
import "./Stopwatch.css";

import Stopwatch from "./Stopwatch";

const page = () => {
    return (
        <>
            <Stopwatch />
        </>
    );
};

export default page;
