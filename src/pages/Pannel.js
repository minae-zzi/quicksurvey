import React, { useEffect } from 'react';

import Footer from '../component/footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const Pannel = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(time => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  const blet = (<span className='pr-2 align-middle	'><svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
  <circle cx="1.5" cy="1.5" r="1.5" fill="#CD3941"/>
</svg></span>)

  const blet2 = (<p className=' align-middle flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className='mr-2'>
  <path d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z" fill="#CD3941"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#CD3941"/>
  </svg></p>)

  const merit = [
    { ico:(<img src={`${process.env.PUBLIC_URL}/images/pannel_ico1.png`} alt="" />) , 
      title:'충분한 유효 샘플 확보가 \n가능한 92만명 패널 보유', 
      content:'전국의 국민을 지역, 성, 연령, 직업, 학력, 소득분포에서 대표할 수 있는 충분한 유효 샘플 수를 확보하여 어떠한 조사에서도 적격 응답자 모집 가능'},
      { ico:(<img src={`${process.env.PUBLIC_URL}/images/pannel_ico2.png`} alt="" />) , 
      title:'체계적 패널 모집으로\n우수한 패널 품질 ', 
      content:'많은 수의 패널을 모집하기 위한 무작위 이메일DB형태의 모집이 아닌, 관리자가 계획한 방법 및 채널을 통해서만 가입이 가능하여 패널 품질이 우수함'},
      { ico:(<img src={`${process.env.PUBLIC_URL}/images/pannel_ico3.png`} alt="" />) , 
      title:'패널의 높은 조사 참여\n적극성 및 충성도', 
      content:'조사 완료 후 타사는 포인트로 사례비를 지급하는 반면, 당사는100% 현금 사례비 지급으로 패널의 조사 참여 적극성 및 충성도가 높음'},
      { ico:(<img src={`${process.env.PUBLIC_URL}/images/pannel_ico4.png`} alt="" />) , 
      title:'엄격한 패널 관리로\n자료 신뢰도 제고', 
      content:'안정적 조사 운영 및 데이터 품질 유지를 위하여 Master Sample 등급 제도 등을 통해 엄격한 패널 관리'},
      { ico:(<img src={`${process.env.PUBLIC_URL}/images/pannel_ico5.png`} alt="" />) , 
      title:'철저한 응답 품질\n관리 시스템', 
      content:'불성실 응답을 방지하기 위해 비 적격 Case에 대한 조사 참여 방지 및  탈락 처리를 통해 조사 품질 관리'},
      { ico:(<img src={`${process.env.PUBLIC_URL}/images/pannel_ico6.png`} alt="" />) , 
      title:'개인정보 보유로\n모집단 대표 표본 추출', 
      content:'성별, 학력, 거주지역, 직업 등 개인 정보를 3개월마다 업데이트하여  Master Sample의 최신 개인 정보를 보유하고 있음'},
      { ico:(<img src={`${process.env.PUBLIC_URL}/images/pannel_ico7.png`} alt="" />) , 
      title:'지속적인 패널 \n 관리로 조사 운영 안정성', 
      content:'지속적인 Master Sample 모집과  엄격한 패널 관리로 대형 프로젝트 및 5년 이상 트래킹 조사도 안정적으로 진행'},
      { ico:(<img src={`${process.env.PUBLIC_URL}/images/pannel_ico8.png`} alt="" />) , 
      title:'Master Sample®\n 대외 공신력', 
      content:'한국리서치 Master Sample은 국가 승인 통계 조사 표본 설계에 활용되어 대외적 신뢰성이 검증됨'}
  ]

  const hrcsystem = [
    {title: '응답 성실도에 따른\nMaster Sample 등급', content :'응답 성실도에 따른 7단계의 등급 분류로 Master Sample 유지 및 해지 관리',  id:'01'},
    {title: '유사 프로젝트\n참여 제한', content :'유사 조사 참여자 3개월 이상,  동일 조사 참여자 1개월 이상 조사 참여 제한',  id:'02'},
    {title: '정기조사 / 일반 조사\n참여자 별도 관리', content :'정기적 조사 참여자는  일반 조사 참여 제한',  id:'03'},
    {title: '개인 정보\n지속 업데이트', content :'정기 프로파일 조사를 통하여 개인정보 지속적으로 업데이트',  id:'04'},
    {title: '이메일 ACTIVE\n여부 업데이트', content :'1개월에 한 번씩 이메일 ACTIVE 여부 업데이트',  id:'05'}
  ]

  return (
    <div className="break-keep">
      <div className='svisual_01 flex justify-center text-white font-bold h-40 text-2xl pt-20 lg:pt-40 lg:h-96 lg:text-6xl '>패널소개</div>

      <div className=''>
        <ul className='hidden lg:visible justify-center lg:flex lg:gap-12 lg:text-lg font-bold p-8'>
          <li className='border-b-2 border-white hover:border-b-2 hover:border-zinc-900'><a href='#section1'>MasterSample이란?</a></li>
          <li className='border-b-2 border-white hover:border-b-2 hover:border-zinc-900'><a href='#section2'>특수 패널</a></li>
          <li className='border-b-2 border-white hover:border-b-2 hover:border-zinc-900'><a href='#section3'>특장점</a></li>
          <li className='border-b-2 border-white hover:border-b-2 hover:border-zinc-900'><a href='#section4'>패널 관리 체계</a></li>
        </ul>

        <a name="section1"></a>
        <div className='pt-14 pb-14 p-4 lg:pt-[5%] lg:pb-[10%] lg:min-h-screen flex flex-col justify-items-center items-center justify-center text-center'>
          <p className='text-4xl text-center lg:text-3.5vw lg:pb-[1%] pb-4 font-bold'>한국리서치 <span className='text-c1'>MasterSample</span>이란?</p>
          <p className='lg:pb[4.5%] text-zinc-500 lg:1vw brnone p-4'>한국리서치는 자발적인 조사 참여 의향을 가진 약 92만명의 자체 Master Sample® 을 보유하고 있습니다. <br />
통계적 대표성을 확보한 Master Sample® 을 활용하여 다양한 주제의 조사에서 적격응답자를 신속하게 확보할 수 있으며, 조사 결과의 정확성을 높일 수 있습니다.</p>

          <div className='grid lg:grid-flow-col lg:gird-rows-2 gap-8 w-11/12 lg:w-9/12 pt-10'>
            <div className='shadow-lg rounded-2xl p-8 w-full'>
              <p className='text-2xl lg:text-1.8vw font-extrabold pb-4 text-left'>성별</p>
              <img src={process.env.PUBLIC_URL + '/images/pannel_chart.png'} alt="chart" className='w-full' />
            </div>
            <div className='shadow-lg rounded-2xl p-8 w-full'>
              <p className='text-2xl lg:text-1.8vw font-extrabold pb-4 text-left'>연령별</p>
              <ul className='font-bold text-sm lg:text-1vw grid lg:gap-2 lg:grid-cols-2 text-left items-center flex'>
                <li className='relative flex items-center'>{blet} 15-19세 <span className='absolute right-0 text-zinc-600'>66,890명 <span className='text-c1 lg:pr-4'>7.3%</span></span></li>
                <li className='relative flex items-center'>{blet} 20-29세 <span className='absolute right-0 text-zinc-600'>282,430명 <span className='text-c1'>30.7%</span></span></li>
                <li className='relative flex items-center'>{blet} 30-39세 <span className='absolute right-0 text-zinc-600'>157,967명 <span className='text-c1 lg:pr-4'>17.2%</span></span></li>
                <li className='relative flex items-center'>{blet} 40-49세 <span className='absolute right-0 text-zinc-600'>165,119명명 <span className='text-c1'>17.9%</span></span></li>
                <li className='relative flex items-center'>{blet} 50-59세 <span className='absolute right-0 text-zinc-600'>158,605명 <span className='text-c1 lg:pr-4'>17.2%</span></span></li>
                <li className='relative flex items-center'>{blet} 60세 이상 <span className='absolute right-0 text-zinc-600'>89,696명 <span className='text-c1'>9.7%</span></span></li>
              </ul>
            </div>
            <div className='shadow-lg rounded-2xl p-8 w-full lg:row-span-2'>
              <p className='text-2xl lg:text-1.8vw font-extrabold pb-4 text-left relative'>지역별 <span className='lg:absolute lg:inline lg:top-2 lg:text-1vw text-base block right-0'>전체 Master Sample <span className='text-c1'>920,707명</span></span></p>
              <img src={process.env.PUBLIC_URL + '/images/pannel_map.png'} alt="chart" className='w-full' />
            </div>
          </div>

        </div>


        
          {/* 특수패널 */}
          <a name="section2"></a>
          <div className='pt-10 pb-10 p-4 lg:pt-[8%] lg:pb-[8%] lg:min-h-screen flex flex-col text-center justify-center items-center bg-zinc-50'>
          <p className='text-4xl text-center lg:text-3.5vw lg:pb-[1%] pb-4 font-extrabold'>한국리서치 <span className='text-c1'>특수 패널</span></p>
          <p className='brnone pb-6 lg:pb-[2.5%] text-zinc-500'>이 외에도 한국리서치는 특수 패널을 구축하여 보다 빠르고 정확하게 적격응답자를 찾을 수 있습니다</p>

            <div className='flex flex-col gap-6 lg:flex-row lg:gap-6 lg:w-9/12 w-11/12 justify-center'>

              {/* 첫번째 */}
              <div className='rounded-xl bg-white shadow-xl w-full p-8 lg:p-[2.5%]'>
                <div className='rounded-lg text-xl lg:text-1.2vw bg-slate-900 text-center text-white font-bold p-4 pb-16 -z-10'>의사패널</div>
                <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-4 -mt-12 z-10'>
                    <p className='font-extrabold text-3xl lg:text-1.5vw text-slate-900 p-2 pb-4'>13,367명</p>
                    <p className='rounded-full bg-zinc-400 p-2 mb-2 lg:text-1vw'>병원급별</p>
                    <ul className='text-slate-800 lg:text-1vw'>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>병원 <span className='absolute right-0 text-zinc-400 font-normal'>10,621명 (79.5%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>의원 <span className='absolute right-0 text-zinc-400 font-normal'>2,746명 (20.5%)</span></li>
                    </ul>
                    <p className='rounded-full bg-zinc-400 p-2 mb-2 mt-4 lg:text-1vw'>진료과목별</p>
                    <ul className='text-slate-800 lg:text-1vw'>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>내과 <span className='absolute right-0 text-zinc-400 font-normal'>4,490명 (33.6%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>외과 <span className='absolute right-0 text-zinc-400 font-normal'>2,742명 (20.5%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>기타진료과 <span className='absolute right-0 text-zinc-400 font-normal'>6,135명 (45.9%)</span></li>
                    </ul>

                </div>
              </div>

               {/* 두번째 */}
               <div className='rounded-xl bg-white shadow-xl w-full p-8 lg:p-[2.5%]'>
                <div className='rounded-lg text-xl lg:text-1.2vw bg-c1 text-center text-white font-bold p-4 pb-16 -z-10'>간호사 패널</div>
                <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-4 -mt-12 z-10'>
                    <p className='font-extrabold text-3xl lg:text-1.5vw text-slate-900 p-2 pb-4'>1,250명</p>
                    <p className='rounded-full bg-c4 p-2 mb-2'>병원급별</p>
                    <ul className='text-slate-800 lg:text-1vw'>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>종합병원급 <span className='absolute right-0 text-zinc-400 font-normal'>721명 (57.7%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>병원급 <span className='absolute right-0 text-zinc-400 font-normal'>529명 (42.3%)</span></li>
                    </ul>
                    <p className='rounded-full bg-c4 p-2 mb-2 mt-4'>병동별</p>
                    <ul className='text-slate-800 lg:text-1vw'>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>병동 <span className='absolute right-0 text-zinc-400 font-normal'>601명 (48.1%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>병동 외 근무 <span className='absolute right-0 text-zinc-400 font-normal'>649명 (51.9%)</span></li>
                        </ul>

                </div>
              </div>

               {/* 첫번째 */}
               <div className='rounded-xl bg-white shadow-xl w-full p-8 lg:p-[2.5%]'>
                <div className='rounded-lg text-xl lg:text-1.2vw bg-slate-900 text-center text-white font-bold p-4 pb-16 -z-10'>유병자 패널</div>
                <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-4 -mt-12 z-10'>
                    <p className='font-extrabold text-3xl lg:text-1.5vw text-slate-900 p-2 pb-4'>59,838명</p>
                    <p className='rounded-full bg-zinc-400 p-2 mb-2'>성별</p>
                    <ul className='text-slate-800 lg:text-1vw'>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>남성 <span className='absolute right-0 text-zinc-400 font-normal'>29,499명 (49.3%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>여성 <span className='absolute right-0 text-zinc-400 font-normal'>30,399명 (50.7%)</span></li>
                    </ul>
                    <p className='rounded-full bg-zinc-400 p-2 mb-2 mt-4'>연령별</p>
                    <ul className='text-slate-800 lg:text-1vw'>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>19~30대 <span className='absolute right-0 text-zinc-400 font-normal'>18,748 (31.3%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>40~50대 <span className='absolute right-0 text-zinc-400 font-normal'>22,924명 (38.3%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>60대 이상 <span className='absolute right-0 text-zinc-400 font-normal'>18,166명 (30.4%)</span></li>
                    </ul>

                </div>
              </div>

               {/* 두 */}
               <div className='rounded-xl bg-white shadow-xl w-full p-8 lg:p-[2.5%]'>
                <div className='rounded-lg text-xl lg:text-1.2vw bg-c1 text-center text-white font-bold p-4 pb-16 -z-10'>B2B 패널</div>
                <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-4 -mt-12 z-10'>
                    <p className='font-extrabold text-3xl lg:text-1.5vw text-slate-900 p-2 pb-4'>72,844명</p>
                    <p className='rounded-full bg-c4 p-2 mb-2'>성별</p>
                    <ul className='text-slate-800 lg:text-1vw'>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>남성 <span className='absolute right-0 text-zinc-400 font-normal'>44,334명 (60.9%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>여성 <span className='absolute right-0 text-zinc-400 font-normal'>28,510명 (39.1%)</span></li>
                    </ul>
                    <p className='rounded-full bg-c4 p-2 mb-2 mt-4'>연령별</p>
                    <ul className='text-slate-800 lg:text-1vw'>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>20~30대 <span className='absolute right-0 text-zinc-400 font-normal'>19,164명 (26.3%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>40대 <span className='absolute right-0 text-zinc-400 font-normal'>24,883명 (34.2%)</span></li>
                        <li className='border-b border-zinc-200 p-2 relative text-left'>50~60대 <span className='absolute right-0 text-zinc-400 font-normal'>28,797명 (39.5%)</span></li>
                    </ul>

                </div>
              </div>


            </div>

            <div className='flex flex-col lg:flex-row justify-start text-left items-center mt-8 lg:w-9/12 w-10/12'>
              <div className='w-full lg:w-3/12 bg-c1 text-white p-4 font-bold text-xl lg:text-1.2vw text-center rounded-full'>확대예정패널</div>
              <div className='hidden lg:block'><svg xmlns="http://www.w3.org/2000/svg" width="78" height="12" viewBox="0 0 78 12" fill="none">
                <path d="M66.6667 5.99999C66.6667 8.94551 69.0545 11.3333 72 11.3333C74.9455 11.3333 77.3333 8.94551 77.3333 5.99999C77.3333 3.05447 74.9455 0.66666 72 0.66666C69.0545 0.66666 66.6667 3.05448 66.6667 5.99999ZM8.74228e-08 7L72 6.99999L72 4.99999L-8.74228e-08 5L8.74228e-08 7Z" fill="#CD3941"/>
              </svg></div>
              <div className='bg-white shadow-xl p-4 mt-4 lg:mt-0 lg:pl-12 rounded-xl lg:rounded-full w-full border-l-2 border-r-2 border-c1'>
                <ul className='flex flex-col lg:flex-row items-centerlg:gap-10 gap-2'>
                  <li className='flex justify-center font-bold lg:text-1.1vw '>{blet2} 70대 이상 시니어 패널</li>
                  <li className='flex justify-center font-bold lg:text-1.1vw '>{blet2} 자녀+부모 쌍 패널</li>
                  <li className='flex justify-center font-bold lg:text-1.1vw '>{blet2} 국내 거주 외국인 패널</li>
                  <li className='flex justify-center font-bold lg:text-1.1vw '>{blet2} 다문화 가구 패널</li>
                  <li className='flex justify-center font-bold lg:text-1.1vw '>...</li>
                </ul>
              </div>
            </div>

          
          </div>


          {/* 특장점 */}
          <a name="section3"></a>
          <div className='lg:min-h-screen lg:pt-[8%] lg:pb-[8%] flex flex-col items-center justify-center pt-14 pb-14 lg:p-0'>
            <p className='text-4xl text-center lg:text-[3.5vw] lg:pb-14 pb-4 font-extrabold'>한국리서치 MasterSample의 <span className='text-c1'>특장점은?</span></p>

            <div className='lg:w-9/12 lg:min-w-[1200px] grid gap-4 w-10/12 lg:grid-cols-4 lg:gap-8 justify-center items-start'>
 

                {
                  merit.map((item, index)=>{
                    return(
                      <div key={index} className='rounded-xl bg-zinc-50 lg:p-[15%] p-12 pt-10 pb-10 flex flex-col items-center text-center min-h-full'>
     
      <p>{item.ico}</p>
                        <p className='font-extrabold text-xl lg:text-1.2vw lg:whitespace-pre-line pb-2 pt-2'>{item.title}</p>
                        <p className='text-zinc-500 lg:text-1.1vw lg:whitespace-pre-line'>{item.content}</p>
                      </div>
                    )
                  })
                }
                

            </div>

          </div>


          {/* 패널관리체계 */}
          <a name="section4"></a>
          <div className='lg:min-h-screen lg:pt-[8%] lg:pb-[8%] flex flex-col items-center justify-center pt-14 pb-14 lg:p-0' style={{backgroundColor:'rgba(249, 238, 234, 0.40)'}}>
            <p className='text-4xl text-center lg:text-3.5vw lg:pb-[1%] pb-4 font-extrabold pr-4 pl-4'>한국리서치 MasterSample의 <span className='text-c1'>패널 관리 체계</span></p>
            <p className='brnone text-lg text-center leading-tight pl-14 pr-14 text-zinc-500 lg:text-1vw'>안정적인 조사 운영 및 자료 신뢰도를 높이기 위해 Master Sample 등급 제도 등 엄격한 관리 시스템을 운영하고 있습니다.</p>

            <div className='lg:w-9/12 lg:min-w-[1000px] grid gap-2 w-10/12 lg:grid-cols-5 lg:gap-4 justify-center items-start pt-4 lg:pt-14'>
                
                {
                  hrcsystem.map((item, i)=>{
                    return(
                      <div className='flex flex-col justify-center items-center mt-4 lg:mt-0'>
                        <p className='rounded-full font-bold text-white p-4 bg-c2 text-lg lg:text-1.1vw leading-tight w-full text-center lg:whitespace-pre-line'>{item.title}</p>
                        <p className='lg:mt-4 mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="12" height="41" viewBox="0 0 12 41" fill="none">
                          <path d="M6 40.3333C8.94552 40.3333 11.3333 37.9455 11.3333 35C11.3333 32.0545 8.94552 29.6667 6 29.6667C3.05448 29.6667 0.666666 32.0545 0.666667 35C0.666667 37.9455 3.05448 40.3333 6 40.3333ZM6 0.226498L0.226496 6L6 11.7735L11.7735 6L6 0.226498ZM7 35L7 6L5 6L5 35L7 35Z" fill="#CD3941"/>
                        </svg></p>
                        <p className='rounded-full text-white p-4 bg-c1 w-10 h-10 flex items-center justify-center relative z-10 -mt-4'>{item.id}</p>
                        <div className='flex items-center rounded-xl p-8 pl-6 pr-6 text-center font-bold text-lg leading-tight border-t-2 border-c2 bg-white shadow-xl -mt-4 lg:min-h-[140px] lg:text-1.1vw'>{item.content}</div>
                      </div>
                    )
                  })

                }
                

            </div>

            <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:w-9/12 lg:min-w-[1000px] pt-14 w-full'>
              <div className='flex flex-col justify-center items-center'>
                <p><img src={`${process.env.PUBLIC_URL}/images/pannel_tag.png`} alt="" /></p>
                <p className='text-c1 font-bold text-xl'>Master Sample</p>
                <p className='font-bold text-4xl lg:text-2vw'>등급제도</p>
              </div>
              <div className='flex justify-start w-11/12 lg:w-10/12 relative'>
                <ul className='flex flex-col gap-4 lg:gap-2 font-bold text-sm lg:text-1.1vw mt-4 lg:mt-0 w-full'>
                <li className='flex items-stretch lg:items-center gap-2'>
                  <div className='flex items-center justify-center w-6 h-6 text-sm bg-c1 text-white font-bold rounded-full'>1</div> 
                  <div className="lg:min-w-[12%] pr-2">신규 패널</div> 
                  <div className="text-zinc-500">신규 가입 패널</div>
                </li>

                <li className='flex flex-wrap lg:flex-nowrap items-stretch lg:items-center gap-2 w-full'>
                  <div className='flex items-center justify-center w-6 h-6 bg-c1 text-white font-bold rounded-full'>2</div> 
                  <div className="lg:min-w-[12%]">불성실 패널</div> 
                  <div className="text-zinc-500">1,2,3회 불성실 응답자</div>
                  <div className='flex-grow system_blet h-4 hidden lg:block'></div>
                  <div className='w-full lg:w-auto text-sm lg:text-1vw p-1 pl-4 pr-4 mt-0 lg:mt-0 rounded-full text-c1 border border-red-200 leading-tight text-center'>
                    1,2회 경고 이메일 보냄,<br className='lg:hidden' />3회 시 Master Sample 해지
                  </div>
                </li>



                <li className='flex flex-wrap lg:flex-nowrap items-stretch lg:items-center gap-2 w-full'>
                  <div className='flex items-center justify-center w-6 h-6 bg-c1 text-white font-bold rounded-full'>3</div> 
                  <div className="lg:min-w-[12%] pr-2">활성 패널</div> 
                  <div className="text-zinc-500">현재 진행 중인 응답자</div>
                </li>

                <li className='flex flex-wrap lg:flex-nowrap items-stretch lg:items-center gap-2 w-full'>
                  <div className='flex items-center justify-center w-6 h-6 bg-c1 text-white font-bold rounded-full'>4</div> 
                  <div className="lg:min-w-[12%] pr-2">휴면 패널</div> 
                  <div className="text-zinc-500">1년간 접속이 없는 응답자 </div>
                  <div className='flex-grow system_blet h-4 hidden lg:block'></div>
                  <div className='w-full lg:w-auto text-sm lg:text-1vw p-1 pl-4 pr-4 mt-0 lg:mt-0 rounded-full text-c1 border border-red-200 leading-tight text-center'>
                  변경 확인 후 대응
                  </div>
                </li>

                <li className='flex flex-wrap lg:flex-nowrap items-stretch lg:items-center gap-2 w-full'>
                  <div className='flex items-center justify-center w-6 h-6 bg-c1 text-white font-bold rounded-full'>5</div> 
                  <div className="lg:min-w-[12%] pr-2">불량 패널</div> 
                  <div className="text-zinc-500">비 매너, 누리꾼, 불량 응답자 </div>
                  <div className='flex-grow system_blet h-4 hidden lg:block'></div>
                  <div className='w-full lg:w-auto text-sm lg:text-1vw p-1 pl-4 pr-4 mt-0 lg:mt-0 rounded-full text-c1 border border-red-200 leading-tight text-center'>
                   Master Sample 해지
                  </div>
                </li>

                <li className='flex flex-wrap lg:flex-nowrap items-stretch lg:items-center gap-2 w-full'>
                  <div className='flex items-center justify-center w-6 h-6 bg-c1 text-white font-bold rounded-full'>6</div> 
                  <div className="lg:min-w-[12%] pr-2">탈퇴 희망자</div> 
                  <div className="text-zinc-500">본인이 탈퇴를 원하는 자</div>
                  <div className='flex-grow system_blet h-4 hidden lg:block'></div>
                  <div className='w-full lg:w-auto text-sm lg:text-1vw p-1 pl-4 pr-4 mt-0 lg:mt-0 rounded-full text-c1 border border-red-200 leading-tight text-center'>
                   Master Sample 해지
                  </div>
                </li>

                <li className='flex flex-wrap lg:flex-nowrap items-stretch lg:items-center gap-2 w-full'>
                  <div className='flex items-center justify-center w-6 h-6 bg-c1 text-white font-bold rounded-full'>7</div> 
                  <div className="lg:min-w-[12%] pr-2">과다 참여 패널</div> 
                  <div className="text-zinc-500">연 24회 이상, 월 3회 이상 참여 제한 패널</div>
                  <div className='flex-grow system_blet h-4 hidden lg:block'></div>
                  <div className='w-full lg:w-auto text-sm lg:text-1vw p-1 pl-4 pr-4 mt-0 lg:mt-0 rounded-full text-c1 border border-red-200 leading-tight text-center'>
                   설문 전달 축소
                  </div>
                </li>


                </ul>
              </div>
            </div>

          </div>




      </div>
      <Footer />
    </div>
  );
};

export default Pannel;
