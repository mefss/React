import { useState } from "react";

const MyState = () => {
    const [count, setCount] = useState(5);

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
                    شمارنده ی من
                </h1>
            </header>
            <p>
                {count}
            </p>
            <p>
                <button onClick={increaseCount}>اضافه کردن</button>
            </p>
            <p>
                <button onClick={decreaseCount}>کم کردن</button>
            </p>
            <p>
                <button onClick={resetCount}>پاک کردن</button>
            </p>
        </div>
    )
}


export default MyState;