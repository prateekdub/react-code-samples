import { DashboardContext } from "./context";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Dashboard = () => {

    return (
    <DashboardContext.Provider value={{'title': "new dashboard loaded"}}>
       <Section1/>
       <Section2/> 
    </DashboardContext.Provider>
    )
    }
    
    export default Dashboard;