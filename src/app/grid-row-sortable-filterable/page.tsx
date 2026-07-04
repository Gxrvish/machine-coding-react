import { data } from "./DemoData";
import GridRowSortFilter from "./GridRowSortFilter";

const page = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <GridRowSortFilter data={data} />
        </div>
    );
};

export default page;
