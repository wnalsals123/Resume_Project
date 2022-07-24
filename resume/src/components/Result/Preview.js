import './Preview.css';

const spanStyle = {
  display: "inline-block",
  width: "90px",
  color: "gray",
  marginRight: "10px",
  borderRight: "2px solid #E9967A",
  fontSize: "18px"
}
const preSpanStyle = {
  display: "block",
  color: "gray",
  fontSize: "18px",
  paddingBottom: "15px"
}

const ResumeTitleTab = (data) => {
  return (
    <div>
      <h1>{data[0].value}</h1>
    </div>
  )
}
const BasicInfoTab = (data) => {
  return (
    <div className="previewBox">
      <h2>기본정보</h2>
      <div className="previewBaiscInfoWrap">
        <div className="previewBaiscInfoImg"></div>
        <div className="previewBaiscInfo">
          <div className="previewBaiscInfoFlex">
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>이름</span><span>{data[1].value}</span></div>
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>영문</span><span><span>{data[2].value}</span></span></div>
          </div>
          <div className="previewBaiscInfoFlex">
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>성별</span><span>{data[3].value}</span></div>
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>생년월일</span><span>{data[4].value}</span></div>
          </div>
          <div className="previewBaiscInfoFlex">
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>연락처</span><span>{data[5].value}</span></div>
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>이메일</span><span>{data[6].value}</span></div>
          </div>
          <div className="previewBaiscInfoFlex">
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>주소</span><span>{data[7].value}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const EducationTab = (data) => {
  return (
    <div className="previewBox">
      <h2>학력</h2>
      <div className="previewEducationWrap">
        <div className="previewEducationTitle">대졸(4년)</div>
        <div className="previewEducation">
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>학교명</span><span>{data[4].value}</span></div>
            <div className="previewEducationFlexItem"><span style={spanStyle}>전공명</span><span>{data[7].value}</span></div>
          </div>
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>입학년월</span><span>{data[5].value}</span></div>
            <div className="previewEducationFlexItem"><span style={spanStyle}>졸업년월</span><span>{data[6].value}</span></div>
          </div>
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>학점</span><span>{data[8].value + " / " + data[9].value}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const CareerTab = (data) => {
  return (
    <div className="previewBox">
      <h2>경력</h2>
      <div className="previewCareerWrap">
        <div className="previewCareerTitle">경력(18개월)</div>
        <div className="previewCareer">
          <div className="previewCareerFlex">
            <div className="previewCareerFlexItem"><span style={spanStyle}>회사명</span><span>{data[0].value}</span></div>
            <div className="previewCareerFlexItem"><span style={spanStyle}>직무</span><span>{data[4].value}</span></div>
          </div>
          <div className="previewCareerFlex">
            <div className="previewCareerFlexItem"><span style={spanStyle}>입사년월</span><span>{data[1].value}</span></div>
            <div className="previewCareerFlexItem"><span style={spanStyle}>퇴사년월</span><span>{data[2].value}</span></div>
          </div>
          <div className="previewCareerFlex">
            <div className="previewCareerFlexItem"><span style={spanStyle}>직급</span><span>{data[3].value}</span></div>
            <div className="previewCareerFlexItem"><span style={spanStyle}>연봉</span><span>{data[5].value}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const CertificateTab = (data) => {
  return (
    <div className="previewBox">
      <h2>자격증</h2>
      <div className="previewCertificateWrap">
        <div className="previewCertificateTitle">{data[0].value}</div>
        <div className="previewCertificate">
          <div className="previewCertificateFlex">
            <div className="previewCertificateFlexItem"><span style={spanStyle}>발행처</span><span>{data[1].value}</span></div>
          </div>
          <div className="previewCertificateFlex">
            <div className="previewCertificateFlexItem"><span style={spanStyle}>취득년월</span><span>{data[2].value}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const LanguageStudyTab = (data) => {
  return (
    <div className="previewBox">
      <h2>어학</h2>
      <div className="previewLanguageWrap">
        <div className="previewLanguageTitle">{data[0].value}</div>
        <div className="previewLanguage">
          <div className="previewLanguageFlex">
            <div className="previewLanguageFlexItem"><span style={spanStyle}>급수/점수</span><span>{data[1].value}</span></div>
          </div>
          <div className="previewLanguageFlex">
            <div className="previewLanguageFlexItem"><span style={spanStyle}>취득년월</span><span>{data[2].value}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const InternshipTab = () => {
  return (
    <div className="previewBox">
      <h2>인턴·대외활동</h2>
      <div className="previewInternWrap">
        <div className="previewInternTitle">인턴</div>
        <div className="previewIntern">
          <div className="previewInternFlex" style={{ paddingBottom: "5px" }}>
            <div className="previewInternFlexItem"><span style={spanStyle}>소속단체명</span><span style={{ lineHeight: "150%" }}>머시기협회</span></div>
            <div className="previewInternFlexItem"><span style={spanStyle}>활동기간</span><span style={{ lineHeight: "150%" }}>2002.03 ~ 2002.03</span></div>
          </div>
          <div className="previewInternFlex" style={{ paddingTop: "5px" }}>
            <div className="previewInternFlexItem"><span style={spanStyle}>활동내용</span><span style={{ lineHeight: "150%" }}>탐관오리 숙청</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const EmploymentPreTab = () => {
  return (
    <div className="previewBox">
      <h2>병역·취업우대</h2>
      <div className="previewPreWrap">
        <div className="previewPre">
          <div className="previewPreFlex">
            <div className="previewPreFlexItem"><span style={preSpanStyle}>보훈대상</span><span>-</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>취업보호 대상</span><span>-</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>고용지원금 대상</span><span>-</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>장애</span><span>-</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>병역</span><span>군필</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const IntroductionTab = () => {
  return (
    <div className="previewBox">
      <h2>자기소개서</h2>
      <div className="previewIntroWrap">
        <div className="previewIntro">
          안녕하세요!
        </div>
      </div>
    </div>
  )
}
const PortfolioTab = () => {
  return (
    <div className="previewBox">
      <h2>포트폴리오</h2>
      <div className="previewPortfolioWrap">
        <div className="previewPortfolio">
          <div><span>사이트 주소: </span><span>https://mypage.com</span></div>
          <div><span>첨부파일: </span><span>파일1</span></div>
        </div>
      </div>
    </div>
  )
}

const Preview = () => {
  const resumeLists = JSON.parse(localStorage.getItem("resumeLists"))
  const basicValue = JSON.parse(localStorage.getItem("baiscValue"))
  const educationValue = JSON.parse(localStorage.getItem("educationValue"))
  const careerValue = JSON.parse(localStorage.getItem("careerValue"))
  const certificateValue = JSON.parse(localStorage.getItem("certificateValue"))
  const languageStudyValue = JSON.parse(localStorage.getItem("languageStudyValue"))

  return (
    <div className="previewPage">
      {ResumeTitleTab(basicValue)}
      {BasicInfoTab(basicValue)}
      {resumeLists !== null && resumeLists[0].active && EducationTab(educationValue)}
      {resumeLists !== null && resumeLists[1].active && CareerTab(careerValue)}
      {resumeLists !== null && resumeLists[2].active && CertificateTab(certificateValue)}
      {resumeLists !== null && resumeLists[3].active && LanguageStudyTab(languageStudyValue)}
      {resumeLists !== null && resumeLists[4].active && InternshipTab()}
      {resumeLists !== null && resumeLists[5].active && EmploymentPreTab()}
      {resumeLists !== null && resumeLists[6].active && IntroductionTab()}
      {resumeLists !== null && resumeLists[7].active && PortfolioTab()}
    </div>
  )
}

export default Preview;