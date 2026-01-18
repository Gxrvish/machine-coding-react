"use client";

import { useDispatch, useSelector } from "react-redux";

import { increment } from "./counterSlice";
import type { RootState } from "./store";

const ProTodoApp = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            ProTodoApp
            <button onClick={() => dispatch(increment())}>{count}</button>
        </div>
    );
};

export default ProTodoApp;
