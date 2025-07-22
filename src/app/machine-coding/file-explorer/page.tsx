import data from "./data.json";
import FileExplorer from "./FileExplorer";

const page = () => {
    return <FileExplorer folderData={data} />;
};

export default page;
