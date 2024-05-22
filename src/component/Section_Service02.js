
import Servicedep from "./servicedep";
import { useState, useEffect } from "react";
import { SectionService02ListMobile , SectionService02List } from "./Section_Service02_list";

export default function SectionService02() {
   
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

    return (


<div className="lg:h-screen relative w-full pb-14" style={{background: '#F3EFED'}}>
<Servicedep />

<div className='flex flex-col justify-center items-center lg:h-screen '>
    <div className='text-4xl font-bold pb-6 lg:text-7xl lg:pb-10 text-center p-14'>프로젝트 별 <span className='text-c3'>전담 연구원</span> 배치</div>
    <p className='text-lg text-gray-800 pb-6 lg:pb-14 text-center brnone pl-10 pr-10'>각 프로젝트 별로 경험이 풍부한 전담 연구원이 배치됩니다.<br />
IRB 승인을 위한 준비, 설문지 리뷰, 온라인 설문 점검, 데이터 확인까지 각 단계별로 꼼꼼하게 확인합니다.<br />
연구원은 연구자들의 학술 조사에만 집중할 수 있도록 개발 및 패널 관리는 개별 팀에서 담당합니다.</p>

{isMobile ? <SectionService02ListMobile /> : <SectionService02List />}
        
      
  </div>

</div>

 
    );
}
