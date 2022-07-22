import { Component } from "react";

class Name extends Component {
    constructor() {
        super();

        this.state = {
            name: "Mahdy"
        }

        //One Way
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({ name: "Hussein" })
    }

    //Another Way
    resetName = () => {
        this.setState({ name: "Mahdy" })
    }

    render() {
        return (
            <div>
                <p>
                    نام:
                </p>
                <p>
                    {this.state.name}
                </p>
                <p>
                    <button onClick={this.changeName}>تغییر نام</button>
                </p>
                <p>
                    <button onClick={this.resetName}>از نو</button>
                </p>
            </div >
        )
    }
}

export default Name;