
import Servicedep from "./servicedep";

export default function SectionService03() {
   
  const datasort = [
    '설문에 끝까지 참여하지 않은 데이터',
    '일괄되게 동일한 응답을 한 데이터',
    '누락값이 있는 데이터',
    '응답 시간이 지나치게 짧은 데이터',
    '비논리적인 데이터',
    '그 외 신뢰할 수 없는 오류 데이터'
  ]
    return (

 <div className="lg:h-screen relative service-section w-full">
 <Servicedep />
   
   <div className='flex flex-col justify-center items-center lg:h-screen p-4 pt-10 pb-10 lg:p-0'>
       <div className='text-4xl font-bold pb-4 text-center text-white lg:text-7xl lg:pb-10 '>신뢰할 수 있는 데이터</div>
       <p className='text-lg text-white pb-4 lg:pb-10 text-center'>정확하고 신뢰할 수 있는 데이터를 제공합니다.</p>

       <div className='rounded-lg lg:rounded-full bg-white font-bold text-lg leading-tight lg:text-2xl p-4 z-10 lg:w-[935px] text-center'>전담 연구원이 <span className='text-c3'>직접 데이터를 점검하여 아래와 같은 데이터</span>는 전달하지 않습니다.</div>
       <div className='rounded-lg border-solid border border-white -mt-14 lg:w-[935px] p-4 pt-16 w-full'>
         <ul className='grid grid-cols-1 gap-2 p-2 lg:grid-cols-2 lg:gap-4 lg:p-4'>
          {
            datasort.map((i)=>{
              return(
                <li className='relative rounded-full bg-c3 text-white font-bold lg:text-xl text-center p-2 lg:p-4 align-middle shadow-lg'>
                  <p className='absolute -left-2 top-2 lg:left-2 lg:top-2 rounded-full bg-white p-2 lg:p-3 inline-block'>
                    <img src={process.env.PUBLIC_URL + '/images/ico_x.png'} alt="x" className="lg:w-4 lg:h-4 w-2 h-2" /></p>{i}
                </li>
           
              )
            })
          }
          </ul>
       </div>
       <p className="text-center"><img src="../images/ico_bottomarrow.png" alt="" /></p>
       <p className="font-bold text-lg leading-tight lg:text-3xl text-center text-white pt-4 lg:pt-10">따라서 동일한 샘플 수라도 비표본 오차를 줄인 유효한 데이터를 받아보실 수 있습니다.</p>
   </div>
 </div>
 
    );
}
