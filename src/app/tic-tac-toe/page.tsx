import TicTacToe from "./TicTacToe";

const page = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-pink bg-sky-100">
            <TicTacToe gridSize={3} />
        </div>
    );
};

export default page;
