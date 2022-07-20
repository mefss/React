import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            name: "Mahdy"
        }

        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({ name: "Hussein" })
    }

    render() {
        return (
            < div >
                <p>
                    نام:
                </p>
                <p>{this.state.name}</p>
                <button onClick={this.changeName}>تغییر نام:</button>
            </div >
        )
    }
}

export default Counter;