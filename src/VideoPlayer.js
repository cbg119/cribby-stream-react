import React from "react";

import "./VideoPlayer.css";

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.player = "";
    }



    componentDidMount() {
        const IVSPackage = window.IVSPlayer;

        if (!IVSPackage.isPlayerSupported) {
            console.log("IVS Player is not supported for this browser!");
            return (<p>Player is not supported for this browser!</p>);
        }

        const PlayerState = IVSPackage.PlayerState;
        const PlayerEventType = IVSPackage.PlayerEventType;

        this.player = IVSPackage.create();

        this.player.addEventListener(PlayerState.READY, _ => {
            document.getElementById("session-id").innerHTML = this.player.getSessionId()
        })

        this.player.load("https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8")
        this.player.setMuted(true);
        this.player.setAutoplay(true);

        this.player.attachHTMLVideoElement(document.getElementById("video-player"));


    }

    render() {
        return (
            <video id="video-player" className="center-align responsive-video" controls playsInline></video>
        )
    }

    componentDidUpdate() {
        this.player.load(this.props.playbackUrl);
    }

}

export default VideoPlayer;