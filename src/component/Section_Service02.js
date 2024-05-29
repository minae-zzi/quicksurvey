import Servicedep from "./servicedep";
import {  useState, useEffect } from "react";
import { SectionService02List, SectionService02ListMobile} from "./Section_Service02_list"



export default function SectionService02(props) {
   

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth < 1280)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  


  

    return (


<div className="lg:min-h-screen relative w-full pb-14" style={{background: '#F3EFED'}}>


<div className='flex flex-col justify-center items-center lg:h-screen servicesection'>
    <div className='text-4xl font-extrabold pb-6 text-center p-14 lg:text-3.5vw lg:pb-[1%] '>프로젝트 별 <span className='text-c3'>전담 연구원</span> 배치</div>
    <p className='text-base text-gray-800 pb-6 text-center brnone pl-10 pr-10 lg:pb-[2.5%] lg:text-1vw '>각 프로젝트 별로 경험이 풍부한 전담 연구원이 배치됩니다. <br />
IRB 승인을 위한 준비, 설문지 리뷰, 온라인 설문 점검, 데이터 확인까지 각 단계별로 꼼꼼하게 확인합니다. <br />
연구원은 연구자들의 학술 조사에만 집중할 수 있도록 개발 및 패널 관리는 개별 팀에서 담당합니다.</p>

{isMobile ? <SectionService02ListMobile className="t3" /> : <SectionService02List className="t3" />}
        
      
  </div>

</div>

 
    );
}
