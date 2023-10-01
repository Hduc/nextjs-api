import { useState } from "react"

const TestComponent = ()=>{
    const [state,setState] = useState(1)
    const handleOnClick = ()=>{
        setState(state+1)
    }
    return(
        <div>
            <h3>{state}</h3>
            <button onClick={handleOnClick}>cong</button>
        </div>
    )
}
export default TestComponent