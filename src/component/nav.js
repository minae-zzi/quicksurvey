import React, { useState, useEffect } from 'react';

function Navigator() {
  const [navClass, setNavClass] = useState('nav');
  const [logoSrc, setLogoSrc] = useState('/images/logo_w.png');
  const [navText, setNavText] = useState('flex gap-12 text-white')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1200 && !navClass.includes('navactive')) {
        setNavClass(prevClass => `${prevClass} navactive`);
        setLogoSrc('/images/logo_b.png');
        setNavText('flex gap-12')
      } else if (window.scrollY < 1200) {
        setNavClass(prevClass => prevClass.replace('navactive', ''));
        setLogoSrc('/images/logo_w.png');
        setNavText('flex gap-12 text-white')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navClass]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && !navClass.includes('navmobile')) {
        setNavClass(prevClass => `${prevClass} navmobile`);
      } else if (window.innerWidth > 768) {
        setNavClass(prevClass => prevClass.replace('navmobile', ''));
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navClass]);

  return (
    <header className={navClass}>
      <div className="flex justify-between items-center">
        <h1><img src={process.env.PUBLIC_URL + logoSrc} alt="quicksurvey" /></h1>
        <ul className={navText}>
          <li>서비스소개</li>
          <li>패널소개</li>
          <li>조사문의</li>
        </ul>
      </div>
    </header>
  );
}

export default Navigator;
