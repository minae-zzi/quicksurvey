
import React, { useEffect } from 'react';
import Visual from '../component/visual';
import SectionAbout from '../component/section_about';
import SectionService01 from '../component/Section_Service01';
import SectionService02 from '../component/Section_Service02';
import SectionService03 from '../component/Section_Service03';
import SectionService04 from '../component/Section_Service04';
import SectionStep from '../component/section_step';
import SectionQna from '../component/Section_qna';
import SectionBottom from '../component/Section_bottom';
import Footer from '../component/footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const HomePage = () => {
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
      <Visual />
      <SectionAbout />
      <SectionService01 />
      <SectionService02 />
      <SectionService03 />
      <SectionService04 />
      <SectionStep />
      <SectionQna />
      <SectionBottom />
      <Footer />
    </div>
  );
};

export default HomePage;
