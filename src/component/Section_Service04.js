
import Servicedep from "./servicedep";


export default function SectionService04(props) {
   
    

  
    return (


 <div className="lg:min-h-screen relative sample-section w-full p-4 pt-10 pb-10">
 <Servicedep dep="first" />

   <div className='flex justify-start items-center lg:pt-[8%]'>
     <div className="flex gap-4 flex-col lg:grid lg:grid-cols-3 lg:pl-[20%] lg:pr-[40px] lg:gap-4 w-full">
       <div className="lg:col-span-3">
         <p className='text-4xl text-center p-4 brnone lg:text-left lg:text-3.5vw font-extrabold lg:pb-6'>10년 이상의 업력으로 <br />
축적된 다양한 노하우 보유</p>
       <p className='text-base text-zinc-500 p-4 pt-0 lg:pb-6 text-center lg:text-left lg:text-1vw brnone t2'>10년 이상 축적된 학술 조사 진행 노하우를 바탕으로 다양한 조사 기법을 활용하여<br />
다양한 주제와 조사 대상에 대해 빠르고 정확한 조사를 수행할 수 있습니다.</p>
       </div>
       <div className="rounded-xl bg-gray-50 p-8 lg:p-[2.5vw] t3">
       <p className='flex items-center  font-black text-2xl lg:text-1.8vw pb-2'><img src={process.env.PUBLIC_URL + '/images/service_ico1.png'} alt="" className='w-10 pr-2'></img> 언론/미디어/정치</p>
         <ul className='lg:text-1vw text-gray-500'>
           <li>· OTT 이용자 시청 형태 관련 조사</li>
           <li>· 숏폼 콘텐츠 현황과 연령별 만족도 조사</li>
           <li>· 생성형 AI 이용자 현황 조사</li>
           <li>· 메타버스 이용 경험자 대상 조사</li>
           <li>· 정치와 미디어 연구 조사</li>
         </ul>
       </div>
       <div className="rounded-xl bg-gray-50 p-8 lg:p-[2.5vw] t4">
         <p className='flex items-center  font-black  text-2xl lg:text-1.8vw pb-2'><img src={process.env.PUBLIC_URL + '/images/service_ico2.png'} alt="" className='w-10 pr-2'></img> 의료/보건</p>
         <ul className='lg:text-1vw text-gray-500'>
           <li>· 간호사 대상 건강 정보 영상 평가 조사</li>
           <li>· 암 환자 의료 이용 경험 조사</li>
           <li>· 고혈압, 당뇨 진단자 대상 건강 상태 조사</li>
           <li>· 난임 여성 대상 시술 과정 관리 조사</li>
           <li>· 보육교사 대상 감염병 관련 척도 개발 조사</li>
           </ul>
       </div>
       <div className="rounded-xl bg-gray-50 p-8 lg:p-[2.5vw] t5">
         <p className='flex items-center  font-black  text-2xl lg:text-1.8vw pb-2'><img src={process.env.PUBLIC_URL + '/images/service_ico3.png'} alt="" className='w-10 pr-2'></img> 심리/상담</p>
         <ul className='lg:text-1vw text-gray-500'>
           <li>· 대학생 우울 관련 심리적 특성 조사</li>
           <li>· 중년 부부 대상 위기 관련 조사(쌍조사)</li>
           <li>· 부모의 양육 스트레스 및 부부관계 조사(쌍조사)</li>
           <li>· 데이트 폭력 피해 경험자의 유형 및 심리적 조사</li>
           <li>· 불공정 상황에서의 심리 경험 조사</li>
           </ul>
       </div>
       <div className="rounded-xl bg-gray-50 p-8 lg:p-[2.5vw] t6">
         <p className='flex items-center  font-black  text-2xl lg:text-1.8vw pb-2'><img src={process.env.PUBLIC_URL + '/images/service_ico4.png'} alt="" className='w-10 pr-2'></img> 직군/산업</p>
         <ul className='lg:text-1vw text-gray-500'>
           <li>· 직장 내 세대 소통 활성화 방안 조사</li>
           <li>· 성인의 일과 삶의 경험 조사(1~3차 진행)</li>
           <li>· 직장인 대상 재택 근무 및 온라인 미팅 연구 조사</li>
           <li>· 제조업 분야 중소기업자 대상 지식공유행동 조사</li>
           <li>· 전기자동차 사용자 대상 신규 충전 방식 컨셉 조사</li>
           </ul>
       </div>
       <div className="rounded-xl bg-gray-50 p-8 lg:p-[2.5vw] t7">
         <p className='flex items-center  font-black  text-2xl lg:text-1.8vw pb-2'><img src={process.env.PUBLIC_URL + '/images/service_ico5.png'} alt="" className='w-10 pr-2'></img> 관광</p>
         <ul className='lg:text-1vw text-gray-500'>
           <li>· 반려동물 동반 여행 의도 조사</li>
           <li>· ChatGPT를 이용한 여행 이용자 조사</li>
           <li>· 문화관광축제 방문객 대상 만족도 조사</li>
           <li>· 강원도 폐광 지역 관광객 대상 만족도 조사</li>
           <li>· 전시컨벤션센터 개최 전시회 경험자 대상 조사</li>
           </ul>
       </div>
       <div className="rounded-xl bg-gray-50 p-8 lg:p-[2.5vw] t8">
         <p className='flex items-center  font-black  text-2xl lg:text-1.8vw pb-2'><img src={process.env.PUBLIC_URL + '/images/service_ico6.png'} alt="" className='w-10 pr-2'></img> 아동/청소년</p>
         <ul className='lg:text-1vw text-gray-500'>
           <li>· 아동/청소년 스마트폰 과의존 척도 개발 조사</li>
           <li>· 인공지능 챗봇 상호작용에 대한 청소년 인식 조사</li>
           <li>· 여고생 대상 비만 교육 관련 조사</li>
           <li>· 미취학 아동의 아버지 대상 양육 스트레스 조사</li>
           <li>· 소아청소년 학부모 백신 인식 조사</li>
           </ul>
       </div>
       <div className='col-span-3 text-right italic lg:mt-1 lg:text-1vw'>실제 진행한 조사 중 최신의 트렌드를 반영한 일부만 소개해 드립니다.</div>

     </div>
     </div>

 </div>
    );
}
