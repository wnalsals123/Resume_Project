import { useEffect } from "react"

/* 헤더 부분 */
const TopBanner = () => {
  /* 이력서 항목 상태 불러오기 */
  useEffect(()=>{
    const loadData = JSON.parse(localStorage.getItem("resumeLists"))
    if(loadData !== null){
      if(loadData.학력) {
        document.getElementById("학력").className = 'basicInfo'
        document.getElementById("listBtn0").className = 'ResumeLi Clik'
      }
      if(loadData.경력) {
        document.getElementById("경력").className = 'basicInfo'
        document.getElementById("listBtn1").className = 'ResumeLi Clik'
      }
      if(loadData.자격증) {
        document.getElementById("자격증").className = 'basicInfo'
        document.getElementById("listBtn2").className = 'ResumeLi Clik'
      }
      if(loadData.어학) {
        document.getElementById("어학").className = 'basicInfo'
        document.getElementById("listBtn3").className = 'ResumeLi Clik'
      }
      if(loadData.인턴) {
        document.getElementById("인턴·대외활동").className = 'basicInfo'
        document.getElementById("listBtn4").className = 'ResumeLi Clik'
      }
      if(loadData.병역) {
        document.getElementById("병역·취업우대").className = 'basicInfo'
        document.getElementById("listBtn5").className = 'ResumeLi Clik'
      }
      if(loadData.자기소개서) {
        document.getElementById("자기소개서").className = 'basicInfo'
        document.getElementById("listBtn6").className = 'ResumeLi Clik'
      }
    }
  }, [])

  // 이력서 항목 이벤트
  const resumeLists = [
    { id: 0, class: "ResumeLi", name: "학력" },
    { id: 1, class: "ResumeLi", name: "경력" },
    { id: 2, class: "ResumeLi", name: "자격증" },
    { id: 3, class: "ResumeLi", name: "어학" },
    { id: 4, class: "ResumeLi", name: "인턴·대외활동" },
    { id: 5, class: "ResumeLi", name: "병역·취업우대" },
    { id: 6, class: "ResumeLi", name: "자기소개서" },
  ]
  
  // 이력서 항목 버튼 클릭 리스너
  const LibtuClik = (key) => {
    let element = document.getElementById("listBtn" + key)
    element.className = element.className === "ResumeLi" ? "ResumeLi Clik" : "ResumeLi"
    element = document.getElementById(resumeLists[key].name)
    element.className = element.className === "basicInfo" ? "basicInfo 숨김" : "basicInfo"
  }

  // 이력서 항목 리스트 렌더링
  const ResumeListCreate = resumeLists.map((item) => (
    <li className={item.class} onClick={() => LibtuClik(item.id)} key={item.id} id={"listBtn" + item.id}>{item.name}</li>
  ))

  // 페이지 새로고침
  const refresh = () => {
    window.location.replace("/")
  }

  return (
    <div className='ResumeTopHeader' style={{ zIndex: 110 }}>
      <div className="ResumeTop">
        {/* 사이트 배너 */}
        <div className="siteBanner">
          <b onClick={refresh} style={{ paddingRight: "10px", borderRight: "2px solid black" }}>간단 이력서</b>
          <a className="ToGitLink"
            href="https://github.com/wnalsals123/Resume_Project"
            target="_blank"
            rel="noopener noreferrer">
            <b style={{ paddingLeft: "10px" }}>Github</b>
          </a>
        </div>

        {/* 이력서 리스트 */}
        <ul className="ResumeList">
          {ResumeListCreate}
        </ul>

      </div>
    </div>
  )
}

export default TopBanner;