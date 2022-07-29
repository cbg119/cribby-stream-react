import NavBar from "./NavBar";
import VideoPlayer from "./VideoPlayer";
import UrlForm from "./UrlForm";
import StreamDetails from "./StreamDetails";
import TimedMetadata from "./TimedMetadata";
import React from "react";

import "./App.css";


class App extends React.Component {
    constructor() {
        super();
        this.state = {playbackUrl: "https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8"};
        this.urlCallback = this.urlCallback.bind(this);
        this.logCallback = this.logCallback.bind(this);
        this.logWindow = React.createRef();
    }

    urlCallback(url) {
        this.setState({playbackUrl: url});
        this.logWindow.current.clearLogs();
    }

    logCallback(log) {
        this.logWindow.current.addLog(log);
    }

    render() {
        return (
            <div>
            <NavBar />
            <div id="body" className="container">
                <div id="video-row" className="row">
                    <VideoPlayer playbackUrl={this.state.playbackUrl} logCallback={this.logCallback} />
                </div>
                <div id="stream-details-row" className="row">
                    <div id = "url-div" className = "input-field col s6">
                        <UrlForm callback={this.urlCallback}/>
                    </div>
                    <div className="right-align col s6">
                        <StreamDetails />
                    </div>
                </div>
                <div id="metadata-row" className="row hide-on-small-and-down">
                    <TimedMetadata ref={this.logWindow}/>
                </div>
            </div>
        </div>
        );
    }
}

export default App;