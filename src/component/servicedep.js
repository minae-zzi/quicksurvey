// 자식 컴포넌트 (Servicedep.js)
import React from 'react';

export default function Servicedep({ dep }) {

  const bletImages = [
    dep === 'first' ? 'blet_ov.png' : 'blet_none.png',
    dep === 'second' ? 'blet_ov.png' : 'blet_none.png',
    dep === 'third' ? 'blet_ov.png' : 'blet_none.png',
    dep === 'fourth' ? 'blet_ov.png' : 'blet_none.png'
  ];

  return (
    <div className='absolute left-5 top-1/2 hidden lg:block text-1vw'>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center">
          <span className="pr-2"><img src={`${process.env.PUBLIC_URL}/images/${bletImages[0]}`} alt="" /></span> 서비스 특장점
        </li>
        <li className="flex items-center">
          <span className="pr-2"><img src={`${process.env.PUBLIC_URL}/images/${bletImages[1]}`} alt="" /></span> 진행절차
        </li>
        <li className="flex items-center">
          <span className="pr-2"><img src={`${process.env.PUBLIC_URL}/images/${bletImages[2]}`} alt="" /></span> 진행방법
        </li>
        <li className="flex items-center">
          <span className="pr-2"><img src={`${process.env.PUBLIC_URL}/images/${bletImages[3]}`} alt="" /></span> 주요 고객사
        </li>
      </ul>
    </div>
  );
}
