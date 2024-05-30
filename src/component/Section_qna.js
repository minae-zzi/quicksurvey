
import Servicedep from "./servicedep";



export default function SectionQna() {



    return (

        <div className="relative flex flex-col lg:flex-row justify-center lg:gap-14 lg:items-center lg:min-h-screen w-full sectionQna p-4 pt-14 pb-14">

            <div className="pb-4 lg:pb-0 t1 lg:w-5/12 flex flex-col gap-6 justify-between w-full">
                <div className="flex">
                    <p className="lg:pr-4 pr-2"><img src={process.env.PUBLIC_URL + '/images/chat_profile1.png'} alt=""/></p>
                    <div className="bg-[#FFE37E] shadow-lg rounded-xl lg:p-8 lg:text-1.1vw lg:w-auto w-full text-base p-6 leading-tight">실험조사를 수행해야 하는데... <br />
이미지, 영상을 설문에 삽입할 수 있을까...? <br />
실험 처치물을 랜덤으로 배정할 수 있을까...? </div>
                </div>

                <div className="flex justify-end">
                    
                <div className="bg-white shadow-lg rounded-xl lg:p-8 lg:text-1.1vw lg:w-auto w-full text-base p-6 leading-tight">온라인 조사 시 연구참여동의서를 <br />
서명으로 받아야 하는데 어떡하지...?</div>
                <p className="lg:pl-4 pl-2"><img src={process.env.PUBLIC_URL + '/images/chat_profile2.png'} alt=""/></p>
                </div>

                <div className="flex">
                    <p className="lg:pr-4 pr-2"><img src={process.env.PUBLIC_URL + '/images/chat_profile1.png'} alt=""/></p>
                    <div className="bg-[#FFE37E] shadow-lg rounded-xl lg:p-8 lg:text-1.1vw lg:w-auto w-full text-base p-6 leading-tight">응답자들이 설문 조사 응답 뿐 아니라 <br />
이미지나, 사진을 첨부했으면 좋겠는데...</div>
                </div>

                <div className="flex justify-end">
                    
                <div className="bg-white shadow-lg rounded-xl lg:p-8 lg:text-1.1vw lg:w-auto w-full text-base p-6 leading-tight">한국리서치 패널 말고, <br />
해외에 있는 외국인 또는 내가 가지고 있는 <br />
리스트를 활용하고 싶은데 가능할까..?</div>
                <p className="lg:pl-4 pl-2"><img src={process.env.PUBLIC_URL + '/images/chat_profile2.png'} alt=""/></p>
                </div>

            </div>
            <div className="font-bold text-center lg:text-left pt-10 lg:pt-0">
                <p className="text-5xl pb-4 font-extrabold lg:text-4vw lg:text-right lg:pb-8 t1">걱정하지 마세요!</p>
                <p className="text-3xl text-center font-bold lg:text-3vw leading-tight lg:text-right brnone t2"><span className="text-c3">이런 고민</span>은<br /> 한국리서치<br /> <span className="text-c3">Quick Survey</span>에서 <br />
                    해결 가능합니다</p>
            </div>
        </div>
    );
}
