import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const menulist_d = [
  { title: "서비스소개", link: "./" },
  { title: "패널소개", link: "./pannel" },
];

const menulist = [
  { title: "서비스소개", link: "./" },
  { title: "패널소개", link: "./pannel" },
  { title: "조사문의", link: "./inqury" },
];

function useNavScroll(setNavClass, setLogoSrc, setNavText) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setNavClass((prevClass) =>
          !prevClass.includes("navactive")
            ? `${prevClass} navactive`
            : prevClass
        );
        setLogoSrc("/images/logo_b.png");
        setNavText("flex gap-12 font-bold text-18pt items-center ");
      } else {
        setNavClass((prevClass) => prevClass.replace("navactive", "").trim());
        setLogoSrc("/images/logo_w.png");
        setNavText("flex gap-12 text-white font-bold text-18pt items-center ");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setNavClass, setLogoSrc, setNavText]);
}

function Navigator() {
  const [navClass, setNavClass] = useState("nav");
  const [logoSrc, setLogoSrc] = useState("/images/logo_w.png");
  const [navText, setNavText] = useState(
    "flex gap-12 text-white font-bold text-18pt items-center"
  );
  const navigate = useNavigate();

  useNavScroll(setNavClass, setLogoSrc, setNavText);

  return (
    <header className={navClass}>
      <div className="flex justify-between items-center">
        <h1>
          <Link to="/">
            <img src={process.env.PUBLIC_URL + logoSrc} alt="quicksurvey" />
          </Link>
        </h1>
        <ul className={navText}>
          {menulist_d.map((i) => (
            <li key={i.title} className="">
              <Link to={i.link}>{i.title}</Link>
            </li>
          ))}
          <li>
            <button
              className="bg-c1 text-white font-extrabold rounded-full p-4 pt-2 pb-2 text-sm mr-2"
              onClick={() => navigate("/inqury")}
            >
              조사문의
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

function NavigatorMobile() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const container = useRef();

  gsap.registerPlugin(ScrollTrigger);

  const toggleMenu = () => setIsVisible(!isVisible);

  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  useEffect(() => {
    gsap.to(container.current, {
      y: isVisible ? 0 : -50,
      autoAlpha: 1,
      duration: 0.5,
      ease: isVisible ? "power1.out" : "power1.in",
    });
  }, [isVisible]);

  return (
    <header className="fixed bg-white z-20 h-auto w-full">
      <div className="flex items-center justify-between p-2 z-10">
        <h1>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/logo_b.png"}
              alt="quicksurvey"
              className="h-8"
            />
          </Link>
        </h1>
        <div className="flex items-center pr-2" onClick={toggleMenu}>
          <button
            className="bg-c1 text-white font-extrabold rounded-full p-4 pt-2 pb-2 text-sm mr-2"
            onClick={() => navigate("/inqury")}
          >
            조사문의
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" rx="12" fill="white" />
            <rect x="6" y="6" width="12" height="2" rx="1" fill="#222222" />
            <rect x="6" y="11" width="12" height="2" rx="1" fill="#222222" />
            <rect x="6" y="16" width="12" height="2" rx="1" fill="#222222" />
          </svg>
        </div>
      </div>
      <div
        ref={container}
        className={`flex flex-col left-0 text-base p-0 menu-list ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        <ul>
          {menulist.map((item, index) => (
            <li
              key={index}
              className="border-b border-slate-200 p-2 pl-4 pr-4 t1"
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export { Navigator, NavigatorMobile };
