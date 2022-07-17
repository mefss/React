import { useState } from "react";

const MyState = () => {
    const [count,setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="center">
            <header>
                <h1>
                شمارنده ی من:
                </h1>
            </header>
            <p>{count}</p>
            <button onClick={resetCount}>پاک کردن</button>
        </div>
    )
}


export default MyState;