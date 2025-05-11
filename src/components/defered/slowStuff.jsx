import { useEffect, useState } from "react";

const SlowStuff = ({count}) => {
    const [list, setList] = useState(null);
    useEffect(() => {
        const arr = [];
        for (let index = 0; index < 5000; index++) {
           arr.push(
            <li key={index}>{index}-{count}</li>
           )
            setList(arr);
        }
    }, [count])
   
    return (
        <ul>
            {list}
        </ul>
    )
}
export default SlowStuff;