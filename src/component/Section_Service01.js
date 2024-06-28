import { Link } from "react-router-dom";

export default function SectionService01(props) {
  return (
    <div
      className="lg:min-h-screen service-section relative w-full"
      style={{ background: "rgba(249, 238, 234, 0.40)" }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between sectionbox">
        <div className="flex flex-col w-full p-10 justify-center items-center text-center lg:text-left lg:items-start lg:p-0 lg:pl-[10%] lg:w-2/4 sectionbox2">
          <div className="text-4xl pb-6 lg:text-3.5vw font-extrabold lg:pb-[5%] w-full">
            국가 승인 통계 조사에
            <br />
            활용되는 <span className="text-c2">대표성 있는 패널</span>
          </div>
          <div className="text-base text-gray-800 pb-6 lg:pb-[12%] lg:text-1vw brnone t2 text-container">
            한국리서치는 92만명의 자체 패널을 보유하고 있습니다. <br />
            지역, 성, 연령 분포를 고려하여 모집하여 통계적 대표성을 확보했으며,{" "}
            <br />
            국가 승인 통계 조사 표본 설계에도 활용되어 신뢰성이 검증되었습니다.{" "}
            <br />
            주기적인 패널 정보 업데이트를 통해 적격응답자를 빠르게 찾을 수
            있습니다.
          </div>
          <button className="t3 rounded-full bg-c2 text-white text-lg w-3/4 lg:w-2/5 lg:text-1.2vw p-3">
            <Link to="/pannel">패널소개 더보기</Link>
          </button>
        </div>

        <div className="w-full h-96 lg:h-screen lg:w-2/4 service-img lg:rounded-tl-[400px] serviceimg"></div>
      </div>
    </div>
  );
}
