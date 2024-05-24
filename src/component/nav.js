import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import gsap from 'gsap';
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";

const menulist = [
  { title:'서비스소개', link:'./'},
  { title:'패널소개', link:'./pannel'},
  { title:'조사문의', link:'./inqury'}
  ]

function Navigator() {
  const [navClass, setNavClass] = useState('nav');
  const [logoSrc, setLogoSrc] = useState('/images/logo_w.png');
  const [navText, setNavText] = useState('flex gap-12 text-white');

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !navClass.includes('navactive')) {
        setNavClass(prevClass => `${prevClass} navactive`);
        setLogoSrc('/images/logo_b.png');
        setNavText('flex gap-12');
      } else if (window.scrollY < 200) {
        setNavClass(prevClass => prevClass.replace('navactive', ''));
        setLogoSrc('/images/logo_w.png');
        setNavText('flex gap-12 text-white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navClass]);


  return (
    <header className={navClass}>
      <div className="flex justify-between items-center">
        <h1><img src={process.env.PUBLIC_URL + logoSrc} alt="quicksurvey" /></h1>
        <ul className={navText}>
          {menulist.map((i)=>{
            return(
              <li><Link to={i.link}>{i.title}</Link></li>
            )
          })}
        </ul>
      </div>
    </header>
  );
}

function NavigatorMobile() {

  const [isVisible, setIsVisible] = useState(false);

  const togglemenue = () => {
    setIsVisible(!isVisible);
  };

  // const container = useRef()

  // useGSAP(()=>{
  //   gsap.from('.menu-list',{y:50, opacity:0, duration:1})


  // },{scope: container});

 


  return (
    <header className='fixed bg-white z-20 h-auto w-full p-2'>
        <div className='flex items-center justify-between pr-2'>
          <h1><img src={process.env.PUBLIC_URL + '/images/logo_b.png'} alt="quicksurvey" className='h-8' /></h1>
          <p onClick={togglemenue}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="12" fill="white"/>
            <rect x="6" y="6" width="12" height="2" rx="1" fill="#222222"/>
            <rect x="6" y="11" width="12" height="2" rx="1" fill="#222222"/>
            <rect x="6" y="16" width="12" height="2" rx="1" fill="#222222"/>
          </svg></p>
        </div>

        {isVisible && (
  <ul className='text-base p-0 menu-list'>
    {menulist.map((item, index) => (
      <li key={index} className='border-t border-slate-200 p-2'>
        <a href={item.link}>{item.title}</a>
      </li>
    ))}
  </ul>
)}


        
    </header>
  );
}

export { Navigator, NavigatorMobile };
