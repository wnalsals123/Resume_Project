import { UserContext } from "components/Data/UserData"
import { useContext } from "react"

const TopBanner = () => {
  const { resumeLists, setResumeLists } = useContext(UserContext)

  // // 이력서 항목 이벤트
  const LibtuClik = (key) => {
    if(resumeLists[key].active){
      setResumeLists(resumeLists.map((item) => (
        item.id === key ? {...item, class: "ResumeLi", active: !item.active} : item
      )))
    } else {
      setResumeLists(resumeLists.map((item) => (
        item.id === key ? {...item, class: "ResumeLi Clik", active: !item.active} : item
      )))
    }
    const element = document.getElementById(resumeLists[key].name)
    element.className = element.className === "basicInfo" ? "basicInfo 숨김" : "basicInfo"
  }

  const ResumeListCreate = resumeLists.map((item) => (
    <li className={item.class} onClick={() => LibtuClik(item.id)} key={item.id}>{item.name}</li>
  ))
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
          {ResumeListCreate}
        </ul>

      </div>
    </div>
  )
}

export default TopBanner;