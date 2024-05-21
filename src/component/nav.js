
export default function Navigator() {


    return (
        <header className="absolute top-0 z-20 w-full">
            <div className="flex justify-between items-center p-8">
                <h1><img src={`../images/logo_w.png`} alt="quicksurvey" /></h1>
                <ul className="flex gap-5">
                    <li>서비스소개</li>
                    <li>패널소개</li>
                    <li>조사문의</li>
                </ul>
            </div>
        </header>
    );

}

