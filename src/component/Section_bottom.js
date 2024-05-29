
import React from "react";


export default function SectionBottom() {
    

    const checklist = [
        '연구와 논문작성에 몰입할 수 있는 시간을 확보하실 수 있습니다',
        '학술 조사 전문가에게 피드백을 받아보실 수 있습니다',
        '대표성 있는 응답자에게 조사하실 수 있습니다',
        '신뢰할 수 있는 데이터를 수집하실 수 있습니다'
    ]



      
    return (
        <div>
             
        <div className="relative flex flex-col justify-center items-center lg:min-h-screen lg:pt-[8%] lg:pb-[8%] w-full pt-14 pb-14">
  

            <p className="text-4xl brnone pl-8 pr-8 pb-8 lg:text-3.5vw font-extrabold lg:pb-6 text-center t0">학술 연구 설문조사 데이터 수집,<br />
한국리서치 <span className="text-c1">Quick Survey</span>에 맡기세요</p>


<ul className="p-4 lg:p-14 lg:pt-2 lg:pb-2 flex flex-col items-center">
      {checklist.map((item, index) => (
        <li
          key={index}
          className="mb-2 font-extrabold text-base leading-tight lg:text-[1.2vw]"
        >
          <span className="inline-block bg-neutral-100 rounded-full p-3 pr-14 pl-14 flex items-center">
            <i className="inline-block mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 36 36"
                fill="none"
              >
                <g clipPath="url(#clip0_2018_2138)">
                  <path
                    d="M11.52 12.5996L9 15.1196L18 24.1196L36 6.11961L33.48 3.59961L18 19.0796L11.52 12.5996Z"
                    fill="#CD3941"
                  />
                  <path
                    d="M16.2 30.5998C9.18 30.5998 3.6 25.0198 3.6 17.9998C3.6 10.9798 9.18 5.3998 16.2 5.3998C18.36 5.3998 20.52 5.93981 22.5 7.0198L24.3 3.9598C21.78 2.5198 19.08 1.7998 16.2 1.7998C7.2 1.7998 0 8.9998 0 17.9998C0 26.9998 7.2 34.1998 16.2 34.1998C25.2 34.1998 32.4 26.9998 32.4 17.9998H28.8C28.8 25.0198 23.22 30.5998 16.2 30.5998Z"
                    fill="#CD3941"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2018_2138">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </i>
            {item}
          </span>
        </li>
      ))}
    </ul>
                    <ul className="grid grid-cols-4 lg:grid-cols-12 gap-2 w-full pt-4 pb-4">
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo1.png'} alt="quicksurvey" /></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo2.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo3.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo4.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo5.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo6.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo7.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo8.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo9.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo10.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo11.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo12.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo13.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo14.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo15.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo16.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo17.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo18.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo19.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo20.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo21.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo22.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo23.png'} alt="quicksurvey"/></li>
                        <li><img src={process.env.PUBLIC_URL + '/images/foot_logo24.png'} alt="quicksurvey"/></li>
                    </ul>
    

                    <div className="font-bold text-xl lg:text-1.1vw p-4 pb-2 text-center">수 많은 고객사들이 한국리서치 <span className="text-c1">QuickSurvey</span> 함께하고 있습니다</div>
                    <div className="flex lg:flex-row flex-col justify-center gap-2 lg:gap-4 pt-4">
                        <button className="font-bold text-white text-base lg:text-1.0vw lg:pl-14 lg:pr-14 rounded-full p-4 pr-14 pl-14 bg-c1 leading-tight">한국리서치 Quick Survey<br />
소개자료 다운로드(PDF)</button>
                        <button className="font-bold text-white text-base lg:text-1.0vw lg:pl-14 lg:pr-14 rounded-full p-4 pr-14 pl-14 bg-c3 leading-tight">한국리서치 패널<br />
소개자료 다운로드(PDF)</button>
                    </div>
        </div>
        </div>
    );
}
