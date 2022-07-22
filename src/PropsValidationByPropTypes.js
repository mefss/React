import { useState } from "react";
import Counter from "./components/Counter";

const PropsValidationByPropTypes = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return(
        <div className="center">
            <h1>
                شمارنده:
            </h1>
            <Counter inc={increaseCount} dec={decreaseCount} res={resetCount} count={count}/>
        </div>
    )
}

export default PropsValidationByPropTypes;