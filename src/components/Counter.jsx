import { Component } from "react";

// class Counter extends Component {
//     render() {
//         const {num2} = this.props;
//         const {num3} = this.props;
//         return (
//             <div>
//                 <p>
//                     شمارنده ی تصادفی کلاسی: {Math.floor(Math.random() * 1000)}
//                 </p>
//                 <p>
//                     عدد اول من: {this.props.num1}
//                 </p>
//                 <p>
//                     عدد دوم من: {num2}
//                 </p>
//                 <p>
//                     عدد سوم من: {num3}
//                 </p>
//             </div>
//         )
//     }
// }

const Counter = (props) => {
    const { num2 } = props;
    const { num3 } = props;
    console.log(props);
    return (
    <div>
        <p>
            شمارنده ی تصادفی تابعی: {Math.floor(Math.random() * 1000)}
        </p>
        <p>
            اول من: {props.num1}
        </p>
        <p>
            دوم من: {num2}
        </p>
        <p>
            سوم من: {num3}
        </p>
    </div>
    )
}


export default Counter;