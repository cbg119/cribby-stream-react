import React from "react";

import "./UrlForm.css";

class UrlForm extends React.Component {
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
        this.props.callback(this.state.value);
    }

    render() {
        return (
            <form id="src-form" onSubmit={this.handleSubmit}>
                <input id="stream-link" type="text" placeholder="Enter .m3u8 link" value={this.state.value} onChange={this.handleChange}></input>
                <button className="btn waves-effect waves-dark" type="submit">
                    Load
                    <i className="material-icons right">live_tv</i>
                </button>
            </form>
        )
    }
}

export default UrlForm;