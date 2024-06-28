import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/footer';

const Complete = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="break-keep">
      <div className='svisual_02 flex justify-center text-white font-bold h-40 text-2xl pt-20 lg:pt-40 lg:h-96 lg:text-6xl'>문의 완료</div>
      <div className='flex flex-col items-center justify-center lg:p-20 p-8 pt-10 pb-10'>
        <div className='lg:w-8/12 text-center'>
          <h1 className='font-bold text-4xl lg:text-3.5vw text-center'>문의가 성공적으로 제출되었습니다!</h1>
          <p className='lg:text-1vw text-zinc-500 lg:pt-6 lg:pb-8 text-center leading-tight pt-4 pb-4'>
            감사합니다. 곧 연락드리겠습니다.
          </p>
          <div className='rounded-xl bg-zinc-50 p-8 mb-8 text-left'>
            <p className='lg:text-1vw text-zinc-500 text-center'>
              추가 문의 사항이 있으시면 언제든지 연락 주십시오.
            </p>
          </div>
          <button
            onClick={goToHome}
            className='bg-c1 p-4 pl-20 pr-20 font-bold text-white text-xl rounded-full mt-6'
          >
            홈으로 가기
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Complete;
