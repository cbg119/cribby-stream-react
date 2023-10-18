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

        this.player.addEventListener(PlayerState.READY, _ => console.log("Player is Ready!"));
        this.player.addEventListener(PlayerState.READY, _ => {
            console.log(this.player.getBufferDuration())
            this.props.idCallback(this.player.getSessionId());
        })

        this.player.addEventListener(PlayerState.IDLE, _ => {
            //this.player.play()
            console.log("Player is Idle!")});

        document.addEventListener("visibilitychange", () => {
            if (document.visbilityState === "hidden") {
            }
            else {
                this.player.play()
            }
        })

        this.player.addEventListener(PlayerState.PLAYING, _ => console.log("Player is Playing!"));
        this.player.addEventListener(PlayerState.ENDED, _ => console.log("Player has Ended! Did stream/video stop/end?"));
        this.player.addEventListener(PlayerState.BUFFERING, _ => console.log("Player is Buffering!"));

        this.player.addEventListener(PlayerEventType.ERROR, _ => console.log("There was an error with the player!"));
        this.player.addEventListener(PlayerEventType.QUALITY_CHANGED, _ => console.log("Quality Change: " + (this.player.getQuality()).bitrate));

        this.player.addEventListener(PlayerEventType.TEXT_METADATA_CUE, (text_metadata_cue) => {
            this.props.logCallback(text_metadata_cue.text);
        });

        this.player.load("https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8")
        this.player.setMuted(false);
        this.player.setAutoplay(true);

        this.player.attachHTMLVideoElement(document.getElementById("video-player"));


    }

    render() {
        return (
            <video id="video-player" className="center-align responsive-video" crossorigin="anonymous" playsInline muted controls></video>
        )
    }

    componentDidUpdate() {
        this.player.load(this.props.playbackUrl);
    }

}

export default VideoPlayer;
