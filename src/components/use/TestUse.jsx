import { Suspense, use, useEffect, useState } from "react";

const TestUse = () => {
const [data, setData] = useState(null);


// without using use hook
const fetchApi = async () => {
    fetch('/test.json').then(x => x.json()).then(x => { 
        
        console.log(x);
        setData(x.result.phones);
    
    })
}

useEffect(() => {
    fetchApi()
}, [])


const fetchApiwithUse =  () => {
    return fetch('/test.json').then(x => x.json())
    // .then(x => { 
        
    //     console.log(x);
    //     setData(x.result.phones);
    
    // })
}

const message = use(fetchApiwithUse());

return (
    <>
    <Suspense fallback={<div>...Loading</div>}>
    <p id="testp">
    {data?.map(x => {
        return x.name
    })}
    {message.result.phones?.map(x => {
        return x.name
    })}
    </p>
    </Suspense>
    </>
);
}
export default TestUse;