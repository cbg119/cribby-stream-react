import React from "react";

import "./VideoPlayer.css";

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const IVSPackage = window.IVSPlayer;

        if (!IVSPackage.isPlayerSupported) {
            console.log("IVS Player is not supported for this browser!");
            return (<p>Player is not supported for this browser!</p>);
        }

        const PlayerState = IVSPackage.PlayerState;
        const PlayerEventType = IVSPackage.PlayerEventType;

        const player = IVSPackage.create();

        player.load(this.props.playbackUrl);
        player.setMuted(true);
        player.setAutoplay(true);

        player.attachHTMLVideoElement(document.getElementById("video-player"));
    }

    render() {
        return (
            <video id="video-player" class="center-align responsive-video" controls playsInline></video>
        )
    }
}

export default VideoPlayer;