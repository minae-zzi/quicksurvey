import Servicedep from "./servicedep";
import {  useState, useRef, useEffect } from "react";
import { SectionService02List, SectionService02ListMobile} from "./Section_Service02_list"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function SectionService02(props) {
   
  
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const container = useRef();
  const tl = useRef();
  const tl2 = useRef();

  useGSAP(()=>{
    tl.current = gsap.timeline( {
      scrollTrigger: {
        trigger: ".servicesection", // 범위를 지정하는 요소
        start: "top center", // 애니메이션이 시작되는 스크롤 위치
        end: `+=400`,
        scrub:true
      }
    })
    .from (".t1",{y:50, opacity:0, duration:1})
    .from (".t2",{y:50, opacity:0, duration:1})

    tl2.current = gsap.timeline( {
      scrollTrigger: {
        trigger: ".t2", // 범위를 지정하는 요소
        start: "top center", // 애니메이션이 시작되는 스크롤 위치
        end: `+=400`,
        scrub:true
      }
    })
    .from (".t3",{y:50, opacity:0, duration:1})

  },{scope: container});

 

  

    return (


<div ref={container} className="lg:h-screen relative w-full pb-14" style={{background: '#F3EFED'}}>
<Servicedep dep="first"/>

<div className='flex flex-col justify-center items-center lg:h-screen servicesection'>
    <div className='text-4xl font-bold pb-6 lg:text-7xl lg:pb-10 text-center p-14 t1'>프로젝트 별 <span className='text-c3'>전담 연구원</span> 배치</div>
    <p className='text-lg text-gray-800 pb-6 lg:pb-14 text-center brnone pl-10 pr-10 t2'>각 프로젝트 별로 경험이 풍부한 전담 연구원이 배치됩니다.<br />
IRB 승인을 위한 준비, 설문지 리뷰, 온라인 설문 점검, 데이터 확인까지 각 단계별로 꼼꼼하게 확인합니다.<br />
연구원은 연구자들의 학술 조사에만 집중할 수 있도록 개발 및 패널 관리는 개별 팀에서 담당합니다.</p>

{isMobile ? <SectionService02ListMobile className="t3" /> : <SectionService02List className="t3" />}
        
      
  </div>

</div>

 
    );
}
