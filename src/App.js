import './App.css';
import Visual from './component/visual';
import Navigator from './component/nav'
import Servicedep from './component/servicedep';
import SectionStep from './component/section_step';


function App() {

  return (
    <div className='break-keep'>

     <Navigator />
      <div className="absolute z-10 w-full bottom-10 flex justify-center">
          <img src="./images/scroll.png" alt="scrolldown" />
      </div>
    
      <Visual />


        {/* 어바웃 */}
        <div className="h-screen about-section relative">

          <Servicedep />


            <div className='absolute left-5 top-1/2'>
              <ul>
                <li>서비스 특장점</li>
                <li>진행절차</li>
                <li>진행방법</li>
                <li>주요 고객사</li>
              </ul>

            </div>
            
            <div className="bubble1 text-white pl-10 pr-10 pb-14 pt-6 absolute inline-block" style={{left:'50%', marginLeft:'-17%', top:'15%'}}>필요한 데이터를 빠르고<br />
                    합리적인 가격에 수집하고 싶다면?</div>
                <div className="bubble2 text-white pl-10 pr-10 pb-14 pt-6 absolute inline-block" style={{left:'50%', marginLeft:'4%', top:'10%'}}>지인들에게 조사 해서<br />
                    대표성을 확보하기 어렵다면?</div>

              <div className='text-center relative' style={{top:'50%'}}>

                <div className='inline-block'>
                  <p className='inline-block text-7xl font-bold'>한국리서치에 의뢰하세요</p>
                  <p style={{background:'#F8F0E7', height:'15px', width:'100%', margin:'-10px 0 0 0'}}></p>
                </div>

                <p className='text-7xl pt-24 font-bold'>왜? 한국리서치 <span className='text-c1'>Quick Survey</span> 인가요?</p>

                  <div className='flex flex-wrap justify-center gap-20 p-14' style={{width:'80%', margin:'0 auto'}}>
                    <div className='flex items-center justify-center'>
                        <span className='font-bold text-8xl pr-4 text-gray-200'>1</span>
                        <p className="text-3xl font-bold text-left">대표성 있는<br />
                        국내 최대 규모 패널</p>
                      </div>
                    <div className='flex items-center justify-center'>
                      <span className='font-bold text-8xl pr-4 text-gray-200'>2</span>
                    <p className="text-3xl font-bold text-left">프로젝트 별<br/>
                    전담 연구원 배치</p></div>


                    <div  className='flex items-center justify-center'>
                      <span className='font-bold text-8xl pr-4 text-gray-200'>3</span>
                    <p className="text-3xl font-bold text-left">신뢰할 수 있는<br/>
                    데이터</p></div>
                    <div  className='flex items-center justify-center'>
                      <span className='font-bold text-8xl pr-4 text-gray-200'>4</span>
                    <p className="text-3xl font-bold text-left">10년 이상 축적된<br/>
                    다양한 노하우</p></div>
                  </div>



              </div>
              
             
        </div>

        {/* 서비스소개 */}

        <div className="h-screen service-section relative" style={{background: 'rgba(249, 238, 234, 0.40)'}}>
        <Servicedep />
          
          <div className='flex justify-between items-center'>
            <div className='flex flex-col pl-80 w-2/4'>
              <p className='text-7xl font-bold pb-10'>대표성 있는<br /><span className='text-c2'>국내 최대 규모</span> 패널</p>
              <p className='text-lg text-gray-800 pb-10'>한국리서치는 92만명의 자체 패널을 보유하고 있습니다.<br />
지역, 성, 연령 분포를 고려하여 모집하여 통계적 대표성을 확보했으며, <br />
국가 승인 통계 조사 표본 설계에도 활용되어 신뢰성이 검증되었습니다.<br />
주기적인 패널 정보 업데이트를 통해 적격응답자를 빠르게 찾을 수 있습니다.</p>
              <button className='rounded-full bg-c2 text-white text-lg lg:w-1/5 p-4'>패널소개 더보기</button>
            </div>
            
            <div className=' w-2/4 service-img h-screen'></div>

          </div>

        </div>


        {/* 특장점 */}
        <div className="h-screen relative" style={{background: '#F3EFED'}}>
          <Servicedep />
          
          <div className='flex flex-col justify-center items-center h-screen'>
              <div className='text-7xl font-bold pb-10'>프로젝트 별 <span className='text-c3'>전담 연구원</span> 배치</div>
              <p className='text-lg text-gray-800 pb-14 text-center'>각 프로젝트 별로 경험이 풍부한 전담 연구원이 배치됩니다.<br />
  IRB 승인을 위한 준비, 설문지 리뷰, 온라인 설문 점검, 데이터 확인까지 각 단계별로 꼼꼼하게 확인합니다.<br />
  연구원은 연구자들의 학술 조사에만 집중할 수 있도록 개발 및 패널 관리는 개별 팀에서 담당합니다.</p>

             
              <div className='flex justify-center items-center gap-2 text-lg w-1/2'>
                
                 {/* 첫번째 */}
                <div className='rounded-xl bg-white p-8 shadow-xl w-1/4'>
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

                <div className='rounded-xl bg-white p-8 shadow-xl w-1/4'>
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

        {/* 특장점2 */}
        <div className="h-screen relative service-section ">
        <Servicedep />
          
          <div className='flex flex-col justify-center items-center h-screen'>
              <div className='text-7xl font-bold text-white pb-10'>신뢰할 수 있는 데이터</div>
              <p className='text-lg text-white pb-10 text-center'>정확하고 신뢰할 수 있는 데이터를 제공합니다.</p>

              <div className='rounded-full bg-white font-bold text-2xl p-5 w-2/5 text-center'>전담 연구원이 <span className='text-c3'>직접 데이터를 점검하여 아래와 같은 데이터</span>는 전달하지 않습니다.</div>
              <div className='rounded-lg border-solid border border-white z-10 -mt-14 w-2/5 p-4 pt-16'>
                <ul className='grid grid-cols-2 gap-4 p-4'>
                  <li className='relative rounded-full bg-c3 text-white font-bold text-xl text-center p-4 align-middle shadow-lg'><p className='absolute left-2 top-2 rounded-full bg-white p-3 inline-block items-start'><img src='../images/ico_x.png' alt="x" /></p>설문에 끝까지 참여하지 않은 데이터</li>
                  <li className='relative rounded-full bg-c3 text-white font-bold text-xl text-center p-4 shadow-lg'><p className='absolute left-2 top-2 rounded-full bg-white p-3 inline-block items-start'><img src="./images/ico_x.png" alt="x" /></p>일괄되게 동일한 응답을 한 데이터</li>
                  <li className='relative rounded-full bg-c3 text-white font-bold text-xl text-center p-4 shadow-lg'><p className='absolute left-2 top-2 rounded-full bg-white p-3 inline-block items-start'><img src="./images/ico_x.png" alt="x" /></p>누락값이 있는 데이터</li>
                  <li className='relative rounded-full bg-c3 text-white font-bold text-xl text-center p-4 shadow-lg'><p className='absolute left-2 top-2 rounded-full bg-white p-3 inline-block items-start'><img src="./images/ico_x.png" alt="x" /></p>응답 시간이 지나치게 짧은 데이터</li>
                  <li className='relative rounded-full bg-c3 text-white font-bold text-xl text-center p-4 shadow-lg'><p className='absolute left-2 top-2 rounded-full bg-white p-3 inline-block items-start'><img src="./images/ico_x.png" alt="x" /></p>비논리적인 데이터</li>
                  <li className='relative rounded-full bg-c3 text-white font-bold text-xl text-center p-4 shadow-lg'><p className='absolute left-2 top-2 rounded-full bg-white p-3 inline-block items-start'><img src="./images/ico_x.png" alt="x" /></p>그 외 신뢰할 수 없는 오류 데이터</li>
                </ul>
              </div>
              <p className="text-center"><img src="../images/ico_bottomarrow.png" alt="" /></p>
              <p className="font-bold text-3xl text-center text-white pt-10">따라서 동일한 샘플 수라도 비표본 오차를 줄인 유효한 데이터를 받아보실 수 있습니다.</p>
          </div>
        </div>

        {/* 특장점3 */}
        <div className="h-screen relative sample-section">
        <Servicedep />

          <div className='flex justify-start items-center h-screen'>
            <div className="grid grid-cols-3 gap-8 w-full pl-80 pr-40">
              <div className="col-span-3">
                <p className='text-7xl font-bold pb-8'>10년 이상의 업력으로<br />
  축적된 다양한 노하우 보유</p>
              <p className='text-lg pb-10'>10년 이상 축적된 학술 조사 진행 노하우를 바탕으로 다양한 조사 기법을 활용하여<br />
  다양한 주제와 조사 대상에 대해 빠르고 정확한 조사를 수행할 수 있습니다.</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-12">
                <p className='flex items-center font-bold text-4xl pb-4'><img src="../images/service_ico1.png" alt="" className='pr-2'></img> 언론/미디어/정치</p>
                <ul className='text-lg text-gray-500'>
                  <li>· OTT 이용자 시청 형태 관련 조사</li>
                  <li>· 숏폼 콘텐츠 현황과 연령별 만족도 조사</li>
                  <li>· 생성형 AI 이용자 현황 조사</li>
                  <li>· 메타버스 이용 경험자 대상 조사</li>
                  <li>· 정치와 미디어 연구 조사</li>
                </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-12">
                <p className='flex items-center font-bold text-4xl pb-4'><img src="../images/service_ico2.png" alt="" className='pr-2'></img> 의료/보건</p>
                <ul className='text-lg text-gray-500'>
                  <li>· 간호사 대상 건강 정보 영상 평가 조사</li>
                  <li>· 암 환자 의료 이용 경험 조사</li>
                  <li>· 고혈압, 당뇨 진단자 대상 건강 상태 조사</li>
                  <li>· 난임 여성 대상 시술 과정 관리 조사</li>
                  <li>· 보육교사 대상 감염병 관련 척도 개발 조사</li>
                  </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-12">
                <p className='flex items-center font-bold text-4xl pb-4'><img src="../images/service_ico3.png" alt="" className='pr-2'></img> 심리/상담</p>
                <ul className='text-lg text-gray-500'>
                  <li>· 대학생 우울 관련 심리적 특성 조사</li>
                  <li>· 중년 부부 대상 위기 관련 조사(쌍조사)</li>
                  <li>· 부모의 양육 스트레스 및 부부관계 조사(쌍조사)</li>
                  <li>· 데이트 폭력 피해 경험자의 유형 및 심리적 조사</li>
                  <li>· 불공정 상황에서의 심리 경험 조사</li>
                  </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-12">
                <p className='flex items-center font-bold text-4xl pb-4'><img src="../images/service_ico4.png" alt="" className='pr-2'></img> 직군/산업</p>
                <ul className='text-lg text-gray-500'>
                  <li>· 직장 내 세대 소통 활성화 방안 조사</li>
                  <li>· 성인의 일과 삶의 경험 조사(1~3차 진행)</li>
                  <li>· 직장인 대상 재택 근무 및 온라인 미팅 연구 조사</li>
                  <li>· 제조업 분야 중소기업자 대상 지식공유행동 조사</li>
                  <li>· 전기자동차 사용자 대상 신규 충전 방식 컨셉 조사</li>
                  </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-12">
                <p className='flex items-center font-bold text-4xl pb-4'><img src="../images/service_ico5.png" alt="" className='pr-2'></img> 관광</p>
                <ul className='text-lg text-gray-500'>
                  <li>· 반려동물 동반 여행 의도 조사</li>
                  <li>· ChatGPT를 이용한 여행 이용자 조사</li>
                  <li>· 문화관광축제 방문객 대상 만족도 조사</li>
                  <li>· 강원도 폐광 지역 관광객 대상 만족도 조사</li>
                  <li>· 전시컨벤션센터 개최 전시회 경험자 대상 조사</li>
                  </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-12">
                <p className='flex items-center font-bold text-4xl pb-4'><img src="../images/service_ico6.png" alt="" className='pr-2'></img> 아동/청소년</p>
                <ul className='text-lg text-gray-500'>
                  <li>· 아동/청소년 스마트폰 과의존 척도 개발 조사</li>
                  <li>· 인공지능 챗봇 상호작용에 대한 청소년 인식 조사</li>
                  <li>· 여고생 대상 비만 교육 관련 조사</li>
                  <li>· 미취학 아동의 아버지 대상 양육 스트레스 조사</li>
                  <li>· 소아청소년 학부모 백신 인식 조사</li>
                  </ul>
              </div>
              <div className='col-span-3 text-right italic -mt-5'>실제 진행한 조사 중 최신의 트렌드를 반영한 일부만 소개해 드립니다.</div>

            </div>
            </div>

        </div>


        <SectionStep />


    </div>
  );
}

export default App;
