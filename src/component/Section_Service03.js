
import Servicedep from "./servicedep";

export default function SectionService03() {
   
    return (

 <div className="lg:h-screen relative service-section w-full">
 <Servicedep />
   
   <div className='flex flex-col justify-center items-center lg:h-screen'>
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
 
    );
}
