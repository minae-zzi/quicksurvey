
import Servicedep from "./servicedep";
import gsap from 'gsap';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SectionQna() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    
      const container = useRef();
      const tl = useRef();

    
    
      useGSAP(()=>{
        tl.current = gsap.timeline( {
          scrollTrigger: {
            trigger: ".sectionQna", 
            start: "top center", 
            end: `bottom center`,
            scrub:true,

          }
        })
        .from (".triggerbox",{ y:-100, opacity:0,  duration:1})
        .from (".t1",{ y:-100, opacity:0,  duration:1})
        .from (".t2",{ y:-100, opacity:0,  duration:1})
        .from (".t3",{y:-100, opacity:0, duration:1})
    
    
      },{scope: container});


    return (
        <div ref={container} >
        <div className="relative flex flex-col lg:flex-row justify-center lg:gap-24 lg:items-center lg:h-screen w-full sectionQna p-4 pt-14 pb-14 lg:p-0 triggerbox">
            <Servicedep dep="third" />
            <div className="block pb-4 lg:pb-0 t1"><img src={process.env.PUBLIC_URL +"/images/qna_img.png"} alt=""/></div>
            <div className="font-bold text-center lg:text-left">
                <p className="text-5xl pb-4 lg:text-7xl lg:pb-8 t1">걱정하지 마세요!</p>
                <p className="text-3xl text-center lg:text-6xl leading-tight lg:text-right brnone t2"><span className="text-c2">이런 고민</span>은<br /> 한국리서치<br /> <span className="text-c2">Quick Survey</span>에서 <br />
                    해결 가능합니다</p>
            </div>
        </div>
        </div>
    );
}
