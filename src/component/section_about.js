
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';




export default function SectionAbout(props) {

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

    const aRef = useRef()
    const tl = useRef()


    useGSAP(()=>{
      tl.current = gsap.timeline( {
        scrollTrigger: {
          trigger: ".sectionAbout", // 범위를 지정하는 요소
          start: "top center", // 애니메이션이 시작되는 스크롤 위치
          end: "bottom center",
          scrub: true
        }
      })
      // .from (".t1",{y:50, opacity:0, duration:1})
      // .from (".t3",{y:50, opacity:0, duration:1})
      // .from (".t2",{y:50, opacity:0, duration:1})
    },{scope: aRef});

   


    const whysurvey = [
      {
        id:'1',
        title : '대표성 있는\n국내 최대 규모 패널'
      },
      {
        id:'2',
        title : '프로젝트 별\n전담 연구원 배치'
      },
      {
        id:'3',
        title : '신뢰할 수\n있는 데이터'
      },
      {
        id:'4',
        title : '10년 이상 축적된\n다양한 노하우'
      },
    ]
    return (


  <div ref={aRef} className="lg:min-h-screen relative w-full flex justify-center items-center p-4">
  
      <div className='relative text-center sectionAbout'>

        <div className="pb-4 pt-10 lg:pt-6"><img src={process.env.PUBLIC_URL + '/images/about_img.png'} alt="" /></div>
        <div className='inline-block t1'>
          <p className='inline-block text-3xl lg:text-3.5vw font-extrabold'>한국리서치에 의뢰하세요</p>
          <p style={{background:'#F8F0E7', height:'15px', width:'100%', margin:'-10px 0 0 0'}}></p>
        </div>
        <p className="flex justify-center p-2 lg:pt-6 lg:pb-2 t3"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="39" viewBox="0 0 12 39" fill="none">
  <path d="M6 38.7735L11.7735 33L6 27.2265L0.226499 33L6 38.7735ZM5 4.37114e-08L5 33L7 33L7 -4.37114e-08L5 4.37114e-08Z" fill="black"/>
</svg></p>
        <p className='text-2xl lg:text-3vw font-bold t2'>왜? 한국리서치 <span className='text-c1'>Quick Survey</span> 인가요?</p>
         
          <div className='grid grid-cols-1 lg:flex lg:justify-center lg:gap-8 lg:mt-8 mt-4 mb-4'>

            {
              whysurvey.map((i,o)=>{
                return(
                  <div className={`whysurvey${o} flex items-center justify-start p-2 pl-4 pr-4 m-1 bg-zinc-50 rounded-full lg:rounded-none lg:bg-transparent`}>
                  <span className='font-bold text-3xl lg:text-3.5vw pr-4 text-gray-200'>{i.id}</span>
                  <p className="text-base lg:text-[1.3vw] lg:leading-[1.6vw] font-bold text-left lg:whitespace-pre-line">{i.title}</p>
                </div>
                )
              })
            }
           
            
          </div>

  
      </div> 

        </div>
    );
}
