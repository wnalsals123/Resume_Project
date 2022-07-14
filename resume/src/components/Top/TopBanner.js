const TopBanner = () => {
    // 이력서 항목 관리
    const LibtuClik = (e) => {
        let element = document.getElementById(e.target.innerText)
        e.target.className = e.target.className === "ResumeLi" ? "ResumeLi Clik" : "ResumeLi"
        element.className = element.className === "basicInfo" ? "basicInfo 숨김" : "basicInfo"
    }
    // 탑 배너
    return (
        <div className='ResumeTopHeader'>
            <div className="ResumeTop">
                {/* 사이트 배너 */}
                <div className="siteBanner">
                    <b style={{ paddingRight: "10px", borderRight: "2px solid black" }}>간단 이력서</b>
                    <a className="ToGitLink"
                        href="https://github.com/wnalsals123/Resume_Project"
                        target="_blank"
                        rel="noopener noreferrer">
                        <b style={{ paddingLeft: "10px" }}>Github</b>
                    </a>
                </div>

                {/* 이력서 리스트 */}
                <ul className="ResumeList">
                    <li className="ResumeLi" onClick={LibtuClik}>학력</li>
                    <li className="ResumeLi" onClick={LibtuClik}>경력</li>
                    <li className="ResumeLi" onClick={LibtuClik}>자격증</li>
                    <li className="ResumeLi" onClick={LibtuClik}>어학</li>
                    <li className="ResumeLi" onClick={LibtuClik}>인턴·대외활동</li>
                    <li className="ResumeLi" onClick={LibtuClik}>병역·취업우대</li>
                    <li className="ResumeLi" onClick={LibtuClik}>자기소개서</li>
                    <li className="ResumeLi" onClick={LibtuClik}>포트폴리오</li>
                </ul>

            </div>
        </div>
    )
}

export default TopBanner;