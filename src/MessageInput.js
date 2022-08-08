import React from "react";

import "./MessageInput.css";

class MessageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.callback(this.state.value)
        this.setState({value: ""});
    }

    render() {
        return (
            <form id="message-form" onSubmit={this.handleSubmit}>
                <input id="message-input" type="text" placeholder="..." value={this.state.value} onChange={this.handleChange}></input>
                <button className="btn waves-effect waves-dark" type="submit">
                    <i className="material-icons right">send</i>
                </button>
            </form>
        )
    }
}

export default MessageInput;