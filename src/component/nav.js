import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      if (window.scrollY >= 200) {
        setNavClass(prevClass => {
          if (!prevClass.includes('navactive')) {
            return `${prevClass} navactive`;
          }
          return prevClass;
        });
        setLogoSrc('/images/logo_b.png');
        setNavText('flex gap-12');
      } else {
        setNavClass(prevClass => prevClass.replace('navactive', '').trim());
        setLogoSrc('/images/logo_w.png');
        setNavText('flex gap-12 text-white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 빈 배열로 설정하여 컴포넌트 마운트 시 한 번만 실행

  return (
    <header className={navClass}>
      <div className="flex justify-between items-center">
        <h1><Link to='/'><img src={process.env.PUBLIC_URL + logoSrc} alt="quicksurvey" /></Link></h1>
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
  const location = useLocation();

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const container = useRef()

  const togglemenue = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  useEffect(() => {
    if (isVisible) {
      gsap.to(container.current, {
        y: 0,
        autoAlpha:1,
        duration: 0.5,
        ease: 'power1.out',
      });
    } else {
      gsap.to(container.current, {
        y: -50,
        autoAlpha:1,
        duration: 0.5,
        ease: 'power1.in',
      });
    }
  }, [isVisible]);

  return (
    <header className='fixed bg-white z-20 h-auto w-full'>
        <div className='flex items-center justify-between p-2 z-10'>
          <h1><Link to='/'><img src={process.env.PUBLIC_URL + '/images/logo_b.png'} alt="quicksurvey" className='h-8' /></Link></h1>
          <p className='pr-4' onClick={togglemenue}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="12" fill="white"/>
            <rect x="6" y="6" width="12" height="2" rx="1" fill="#222222"/>
            <rect x="6" y="11" width="12" height="2" rx="1" fill="#222222"/>
            <rect x="6" y="16" width="12" height="2" rx="1" fill="#222222"/>
          </svg></p>
        </div>

        <div ref={container} className=''>
          <ul className={`flex flex-col left-0 text-base p-0 menu-list ${isVisible ? 'visible' : 'hidden'}`}>
          {menulist.map((item, index) => (
            <li key={index} className='border-b border-slate-200 p-2 pl-4 pr-4 t1'>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
       </div>


        
    </header>
  );
}

export { Navigator, NavigatorMobile };
