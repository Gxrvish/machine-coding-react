import InteractiveShape from "./InteractiveShape";

const page = () => {
    return (
        <>
            <InteractiveShape
                gridToBeRendered={[
                    [1, 1, 1],
                    [1, 0, 1],
                    [1, 1, 1],
                ]}
            />
        </>
    );
};

export default page;
