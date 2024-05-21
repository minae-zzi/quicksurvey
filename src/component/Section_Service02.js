
import Servicedep from "./servicedep";

export default function SectionService02() {
   
    return (


<div className="lg:h-screen relative w-full" style={{background: '#F3EFED'}}>
<Servicedep />

<div className='flex flex-col justify-center items-center lg:h-screen'>
    <div className='text-7xl font-bold pb-10'>프로젝트 별 <span className='text-c3'>전담 연구원</span> 배치</div>
    <p className='text-lg text-gray-800 pb-14 text-center'>각 프로젝트 별로 경험이 풍부한 전담 연구원이 배치됩니다.<br />
IRB 승인을 위한 준비, 설문지 리뷰, 온라인 설문 점검, 데이터 확인까지 각 단계별로 꼼꼼하게 확인합니다.<br />
연구원은 연구자들의 학술 조사에만 집중할 수 있도록 개발 및 패널 관리는 개별 팀에서 담당합니다.</p>

   
    <div className='flex flex-col lg:flex-row justify-center items-center gap-2 text-lg w-full lg:w-1/2'>
      
       {/* 첫번째 */}
      <div className='rounded-xl bg-white p-8 shadow-xl w-full lg:w-1/4'>
        <div className='rounded-lg bg-c2 text-center text-white font-bold text-xl p-5 pb-14 -z-10'>개발 및 데이터 팀</div>
        <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-4 -mt-10 z-10'>
          <ul className='text-slate-800'>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>온라인 설문 구현</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>온라인 설문 수정</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>온라인 설문 유지보수</li>
            <li className='rounded-full bg-gray-100 p-2'>DB 관리</li>
          </ul>

        </div>
      </div>

      <div><svg xmlns="http://www.w3.org/2000/svg" width="52" height="40" viewBox="0 0 52 40" fill="none">
<rect x="31.2092" y="1" width="26.5735" height="26.5735" transform="rotate(45 31.2092 1)" fill="#BC9A8F"/>
<rect x="16.7914" y="6.46995" width="17.9182" height="17.9182" transform="rotate(45 16.7914 6.46995)" fill="#F4F0EE" stroke="#BC9A8F" stroke-width="3"/>
</svg></div>
      {/* 두번째 */}

      <div className='rounded-xl bg-white p-8 shadow-xl w-96'>
        <div className='rounded-lg bg-c3 text-center text-white font-bold text-xl p-5 pb-14 -z-10'>연구원</div>
        <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-4 -mt-10 z-10'>
          <ul className='text-slate-800'>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>고객 커뮤니케이션</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>프로젝트 관리 감독</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>IRB 승인 관련 지원 업무</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>설문지 리뷰</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>온라인 설문 점검</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>데이터 점검</li>
          </ul>

        </div>
      </div>

      <div><svg xmlns="http://www.w3.org/2000/svg" width="52" height="40" viewBox="0 0 52 40" fill="none">
<rect width="26.5735" height="26.5735" transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.7908 1)" fill="#BC9A8F"/>
<rect y="2.12132" width="17.9182" height="17.9182" transform="matrix(-0.707107 0.707107 0.707107 0.707107 33.7086 4.96995)" fill="#F4F0EE" stroke="#BC9A8F" stroke-width="3"/>
</svg></div>
      {/* 세번째 */}

      <div className='rounded-xl bg-white p-8 shadow-xl w-full lg:w-1/4'>
        <div className='rounded-lg bg-c2 text-center text-white font-bold text-xl p-5 pb-14 -z-10'>패널 관리 팀</div>
        <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-4 -mt-10 z-10'>
          <ul className='text-slate-800'>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>응답자 패널 관리</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>적격 응답자 섭외</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'> 설문 응답 독려</li>
            <li className='rounded-full bg-gray-100 p-2 mb-2'>실사 진행 상황 공유</li>
          </ul>
        </div>
      </div>



    </div>
  </div>

</div>

 
    );
}
