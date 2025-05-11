import Counter from "./commonEx/red";
import DeferList from "./defered/list";
import CheckSuspense from "./suspense/checkSuspense";
import List from "./transition/list";
import TestUse from "./use/testuse";

const Screen1  = () => {
    // {/* <div> <List/> </div> */}
return (
<>
{/* <DeferList/> */}
{/* <TestUse/>   */}
{/* <Counter/> */}
<CheckSuspense/>
</>

)
}

export default Screen1;