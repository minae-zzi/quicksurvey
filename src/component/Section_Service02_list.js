

const researchlist = [
    {title:'개발 및 데이터팀', list:['온라인 설문구현', '온라인 설문 수정', '온라인 설문 유지보수', 'DB 관리']},
    {title:'연구원', list:['고객 커뮤니케이션', '프로젝트 관리 감독', 'IRB 승인 관련 지원 업무', '설문지 리뷰','온라인 설문 점검','데이터 점검']},
    {title:'패널 관리 팀', list:['응답자 패널 관리', '적격 응답자 섭외', '설문 응답 독려', '실사 진행 상황 공유']}
  ]
  

// 첫 번째 컴포넌트
export function SectionService02List(props) {
    return (
        <div className={`flex flex-row lg:flex-row justify-center items-center gap-2 text-lg w-full lg:w-9/12 ${props.className}`}>


        {/* 첫번째 */}
        <div className='rounded-xl bg-white shadow-xl p-4 lg:p-5'>
        <div className='rounded-lg bg-c2 text-center text-white font-bold lg:text-1.1vw p-4 pb-14 -z-10'>{researchlist[0].title}</div>
        <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-3 -mt-11 z-10 lg:text-1vw'>
            <ul className='text-slate-800'>
            { researchlist[0].list.map((i)=>{
                return(
                <li className='rounded-full bg-gray-100 p-2 pl-6 pr-6 mb-1'>{i}</li>
                )
            })}
            </ul>
        </div>
        </div>
    
        <div><svg xmlns="http://www.w3.org/2000/svg" width="52" height="40" viewBox="0 0 52 40" fill="none">
        <rect x="31.2092" y="1" width="26.5735" height="26.5735" transform="rotate(45 31.2092 1)" fill="#BC9A8F"/>
        <rect x="16.7914" y="6.46995" width="17.9182" height="17.9182" transform="rotate(45 16.7914 6.46995)" fill="#F4F0EE" stroke="#BC9A8F" stroke-width="3"/>
        </svg></div>
    
        {/* 두번째 */}
        <div className='rounded-xl bg-white p-4 shadow-xl lg:p-5'>
        <div className='rounded-lg bg-c3 text-center text-white font-bold lg:text-1.1vw p-4 pb-14 -z-10'>{researchlist[1].title}</div>
        <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-3 -mt-11 z-10 lg:text-1vw'>
            <ul className='text-slate-800'>
            { researchlist[1].list.map((i)=>{
                return(
                <li className='rounded-full bg-gray-100 p-2 pl-8 pr-8 mb-1'>{i}</li>
                )
            })}
            </ul>
    
        </div>
        </div>
    
    
        <div className="hidden lg:block"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="40" viewBox="0 0 52 40" fill="none">
        <rect width="26.5735" height="26.5735" transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.7908 1)" fill="#BC9A8F"/>
        <rect y="2.12132" width="17.9182" height="17.9182" transform="matrix(-0.707107 0.707107 0.707107 0.707107 33.7086 4.96995)" fill="#F4F0EE" stroke="#BC9A8F" stroke-width="3"/>
        </svg></div>
        {/* 세번째 */}
    
        <div className='rounded-xl bg-white shadow-xl p-4 lg:p-5'>
        <div className='rounded-lg bg-c2 text-center text-white font-bold lg:text-1.1vw p-4 pb-14 -z-10'>{researchlist[2].title}</div>
        <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-3 -mt-11 z-10 lg:text-1vw'>
            <ul className='text-slate-800'>
            { researchlist[2].list.map((i)=>{
                return(
                <li className='rounded-full bg-gray-100 p-2 pl-6 pr-6 mb-1'>{i}</li>
                )
            })}
            </ul>
        </div>
        </div>
    
    
    
        </div>
    ) 
    
}

// 두 번째 컴포넌트
export function SectionService02ListMobile(props) {
    return (
        <div className={`flex flex-col justify-center items-center gap-4 w-10/12 ${props.className}`}>
        
        <div className='rounded-xl bg-white shadow-xl w-full'>
            <div className='rounded-lg bg-c3 text-center text-white font-bold p-4 pb-14 -z-10'>{researchlist[1].title}</div>
            <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-3 -mt-12 z-10'>
                <ul className='text-slate-800'>
                { researchlist[1].list.map((i)=>{
                    return(
                    <li className='rounded-full bg-gray-100 p-2 mb-2'>{i}</li>
                    )
                })}
                </ul>
        
            </div>
        </div>
        
        <p><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 40 52" fill="none">
  <rect width="26.5735" height="26.5735" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1 31.209)" fill="#BC9A8F"/>
  <rect x="2.12132" y="1.78814e-07" width="17.9182" height="17.9182" transform="matrix(0.707107 0.707107 0.707107 -0.707107 4.96995 15.291)" fill="#F4F0EE" stroke="#BC9A8F" stroke-width="3"/>
</svg></p>

        <div className='rounded-xl bg-white shadow-xl w-full'>
            <div className='rounded-lg bg-c2 text-center text-white font-bold p-4 pb-14 -z-10'>{researchlist[0].title}</div>
            <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-3 -mt-12 z-10'>
                <ul className='text-slate-800'>
                { researchlist[1].list.map((i)=>{
                    return(
                    <li className='rounded-full bg-gray-100 p-2 mb-2'>{i}</li>
                    )
                })}
                </ul>
        
            </div>
        </div>
            
        <p><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 40 52" fill="none">
  <rect width="26.5735" height="26.5735" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1 31.209)" fill="#BC9A8F"/>
  <rect x="2.12132" y="1.78814e-07" width="17.9182" height="17.9182" transform="matrix(0.707107 0.707107 0.707107 -0.707107 4.96995 15.291)" fill="#F4F0EE" stroke="#BC9A8F" stroke-width="3"/>
</svg></p>

        <div className='rounded-xl bg-white shadow-xl w-full'>
            <div className='rounded-lg bg-c2 text-center text-white font-bold p-4 pb-14 -z-10'>{researchlist[2].title}</div>
            <div className='rounded-lg bg-gray-50 text-center text-white font-bold p-3 -mt-12 z-10'>
                <ul className='text-slate-800'>
                { researchlist[1].list.map((i)=>{
                    return(
                    <li className='rounded-full bg-gray-100 p-2 mb-2'>{i}</li>
                    )
                })}
                </ul>
        
            </div>
        </div>

            
        



        </div>
        
    
 

    
       
    
    
    


    )
}


