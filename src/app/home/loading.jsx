
import { GridLoader } from "react-spinners";

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
           <GridLoader />
        </div>
    );
};

export default loading;