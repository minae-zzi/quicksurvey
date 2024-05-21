
import Servicedep from "./servicedep";


export default function SectionQna() {
    

    return (
        <div className="relative flex justify-center gap-24 items-center h-screen w-full sectionQna">
            <Servicedep />
            <div className="block"><img src="/images/qna_img.png" alt=""/></div>
            <div className="font-bold">
                <p className="text-7xl pb-8">걱정하지 마세요!</p>
                <p className="text-6xl leading-tight text-right"><span className="text-c2">이런 고민</span>은<br />
                    한국리서치<br />
                    <span className="text-c2">Quick Survey</span>에서<br />
                    해결 가능합니다</p>
            </div>
        </div>
    );
}
