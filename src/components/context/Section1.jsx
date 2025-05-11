import { useContext } from "react";
import { DashboardContext } from "./context";

const Section1 = () => {
const data = useContext(DashboardContext)
return <div>Section1 - {data.title}</div>
}

export default Section1;