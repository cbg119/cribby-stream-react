import NavBar from "./NavBar";
import VideoPlayer from "./VideoPlayer";
import UrlForm from "./UrlForm";
import StreamDetails from "./StreamDetails";
import TimedMetadata from "./TimedMetadata";
import React from "react";

import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card,
  } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import "./App.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playbackUrl: "https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8"};
        this.urlCallback = this.urlCallback.bind(this);
        this.logCallback = this.logCallback.bind(this);
        this.idCallback = this.idCallback.bind(this);
        this.logWindow = React.createRef();
        this.idComponent = React.createRef();
    }

    urlCallback(url) {
        this.setState({playbackUrl: url});
        this.logWindow.current.clearLogs();
    }

    logCallback(log) {
        this.logWindow.current.addLog(log);
    }

    idCallback(id) {
        this.idComponent.current.setSessionId(id);
    }

    render() {
        return (
            <div>
            <NavBar signOut={this.props.signOut}/>
            <div id="body" className="container">
                <div id="video-row" className="row">
                    <VideoPlayer playbackUrl={this.state.playbackUrl} logCallback={this.logCallback} idCallback={this.idCallback} />
                </div>
                <div id="stream-details-row" className="row">
                    <div id = "url-div" className = "input-field col s6">
                        <UrlForm callback={this.urlCallback} />
                    </div>
                    <div className="right-align col s6">
                        <StreamDetails ref={this.idComponent} />
                    </div>
                </div>
                <div id="metadata-row" className="row hide-on-small-and-down">
                    <TimedMetadata ref={this.logWindow} />
                </div>
            </div>
        </div>
        );
    }
}

export default withAuthenticator(App);