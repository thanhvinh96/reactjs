import { useSelector, useDispatch } from "react-redux";
import { deposit,withdraw } from "./Action";

const Counter = ()=>{
    const count = useSelector((state)=>state.councer)
    const despatch = useDispatch()

    return (
        <>
            <h1>{count}</h1>
        <div>
            <button onClick={()=>despatch(deposit())}>Deposit</button>
            <button onClick={()=>despatch(withdraw())}>withdraw</button>
        </div>
        </>
    )
}

export default Counter;