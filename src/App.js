import './App.css';
import Visual from './component/visual';
import Navigator from './component/nav'
import SectionStep from './component/section_step';
import SectionAbout from './component/section_about';
import SectionService01 from './component/Section_Service01';
import SectionService02 from './component/Section_Service02';
import SectionService03 from './component/Section_Service03';
import SectionService04 from './component/Section_Service04';
import SectionQna from './component/Section_qna';
import SectionBottom from './component/Section_bottom';
import Footer from './component/footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';





function App() {

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

    // const [activeIndex, setActiveIndex] = useState(0);
    return (



    <div className='break-keep'>
      <Navigator />
      
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
}

export default App;

