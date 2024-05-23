
import Servicedep from "./servicedep";
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
      .from (".t1",{y:50, opacity:0, duration:1})
      .from (".t2",{y:50, opacity:0, duration:1})
      .fromTo (".whysurvey0",{scale:0}, {scale:1})
      .fromTo (".whysurvey1",{scale:0}, {scale:1})
      .fromTo (".whysurvey2",{scale:0}, {scale:1})
      .fromTo (".whysurvey3",{scale:0}, {scale:1})

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


  <div ref={aRef} className="lg:h-screen relative w-full flex justify-center items-center p-4">
    <Servicedep dep="first" />
  
      <div className='relative text-center sectionAbout'>

        <div className="pb-8 pt-24 lg:pt-0"><img src={process.env.PUBLIC_URL + '/images/about_img.png'} alt="" /></div>
        <div className='inline-block t1'>
          <p className='inline-block text-3xl lg:text-7xl font-bold'>한국리서치에 의뢰하세요</p>
          <p style={{background:'#F8F0E7', height:'15px', width:'100%', margin:'-10px 0 0 0'}}></p>
        </div>
  
        <p className='text-2xl pt-4 lg:text-7xl lg:pt-24 font-bold t2'>왜? 한국리서치 <span className='text-c1'>Quick Survey</span> 인가요?</p>
  
          <div className='grid grid-cols-1 lg:grid-cols-4 lg:pr-24 lg:pl-24 lg:mt-8 mt-4 mb-4'>

            {
              whysurvey.map((i,o)=>{
                return(
                  <div className={`whysurvey${o} flex items-center justify-start p-2 pl-4 pr-4 m-1 bg-zinc-50 rounded-full lg:rounded-none lg:bg-transparent`}>
                  <span className='font-bold text-3xl lg:text-8xl pr-4 text-gray-200'>{i.id}</span>
                  <p className="text-base lg:text-3xl font-bold text-left lg:whitespace-pre-line">{i.title}</p>
                </div>
                )
              })
            }
           
            
          </div>

  
      </div> 

        </div>
    );
}
