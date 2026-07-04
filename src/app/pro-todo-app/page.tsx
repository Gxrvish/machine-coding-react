import ProTodoApp from "./ProTodoApp";
import StoreProvider from "./StoreProvider";

const page = () => {
    return (
        <StoreProvider>
            <ProTodoApp />
        </StoreProvider>
    );
};

export default page;
