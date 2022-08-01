import React from "react";
import "./TimedMetadata.css"

class TimedMetadata extends React.Component {
    constructor() {
        super();
        this.state = {logs: []}
    }

    addLog(log) {
        this.setState({logs: [...this.state.logs, <p>{log}</p>]});
    }

    clearLogs() {
        this.setState({logs: []});
    }

    render() {
        return (
            <>
            <h5>Timed Metadata Console:</h5>
            <div id="log-div">{this.state.logs}</div>
            </>
        );
    }
}

export default TimedMetadata;