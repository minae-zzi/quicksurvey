import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Greensock = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);

  useEffect(() => {
    // ScrollTrigger 설정
    gsap.to(box1.current, {
      scrollTrigger: {
        trigger: box1.current,
        start: 'top center',
        onEnter: () => {
          gsap.fromTo(
            [box2.current, box3.current, box4.current],
            { x: -500, opacity: 0 }, // 애니메이션 시작 위치와 상태
            { 
              x: 0, opacity: 1, // 애니메이션 끝 위치와 상태
              stagger: 0.3, // 순차적으로 애니메이션을 적용
              duration: 1
            }
          );
        },
        markers: true, // 디버깅을 위한 마커
      }
    });

    // 컴포넌트가 언마운트될 때 ScrollTrigger 정리
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <div className='bb h-2/4 bg-slate-300 w-full' ref={box1}>123</div>
      <div className='bb h-2/4 bg-slate-300' ref={box2}>233</div>
      <div className='bb h-2/4 bg-slate-300' ref={box3}>123</div>
      <div className='bb h-2/4 bg-slate-300' ref={box4}>123</div>
    </div>
  );
};

export default Greensock;
