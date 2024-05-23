
import React from "react";
import Slider from "react-slick";
import Servicedep from "./servicedep";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import gsap from 'gsap';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SectionBottom() {
    

    const checklist = [
        '연구와 논문작성에 몰입할 수 있는 시간을 확보하실 수 있습니다',
        '학술 조사 전문가에게 피드백을 받아보실 수 있습니다',
        '대표성 있는 응답자에게 조사하실 수 있습니다',
        '신뢰할 수 있는 데이터를 수집하실 수 있습니다'
    ]

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 0.5, // 더 부드러운 슬라이드 전환을 위해 설정
        variableWidth: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        cssEase: "linear" // 부드러운 애니메이션을 위해 설정
      };

      const settings2 = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 0.5, // 더 부드러운 슬라이드 전환을 위해 설정
        variableWidth: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        cssEase: "linear", // 부드러운 애니메이션을 위해 설정
        rtl: true // 슬라이더를 오른쪽에서 왼쪽으로 흐르게 함
      };

      const settings3 = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 0.5, // 더 부드러운 슬라이드 전환을 위해 설정
        variableWidth: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        cssEase: "linear" // 부드러운 애니메이션을 위해 설정
      };


      const totalImages = 31; // 총 이미지 수
      const sliderImages = Array.from({ length: totalImages }, (_, index) => `${process.env.PUBLIC_URL}/images/foot_logo${index + 1}.png`);


      gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    
      const container = useRef();
      const tl = useRef();
    
    
      useGSAP(()=>{
        tl.current = gsap.timeline( {
          scrollTrigger: {
            trigger: ".triggerbox", 
            start: "top center", 
            end: `center center`,
            scrub:true,

          }
        })
        .from (".t0",{y:-100, opacity:0, duration:1})
        .from (".t1",{ y:-100, opacity:0,  duration:1})
        .from (".t2",{ y:-100, opacity:0,  duration:1})
        .from (".t3",{y:-100, opacity:0, duration:1})
        .from (".t4",{y:-100, opacity:0, duration:1})
      
    
      },{scope: container});



      
    return (
        <div ref={container}>
             
        <div className="flex flex-col justify-center items-center lg:min-h-screen w-full pt-14 pb-14 lg:p-0 overflow-x-hidden triggerbox">
        <Servicedep dep="fourth" />
            <p className="text-4xl brnone pl-8 pr-8 pb-8 lg:text-7xl font-bold lg:pb-12 text-center t0">학술 연구 설문조사 데이터 수집,<br />
한국리서치 <span className="text-c1">Quick Survey</span>에 맡기세요</p>


                <ul className="p-4 lg:p-14">
                    {
                        checklist.map((i,o)=>{
                            return(
                                <li className={`flex justify-center items-center mb-3 bg-neutral-100 rounded-full font-bold text-base leading-tight lg:text-xl p-2 pr-14 pl-14 t${o+1}`}>
                                    <i className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <g clip-path="url(#clip0_2018_2138)">
                                  <path d="M11.52 12.5996L9 15.1196L18 24.1196L36 6.11961L33.48 3.59961L18 19.0796L11.52 12.5996Z" fill="#CD3941"/>
                                  <path d="M16.2 30.5998C9.18 30.5998 3.6 25.0198 3.6 17.9998C3.6 10.9798 9.18 5.3998 16.2 5.3998C18.36 5.3998 20.52 5.93981 22.5 7.0198L24.3 3.9598C21.78 2.5198 19.08 1.7998 16.2 1.7998C7.2 1.7998 0 8.9998 0 17.9998C0 26.9998 7.2 34.1998 16.2 34.1998C25.2 34.1998 32.4 26.9998 32.4 17.9998H28.8C28.8 25.0198 23.22 30.5998 16.2 30.5998Z" fill="#CD3941"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_2018_2138">
                                    <rect width="36" height="36" fill="white"/>
                                  </clipPath>
                                </defs>
                              </svg></i> {i}</li>
                            )
                        })
                    }
                   
                </ul>


      <div className="slider variable-width w-full">
      <Slider {...settings}>
                    {sliderImages.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
    </div>

    <div className="slider variable-width w-full">
      <Slider {...settings2}>
                    {sliderImages.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
    </div>

    <div className="slider variable-width w-full">
      <Slider {...settings3}>
                    {sliderImages.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
    </div>

                    <div className="font-bold text-xl pt-4 pb-2 text-center">수 많은 고객사들이 한국리서치 퀵서베이와 함께하고 있습니다</div>
                    <div className="flex lg:flex-row flex-col justify-center gap-2 lg:gap-4 pt-4">
                        <button className="font-bold text-white text-base lg:text-xl rounded-full p-4 pr-14 pl-14 bg-c1 leading-tight">한국리서치 Quick Survey<br />
소개자료 다운로드(PDF)</button>
                        <button className="font-bold text-white text-base lg:text-xl rounded-full p-4 pr-14 pl-14 bg-c3 leading-tight">한국리서치 패널<br />
소개자료 다운로드(PDF)</button>
                    </div>
        </div>
        </div>
    );
}
