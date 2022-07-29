import NavBar from "./NavBar";
import VideoPlayer from "./VideoPlayer";

import "./App.css";

let App = () => {
    return (
        <div>
            <NavBar />
            <div id="body" className="container">
                <div id="video-row" className="row">
                    <VideoPlayer playbackUrl="https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8" />
                </div>
                <div id="stream-details-row" className="row">
                </div>
                <div id="metadata-row" className="row hide-on-small-and-down">
                </div>
            </div>
        </div>
    )
}

export default App;