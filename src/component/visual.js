import React from "react";
import visualVideo from '../videos/visual.mp4'; // MP4 파일 경로

export default function Visual() {
    return (
        <div className="relative h-96 lg:min-h-screen">
            <div className="absolute lg:h-screen h-96 flex flex-col justify-center items-center w-full z-10 p-8 text-center">
                <p className="font-bold text-white text-3xl lg:text-5xl">한국리서치 Quick Survey<br />
학술 연구 설문조사의 최고 파트너</p>
<p className="font-bold text-white text-sm pt-2 lg:text-xl lg:pt-8">연구와 논문 작성에 몰입할 수 있게 데이터 수집은 전문가에게 맡기세요.<br />
학술 연구에 필요한 데이터 수집의 전 과정을 함께합니다.</p>
            </div>
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
