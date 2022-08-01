import React from "react";
import "./StreamDetails.css";

class StreamDetails extends React.Component {
    constructor() {
        super();
        this.state = {sessionId: ""};
    }

    setSessionId(id) {
        this.setState({sessionId: id});
    }

    render() {
        return (
            <div>
                <h6>Session ID: </h6>
                <span id="session-id">{this.state.sessionId}</span>
            </div>
        );
    }
}

export default StreamDetails;