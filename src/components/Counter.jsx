import { Component } from "react";

class Counter extends Component {
    render() {
        return (
            <div>
                <p>
                    شمارنده ی تصادفی کلاسی: {Math.floor(Math.random() * 1000)}
                </p>
            </div>
        )
    }
}

// const Counter = () =>
// {
//     return (
//         <div>
//             <p>
//                 شمارنده ی تصادفی تابعی: {Math.floor(Math.random() * 1000)}
//             </p>
//         </div>
//     )
// }


export default Counter;