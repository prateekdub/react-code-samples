import { useState, useTransition } from "react"

const List = () => {
    const [inputValue, setInputVal] = useState(null);
    const [count, setCount] = useState(null);
    const [list, setList] = useState([])
    const [isPending, startTransition] = useTransition()
    const handleChange = (e) => {
        setInputVal(e.target.value);
        setCount((prev) => prev + 1);
        const arr = [];
        for (let index = 0; index < 100000; index++) {
           
        arr.push(e.target.value + " " + index);
        }
        setList(arr)
        // startTransition(() => {
        //     for (let index = 0; index < 10000; index++) {
        //         arr.push(e.target.value + " " + index);
               
        //     }
        //     setList(arr)
        // })
       
    }
    return (
        <>
        <input value={inputValue} onChange={handleChange}/>
        {count}
        <ul>
        {
            list.map((x) => {
                return <li key={x}>{x}</li>
            })
        }
        </ul>
        </>
    )
}

export default List;