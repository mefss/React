import { Component } from "react";

class Props extends Component {

    static defaultProps = {
        defaultParam3: 666
    }
    render() {
        const { param2 } = this.props;
        const { param3 } = this.props;
        const { defaultParam3 } = this.props;
        return (
            <div>
                <p>
                پارامتر تصادفی کلاسی: {Math.floor(Math.random() * 1000)}
                </p>
                {this.props.param1 ? <p>پارامتر اول من: {this.props.param1}</p> : ""}
                <p>
                    پارامتر دوم من: {param2}
                </p>
                <p>
                    پارامتر سوم من: {param3}
                </p>
                <p>
                    پارامتر پیش فرض اول: {this.props.defaultParam1}
                </p>
                <p>
                    پارامتر پیش فرض دوم: {this.props.defaultParam2 || 1}
                </p>
                <p>
                    پارامتر پیش فرض سوم: {defaultParam3}
                </p>
            </div>
        )
    }
}

// const propss = (props) => {
//     const { param2 } = props;
//     const { param3 } = props;
//     console.log(props);
//     return (
//         <div>
//             <p>
//                 پارامتر تصادفی تابعی: {Math.floor(Math.random() * 1000)}
//             </p>
//             {props.param1 ? <p>پارامتر اول من: {props.param1} </p> : ""}
//             {param2 ? <p>پارامتر دوم من: {param2}</p> : ""}
//             {param3 ? <p>پارامتر سوم من: {param3}</p> : ""}
//             <p>{props.children}</p>
//             <p>پارامتر پیش فرض اول: {props.defaultParam1}</p>
//             <p>پارامتر پیش فرض دوم: {props.defaultParam2 || 1}</p>
//         </div>
//     )
// }

Props.defaultProps = {
    defaultParam1: 66
}

export default Props;