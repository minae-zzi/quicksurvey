
import Servicedep from "./servicedep";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useEffect } from "react";
import Navigator from "./nav";

gsap.registerPlugin(ScrollTrigger);


export default function SectionAbout() {



  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);
  const dRef = useRef(null);
  const eRef = useRef(null);
  const fRef = useRef(null);
  const gRef = useRef(null);
  const hRef = useRef(null);
  const iRef = useRef(null);

  // useEffect(() => {
  //   const animateElements = () => {




  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: aRef.current,
  //         start: 'top center',
  //         end: 'bottom center',
  //         scrub: true,
  //         toggleActions: 'play none none none',
  //         // markers: true,
  //       }
  //     });
  
  //     tl.fromTo(bRef.current, 
  //       { scale: 0.5, opacity: 0 }, 
  //       { scale: 1, opacity: 1, duration: 2, ease: 'power2.inOut' } // 부드러운 애니메이션을 위해 ease 속성 추가
  //     )
  //     .fromTo(cRef.current, 
  //       { scale: 0.5, opacity: 0 },
  //       { scale: 1, opacity: 1, duration: 2, ease: 'power2.inOut' } // 부드러운 애니메이션을 위해 ease 속성 추가
  //     )
  //     .fromTo(dRef.current, 
  //       { scale: 0.5, opacity: 0 },
  //       { scale: 1, opacity: 1, duration: 2, ease: 'power2.inOut' } // 부드러운 애니메이션을 위해 ease 속성 추가
  //     )
  //     .fromTo(eRef.current, 
  //       { scale: 0.5, opacity: 0 },
  //       { scale: 1, opacity: 1, duration: 2, ease: 'power2.inOut' } // 부드러운 애니메이션을 위해 ease 속성 추가
  //     );

  //     const tl2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: aRef.current,
  //         start: 'top center',
  //         end: 'bottom center',
  //         scrub: true,
  //         toggleActions: 'play reverse play reverse',
  //         // markers: true,
  //       }

  //     });

  //     tl2.fromTo(gRef.current, 
  //       { scale: 0.5, opacity: 0 }, 
  //       { scale: 1, opacity: 1, duration: 2, rotation:360, ease: 'power2.inOut' } // 부드러운 애니메이션을 위해 ease 속성 추가
  //     )
  //     .fromTo(hRef.current, 
  //       { scale: 0.5, opacity: 0 },
  //       { scale: 1, opacity: 1, duration: 2,  rotation:360, ease: 'power2.inOut' } // 부드러운 애니메이션을 위해 ease 속성 추가
  //     )
  //     .fromTo(iRef.current, 
  //       { scale: 0.5, opacity: 0, y:-100},
  //       { scale: 1, opacity: 1, duration: 2, y:0, ease: 'power2.inOut' } // 부드러운 애니메이션을 위해 ease 속성 추가
  //     );

      

  //   };
  
  //   animateElements();
  
  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);


    const whysurvey = [
      {
        id:'1',
        title : '대표성 있는\n국내 최대 규모 패널'
      },
      {
        id:'2',
        title : '프로젝트 별\n전담 연구원 배치'
      },
      {
        id:'3',
        title : '신뢰할 수\n있는 데이터'
      },
      {
        id:'4',
        title : '10년 이상 축적된\n다양한 노하우'
      },
    ]
    return (


  <div ref={aRef} className="lg:h-screen relative w-full flex justify-center items-center p-4">
    <Navigator />
    <Servicedep />
  
      <div className='relative text-center'>

        <div className="pb-8 pt-24 lg:pt-0"><img src={process.env.PUBLIC_URL + '/images/about_img.png'} alt="" /></div>
        <div className='inline-block'>
          <p className='inline-block text-3xl lg:text-7xl font-bold'>한국리서치에 의뢰하세요</p>
          <p style={{background:'#F8F0E7', height:'15px', width:'100%', margin:'-10px 0 0 0'}}></p>
        </div>
  
        <p className='text-2xl pt-4 lg:text-7xl lg:pt-24 font-bold'>왜? 한국리서치 <span className='text-c1'>Quick Survey</span> 인가요?</p>
  
          <div className='grid grid-cols-1 lg:grid-cols-4 lg:pr-24 lg:pl-24 lg:mt-8 mt-4 mb-4'>

            {
              whysurvey.map((i)=>{
                return(
                  <div className='flex items-center justify-start p-2 pl-4 pr-4 m-1 bg-zinc-50 rounded-full lg:rounded-none lg:bg-transparent'>
                  <span className='font-bold text-3xl lg:text-8xl pr-4 text-gray-200'>{i.id}</span>
                  <p className="text-base lg:text-3xl font-bold text-left lg:whitespace-pre-line">{i.title}</p>
                </div>
                )
              })
            }
           
            
          </div>

  
      </div> 

        </div>
    );
}
