
import Servicedep from "./servicedep";



export default function SectionQna() {



    return (

        <div className="relative flex flex-col lg:flex-row justify-center lg:gap-14 lg:items-center lg:min-h-screen w-full sectionQna p-4 pt-14 pb-14">
            <Servicedep dep="third" />
            <div className="block pb-4 lg:pb-0 t1 lg:w-4/12"><img src={process.env.PUBLIC_URL +"/images/qna_img.png"} alt=""/></div>
            <div className="font-bold text-center lg:text-left">
                <p className="text-5xl pb-4 font-extrabold lg:text-4vw lg:text-right lg:pb-8 t1">걱정하지 마세요!</p>
                <p className="text-3xl text-center font-bold lg:text-3vw leading-tight lg:text-right brnone t2"><span className="text-c3">이런 고민</span>은<br /> 한국리서치<br /> <span className="text-c3">Quick Survey</span>에서 <br />
                    해결 가능합니다</p>
            </div>
        </div>
    );
}
