import SnakeGame from "./SnakeGame";

const Page = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <span className="mb-2">Play the game</span>
            <SnakeGame />
        </div>
    );
};

export default Page;
