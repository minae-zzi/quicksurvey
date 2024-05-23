
import React, { useEffect } from 'react';

import Footer from '../component/footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const Pannel = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add(time => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <div className="break-keep">
      <div className='svisual_01 text-center text-6xl h-96 flex justify-center items-center text-white font-bold'>패널소개</div>

      <div className=''>
        내용이 들어감
      </div>
      <Footer />
    </div>
  );
};

export default Pannel;
