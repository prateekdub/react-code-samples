import { useContext } from "react";
import { DashboardContext } from "./context";

const Section2 = () => {
    const data = useContext(DashboardContext)
    return <div>Section2 - {data.title}</div>
    }
    
    export default Section2;