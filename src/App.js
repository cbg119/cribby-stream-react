import NavBar from "./NavBar";
import VideoPlayer from "./VideoPlayer";
import UrlForm from "./UrlForm";
import StreamDetails from "./StreamDetails";
import TimedMetadata from "./TimedMetadata";
import React from "react";
import ChatWindow from "./ChatWindow";
import SignIn from "./SignIn"

import "@aws-amplify/ui-react/styles.css";

import "./App.css";
import { Auth } from "aws-amplify";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playbackUrl: "https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8", loggedIn: null};
        this.urlCallback = this.urlCallback.bind(this);
        this.logCallback = this.logCallback.bind(this);
        this.idCallback = this.idCallback.bind(this);
        this.signInCallback = this.signInCallback.bind(this);
        this.signOutCallback = this.signOutCallback.bind(this);
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

    async signInCallback(username, password) {
        try {
            await Auth.signIn(username, password);
            this.setState({loggedIn: true});
        } catch(e) {alert("Login failed!")};
    }

    async signOutCallback() {
        try {
            await Auth.signOut();
            this.setState({loggedIn: false});
        } catch(e) {console.log("logout failed")};
    }

    idCallback(id) {
        this.idComponent.current.setSessionId(id);
    }

    async componentDidMount() {
        try {
            console.log(await Auth.currentUserPoolUser())
            this.setState({loggedIn: true})
        } catch(error) {this.setState({loggedIn: false})}
    }

    render() {
        return (
            <div>
            <NavBar signOut={this.signOutCallback} signIn={this.signInCallback} loggedIn={this.state.loggedIn}/>
            <div id="body" className="container">
                <div id="video-row" className="row">
                    <div className="col s12">
                        <VideoPlayer playbackUrl={this.state.playbackUrl} logCallback={this.logCallback} idCallback={this.idCallback} />
                    </div>
                    {this.state.loggedIn &&
                    <div className="col s4">
                        <ChatWindow />
                    </div>}
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

export default App;