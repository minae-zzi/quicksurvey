import animationData from "./aboutimg.json";
import Lottie from "lottie-react";

export default function SectionAbout(props) {
  const whysurvey = [
    {
      id: "1",
      title: "국가 승인 통계 조사에\n활용되는 대표성 있는 패널",
    },
    {
      id: "2",
      title: "프로젝트 별\n전담 연구원 배치",
    },
    {
      id: "3",
      title: "신뢰할 수\n있는 데이터",
    },
    {
      id: "4",
      title: "10년 이상 축적된\n다양한 노하우",
    },
  ];
  return (
    <div className="lg:min-h-screen relative w-full flex justify-center items-center p-4">
      <div className="relative text-center w-full">
        <div className="relative text-center about-section justify-center flex">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:items-start relative w-full lg:w-9/12 lg:pt-6">
            <div className="lg:pr-[5%] w-10/12 lg:w-4/12">
              <Lottie className="" animationData={animationData} />
            </div>

            <div className="lg:absolute lg:left-[18%] lg:w-auto w-full left-0 z-10 ">
              <div className="lg:bg-[#263238] lg:text-white font-extrabold text-base lg:text-1vw lg:p-6 rounded-lg">
                필요한 데이터를 빠르고 <br />
                합리적인 가격에 수집하고 싶다면?
              </div>
              <p className="absolute left-[75%] -bottom-[19px] hidden lg:block">
                <img
                  src={process.env.PUBLIC_URL + "/images/bubble1.png"}
                  alt=""
                />
              </p>
            </div>

            <div className="lg:absolute z-10 right-[22%] -top-[15px]">
              <div className="lg:bg-[#CA2C34] lg:text-white font-extrabold pt-6 pb-6 text-base lg:text-1vw lg:p-6 rounded-lg">
                지인들에게 조사 해서
                <br />
                대표성을 확보하기 어렵다면?
              </div>
              <p className="absolute left-[20%] -bottom-[17px] hidden lg:block">
                <img
                  src={process.env.PUBLIC_URL + "/images/bubble2.png"}
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>

        <div className="inline-block t1">
          <p className="inline-block text-3xl lg:text-3.5vw font-extrabold">
            한국리서치에 의뢰하세요
          </p>
          <p
            style={{
              background: "#F8F0E7",
              height: "15px",
              width: "100%",
              margin: "-10px 0 0 0",
            }}
          ></p>
        </div>
        <p className="flex justify-center p-2 lg:pt-6 lg:pb-2 t3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="39"
            viewBox="0 0 12 39"
            fill="none"
          >
            <path
              d="M6 38.7735L11.7735 33L6 27.2265L0.226499 33L6 38.7735ZM5 4.37114e-08L5 33L7 33L7 -4.37114e-08L5 4.37114e-08Z"
              fill="black"
            />
          </svg>
        </p>
        <p className="text-2xl lg:text-3vw font-bold t2">
          왜? 한국리서치 <span className="text-c1">Quick Survey</span> 인가요?
        </p>

        <div className="grid grid-cols-1 lg:flex lg:justify-center lg:gap-8 lg:mt-8 mt-4 mb-4">
          {whysurvey.map((i, o) => {
            return (
              <div
                className={`whysurvey${o} flex items-center justify-start p-2 pl-4 pr-4 m-1 bg-zinc-50 rounded-full lg:rounded-none lg:bg-transparent`}
              >
                <span className="font-bold text-3xl lg:text-3.5vw pr-4 text-gray-200">
                  {i.id}
                </span>
                <p className="text-base lg:text-[1.3vw] lg:leading-[1.6vw] font-bold text-left lg:whitespace-pre-line">
                  {i.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
