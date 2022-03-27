import React, { Component } from "react";
import './App.css'
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";
import VideoCinema from "./components/VideoCinema";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: {
                img: 'https://storage.googleapis.com/coverr-public/thumbnails/Albert-Dock.jpg',
                name: 'Albert-Dock',
                url: 'https://storage.coverr.co/videos/a1V2JYqeQW4tNzRy6KP902Gt00C2UscR8N?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjQ4Mzg5NjIxfQ.hRpoyFR8h0Va7iRhM34S7RNAqIBg7uRBMtYnCYcMD98'
            }
        }
    }

    render() {
        const { state } = this;
        return (
                <div className="App">
                    <VideoPlayer video={state.selectedVideo} />
                    <VideoList videos={state.videos} />
                    <VideoCinema isActive={false} />
                </div>
        )
    }

}

export default App
