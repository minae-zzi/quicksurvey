
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 



export default function Greensock() {

  const container = useRef();
  const circle = useRef();
  const tl = useRef();
  const animate = useRef();
  
  console.log(circle.current)

  useGSAP(() => {
    // // gsap code here...
    // gsap.to(".box", {x: 500, duration: 2}); // <-- automatically reverted
    // gsap.to(".circle", {x: 500, duration: 2, y:40}); 
    tl.current = gsap
    .timeline()
      .to(".t1", {
        y: 50
      })
      .to(".t2", {
        y: 50
    });


  }, { scope: container }); // <-- easily add a scope for selector text (optional)


  useGSAP(() => {

//      // gsap code here...
//   gsap.to(".box", {x: 100}); // <-- automatically reverted

// }, { scope: container }); //

    gsap.to(".b1", {
      scrollTrigger: {
        trigger: '.triggerbox',
        start: "top center", // 애니메이션이 시작되는 스크롤 위치
        end: "+=500",   // 애니메이션이 끝나는 스크롤 위치
        scrub: true,         // 스크롤에 따른 애니메이션 동기화
        markers: true        // 디버깅을 위한 마커 표시
      },
       yPercent: -100,
      ease: "none",
       duration: 0.5,


    });


  }, { scope: animate }); // <-- easily add a scope for selector text (optional)



  return (
    <div>
    
    <div ref={container} className="container ">
      <div className="box gradient-blue w-40 h-[600px] bg-black">selector</div>
      <div className="circle w-40 h-40 bg-slate-600 rounded-full" ref={circle}>
        Ref
      </div>
    </div>

    <div ref={animate} className="sbox flex flex-col h-[900px] w-full bg-zinc-700">
      <div className="triggerbox h-1/2 bg-orange-400">트리거박스</div>
      <div className="b1 h-1/2 bg-black">첫번째박스</div>
      <div className="b2 h-1/2 bg-slate-500">두번째박스</div>
    </div>

    </div>

  );

}

