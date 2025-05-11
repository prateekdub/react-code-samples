import { useDeferredValue, useState } from "react";
import ImportantStuff from "./importantStuff";
import SlowStuff from "./slowStuff";

function DeferList() {
    const [count, setCount] = useState(0);
    const deferredCount = useDeferredValue(count);
  
    return (
      <>
        <ImportantStuff count={count} />
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <SlowStuff count={deferredCount} />
  
       
      </>
    );
  }

  export default DeferList;