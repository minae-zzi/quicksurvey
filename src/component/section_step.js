
import Servicedep from "./servicedep";

export default function SectionStep() {



    return (
        <div className="relative sectionStep flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center lg:pl-[20%] lg:pr-[10%] lg:gap-20 lg:min-h-screen p-4 pt-14 pb-14">
 
            <div className="flex flex-col items-center lg:items-start triggerbox">
                <p className="font-extrabold text-4xl text-center lg:text-left lg:text-4vw t1">한국리서치<br/>
                <span className="text-c1">Quick Survey</span><br/>
                어떻게 진행되나요?</p>

                <button onClick={() => window.open("https://b22.hrcglobal.com/?PN=pkQSP01", "_blank")} className='t3 rounded-full bg-zinc-800 text-white text-lg w-3/4 lg:w-4/5 lg:text-1.2vw p-3 lg:mt-12 mt-4'>
                   온라인 조사 화면 체험하기
                </button>
               <p className="pt-4 pl-4 leading-tight lg:text-left lg:text-1vw text-center t2">학술 조사에서 많이 사용하는<br />
문항 형태를 직접 체험해 보실 수 있습니다</p>
            </div>
            <div className="flex flex-col gap-8 pt-14 w-full lg:pt-0 lg:w-7/12 triggerbox2">


                <div className="relative rounded-xl lg:rounded-full p-3 lg:p-6 shadow-lg border-t border-c1 text-lg  bg-white t3">
                    <p className="absolute left-12 -top-4 rounded-full bg-c1 text-white p-2 pl-8 pr-8 font-bold text-sm lg:text-base">Step1. 사전 논의</p>
                    
                    <ul className="p-[10%] pt-5 pb-2 lg:pb-0 lg:pt-3 lg:pl-14 text-base list-decimal text-zinc-600">
                        <li>견적 논의 및 확정</li>
                        <li>*IRB심의 시 필요한 자료 전달 </li>
                    </ul>
                    <p className="relative bottom-0 left-8 lg:left-14 text-sm text-c1">*IRB 심의가 조사 진행 시 필수는 아님</p>
                </div>

                <div className="relative rounded-xl lg:rounded-full p-3 lg:p-6 shadow-lg border-t border-c1 text-lg bg-white t4">
                     <p className="absolute left-12 -top-4 rounded-full bg-c1 text-white p-2 pl-8 pr-8 font-bold text-sm lg:text-base">Step2. 작성된 설문지 검토</p>
                     <ul className="p-[10%] pt-5 pb-2 lg:pb-0 lg:pt-3 lg:pl-14 text-base list-decimal text-zinc-600">
                        <li>한국리서치 연구원 배정</li>
                        <li>설문지(hwp, word 등) 검토</li>
                        <li>최종 설문지 확정</li>

                    </ul>
                </div>

                <div className="relative rounded-xl lg:rounded-full p-3 lg:p-6 shadow-lg border-t border-c1 text-lg bg-white t5">
                     <p className="absolute left-12 -top-4 rounded-full bg-c1 text-white p-2 pl-8 pr-8 font-bold text-sm lg:text-base">Step3. 온라인 설문 제작</p>
                    <ul className="p-[10%] pt-5 pb-2 lg:pb-0 lg:pt-3 lg:pl-14 text-base list-decimal text-zinc-600">
                        <li>한국리서치 전담 개발팀에서 온라인 설문 제작</li>
                        <li>전담 연구원이 1차로 온라인 설문 확인</li>
                        <li>연구자가 2차로 온라인 설문 확인</li>
                        <li>온라인 설문 확정</li>
                    </ul>
                </div>

                <div className="relative rounded-xl lg:rounded-full p-3 lg:p-6 shadow-lg border-t border-c1 text-lg bg-white t6">
                     <p className="absolute left-12 -top-4 rounded-full bg-c1 text-white p-2 pl-8 pr-8 font-bold text-sm lg:text-base">Step4. 온라인 조사 수행</p>
                    <ul className="p-[10%] pt-5 pb-2 lg:pb-0 lg:pt-3 lg:pl-14 text-base list-decimal text-zinc-600">
                        <li>한국리서치 전담 패널팀에서 조사 대상 샘플링</li>
                        <li>적격 응답자들에게 설문 조사 수행 및 응답 독려</li>
                        <li>응답자에게 사례금 제공</li>

                    </ul>
                </div>

                <div className="relative rounded-xl lg:rounded-full p-3 lg:p-6 shadow-lg border-t border-c1 text-lg bg-white t7">
                     <p className="absolute left-12 -top-4 rounded-full bg-c1 text-white p-2 pl-8 pr-8 font-bold text-sm lg:text-base">Step5. 최종데이터 전달</p>
                    <ul className="p-[10%] pt-5 pb-2 lg:pb-0 lg:pt-3 lg:pl-14 text-base list-decimal text-zinc-600">
                        <li>누락 및 불성실 응답값 제외</li>
                        <li>전담 연구원의 응답 논리성 확인</li>
                        <li>최종 Raw데이터(spss, excel) 전달</li>

                    </ul>
                </div>




            </div>
        </div>
    );
}
