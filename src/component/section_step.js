import React, { useState } from "react";

export default function SectionStep() {
    const [hoverIndex, setHoverIndex] = useState(0); // 초기에 첫 번째 요소가 hover된 상태로 설정

    const item = [
        { id : '01', title : '사전 논의',iclass : 'stepico_1' },
        { id : '02', title : '작성된 설문지 검토',iclass : 'stepico_2' },
        { id : '03', title : '온라인 설문 제작',iclass : 'stepico_3'},
        { id : '04', title : '온라인 조사 수행',iclass : 'stepico_4'},
        { id : '05', title : '최종 데이터 전달',iclass : 'stepico_5'},
    ];

    const handleMouseEnter = (index) => {
        setHoverIndex(index); // 마우스가 요소에 진입하면 해당 요소의 인덱스를 설정하여 hoverIndex를 업데이트
    };

    return (
        <div className="relative flex justify-center items-start min-h-screen w-full sectionStep">
            <div className="flex flex-col items-center w-10/12 h-screen justify-center">
                <h1 className="text-7xl font-bold text-center pb-12">
                    한국리서치 <span className='text-c1'>Quick Survey</span> 어떻게 진행되나요?
                </h1>
                
                <ul className='flex gap-14 justify-center items-center text-lg w-full'>
                    {item.map((step, index) => (
                        <li
                            key={step.id}
                            className={`relative rounded-full flex flex-col justify-center text-center text-white font-bold w-44 h-44 ${hoverIndex === index ? 'bg-c1 w-48 h-48' : 'bg-neutral-400'} shadow-lg transition duration-300`}
                            onMouseEnter={() => handleMouseEnter(index)} // 마우스가 요소에 진입할 때 호출되는 이벤트 핸들러
                            onMouseLeave={() => setHoverIndex(-1)} // 마우스가 요소를 떠날 때 hoverIndex를 초기화하여 hover 효과를 해제
                        >
                            <i className={step.iclass}></i> {step.title} 
                            {index !== item.length - 1 && (
                                <span className="absolute -right-11">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="12" viewBox="0 0 46 12" fill="none">
                                        <path d="M45.7735 6L40 0.226497L34.2265 6L40 11.7735L45.7735 6ZM0 7H40V5H0V7Z" fill={hoverIndex === index ? "#CA2C34" : "#A6A6A6"} />
                                    </svg>
                                </span>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="relative flex w-10/12 pl-14 pr-14 pt-12 pb-8 rounded-full border-solid border-t-2 border-c1 shadow-lg bg-white mt-24">
                    <ul className="absolute -top-6 left-0 flex gap-4 justify-between pl-24 pr-24 w-full">
                        {item.map((step, index) => (
                            <li key={index} className="rounded-xl bg-c1 pl-4 pr-4 pb-3 pt-3 text-center font-bold text-lg text-white">Step {step.id}</li>
                        ))}
                    </ul>

                    <div className='step01_cont flex'>
                        <p className="text-c1 text-4xl font-bold pr-6">사전논의</p>
                        <ul className="flex flex-col text-lg">
                            <li>· 견적 논의 및 확정</li>
                            <li>· *IRB심의 시 필요한 자료 전달</li>
                            <li className="absolute right-14 bottom-8 text-c1">*IRB 심의가 조사 진행 시 필수는 아님</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
