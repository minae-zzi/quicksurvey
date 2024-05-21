
import Servicedep from "./servicedep";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from "react";


gsap.registerPlugin(ScrollTrigger);


export default function SectionService01() {
  const t2aRef = useRef(null);
  const t2bRef = useRef(null);
  const t2cRef = useRef(null);


  useEffect(() => {
    const animateElements = () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: t2aRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          toggleActions: 'play none none none',
          // markers: true,
        }
      })
  
      .fromTo(t2bRef.current, 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 2, ease: 'power2.inOut' } // 부드러운 애니메이션을 위해 ease 속성 추가
      )
      .fromTo(t2cRef.current, 
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power2.inOut' } // 부드러운 애니메이션을 위해 ease 속성 추가
      );
  


    };
  
    animateElements();
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  

    return (




<div className="lg:h-screen service-section relative w-full rounded-t-full lg:rounded-none" style={{background: 'rgba(249, 238, 234, 0.40)'}}>
<Servicedep />
  
  <div className='flex flex-col-reverse lg:flex-row items-center lg:justify-between '>

    <div className='flex flex-col w-full p-8 justify-center items-start lg:items-start lg:p-0 lg:pl-60 lg:w-2/4'>
      <p className='text-5xl pb-6 lg:text-7xl font-bold lg:pb-10 w-full'>대표성 있는<br /><span className='text-c2'>국내 최대 규모</span> 패널</p>
      <p className='text-lg text-gray-800 pb-10'>한국리서치는 92만명의 자체 패널을 보유하고 있습니다.<br />
지역, 성, 연령 분포를 고려하여 모집하여 통계적 대표성을 확보했으며, <br />
국가 승인 통계 조사 표본 설계에도 활용되어 신뢰성이 검증되었습니다.<br />
주기적인 패널 정보 업데이트를 통해 적격응답자를 빠르게 찾을 수 있습니다.</p>
      <button className='rounded-full bg-c2 text-white text-lg w-1/2 lg:w-1/5 p-4'>패널소개 더보기</button>
    </div>
    
    <div className='w-full h-96 lg:h-screen lg:w-2/4 service-img'></div>

  </div>

</div>

    );
}
