import React from "react";
import visualVideo from '../videos/visual.mp4'; // MP4 파일 경로

export default function Visual() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
        <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop
        >
            <source src={visualVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    );
}
