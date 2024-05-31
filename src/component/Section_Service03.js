
import Servicedep from "./servicedep";
import { useRef } from "react";


export default function SectionService03(props) {
   



  const datasort = [
    '설문에 끝까지 참여하지 않은 데이터',
    '모두 동일한 응답을 한 데이터',
    '누락값이 있는 데이터',
    '응답 시간이 지나치게 짧은 데이터',
    '비논리적인 데이터',
    '그 외 신뢰할 수 없는 오류 데이터'
  ]
    return (

 <div className="relative service-section lg:h-screen w-full bb t0">
  <div className="text-white">

  </div>
   <div className='flex flex-col justify-center items-center p-4 pt-14 pb-14 lg:p-0 lg:h-screen triggerbox'>
       <div className='text-4xl font-extrabold pb-4 text-center text-white lg:text-3.5vw lg:pb-[1%] t1'>신뢰할 수 있는 데이터</div>
       <p className='text-base text-white pb-4 leading-tight lg:pb-[2.5%] lg:text-1vw text-center t2'>정확하고 신뢰할 수 있는 데이터를 제공합니다.</p>

       <div className='rounded-t-lg rounded-b-none bg-white font-bold text-base leading-tight lg:text-1.2vw lg:w-6/12 lg:p-3 p-4 z-10 text-center t3'>
    전담 연구원이 <span className='text-c1'>직접 데이터를 점검하여 아래와 같은 데이터</span>는 전달하지 않습니다.
</div>
        <div className='rounded-lg border-solid border border-white -mt-10 lg:w-6/12 lg:pt-10 lg:pb-2 p-4 pt-14 w-full'>
         <ul className='grid grid-cols-1 gap-2 p-2 lg:grid-cols-2 lg:gap-4 lg:p-4 t4'>
          {
            datasort.map((i)=>{
              return(
                <li className='relative flex items-center justify-center rounded-full bg-c3 text-white font-bold lg:text-1.2vw text-center p-2 lg:p-3 lg:pl-10 align-middle shadow-lg'>
                  <p className='absolute -left-2 lg:left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 lg:p-2 flex items-start'>
                    <img src={process.env.PUBLIC_URL + '/images/ico_x.png'} alt="x" className="lg:w-4 lg:h-4 w-2 h-2" /></p>{i}
                </li>
           
              )
            })
          }
          </ul>
       </div>
       <p className="text-center"><img src={process.env.PUBLIC_URL + "/images/ico_bottomarrow.png"} alt="" /></p>
       <p className="font-bold text-lg leading-tight lg:text-1.5vw text-center text-white pt-4 lg:pt-10 t5">따라서 동일한 샘플 수라도 비표본 오차를 줄인 유효한 데이터를 받아보실 수 있습니다.</p>
   </div>
   </div>
 
    );
}
