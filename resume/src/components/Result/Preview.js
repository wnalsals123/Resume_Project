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
const BasicInfoTab = (data, img) => {
  return (
    <div className="previewBox">
      <h2>기본정보</h2>
      <div className="previewBaiscInfoWrap">
        <div className="previewBaiscInfoImg"><img src={img} alt="user-img"></img></div>
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
const EducationTab = (data, checkData) => {
  let eduTitle
  for (var i = 0; i < checkData.slice(0, 4).length; i++) {
    if (checkData.slice(0, 4)[i].check) {
      eduTitle = checkData.slice(0, 4)[i].value;
      break;
    }
  }
  const EduTab1 = () => {
    const GedOn = () => {
      return (
        <div className="previewEducation">
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>검정고시</span><span>{data[0].value}</span></div>
          </div>
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>합격년월</span><span>{data[6].value}</span></div>
          </div>
        </div>
      )
    }
    const GedOff = () => {
      return (
        <div className="previewEducation">
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>학교명</span><span>{data[0].value}</span></div>
          </div>
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>입학년월</span><span>{data[1].value}</span></div>
            <div className="previewEducationFlexItem"><span style={spanStyle}>졸업년월</span><span>{data[2].value}</span></div>
          </div>
        </div>
      )
    }
    return (
      <div className="previewBox">
        <h2>학력</h2>
        <div className="previewEducationWrap">
          <div className="previewEducationTitle">{eduTitle}</div>
          {checkData[4].check ? <GedOn/> : <GedOff/>}
        </div>
      </div>
    )
  }
  const EduTab2 = () => {
    return (
      <div className="previewBox">
        <h2>학력</h2>
        <div className="previewEducationWrap">
          <div className="previewEducationTitle">{eduTitle}</div>
          <div className="previewEducation">
            <div className="previewEducationFlex">
              <div className="previewEducationFlexItem"><span style={spanStyle}>학교명</span><span>{data[0].value}</span></div>
              <div className="previewEducationFlexItem"><span style={spanStyle}>전공명</span><span>{data[3].value}</span></div>
            </div>
            <div className="previewEducationFlex">
              <div className="previewEducationFlexItem"><span style={spanStyle}>입학년월</span><span>{data[1].value}</span></div>
              <div className="previewEducationFlexItem"><span style={spanStyle}>졸업년월</span><span>{data[2].value}</span></div>
            </div>
            <div className="previewEducationFlex">
              <div className="previewEducationFlexItem"><span style={spanStyle}>학점</span><span>{data[4].value + " / " + data[5].value}</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const SelectEduTab = () => {
    switch (eduTitle) {
      case '고졸 미만': return <EduTab1 />
      case '고졸': return <EduTab1 />
      case '대졸(2,3년)': return <EduTab2 />
      case '대졸(4년)': return <EduTab2 />
      default: return <EduTab1 />
    }
  }
  return (
    <SelectEduTab />
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
const InternshipTab = (data) => {
  return (
    <div className="previewBox">
      <h2>인턴·대외활동</h2>
      <div className="previewInternWrap">
        <div className="previewInternTitle">{data[0].value}</div>
        <div className="previewIntern">
          <div className="previewInternFlex">
            <div className="previewInternFlexItem"><span style={spanStyle}>소속단체명</span><span>{data[1].value}</span></div>
            <div className="previewInternFlexItem"><span style={spanStyle}>활동기간</span><span>{data[2].value + " ~ " + data[3].value}</span></div>
          </div>
          <div className="previewInternFlex">
            <div className="previewInternFlexItem">
              <div className="previewContentFlex">
                <div className='previewContentFlexItem'><span>활동내용</span></div>
                <div className='previewContentFlexItem'><span style={{ lineHeight: "150%" }}>{data[4].value}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const EmploymentPreTab = (employmentPreValue) => {
  return (
    <div className="previewBox">
      <h2>병역·취업우대</h2>
      <div className="previewPreWrap">
        <div className="previewPre">
          <div className="previewPreFlex">
            <div className="previewPreFlexItem"><span style={preSpanStyle}>보훈대상</span><span>{employmentPreValue[0].check ? "해당" : "-"}</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>취업보호 대상</span><span>{employmentPreValue[1].check ? "해당" : "-"}</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>고용지원금 대상</span><span>{employmentPreValue[2].check ? "해당" : "-"}</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>장애</span><span>{employmentPreValue[3].check ? employmentPreValue[3].value : "-"}</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>병역</span><span>{employmentPreValue[4].check ? employmentPreValue[4].value : "-"}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const IntroductionTab = (data) => {

  return (
    <div className="previewBox">
      <h2>자기소개서</h2>
      <div className="previewIntroWrap">
        <div className="previewIntro">
          <pre>{data[0].value}</pre>
        </div>
      </div>
    </div>
  )
}

const Preview = () => {
  const resumeLists = JSON.parse(localStorage.getItem("resumeLists"))
  const basicValue = JSON.parse(localStorage.getItem("baiscValue"))
  const educationValue = JSON.parse(localStorage.getItem("educationValue"))
  const educationCheckValue = JSON.parse(localStorage.getItem("educationCheckValue"))
  const careerValue = JSON.parse(localStorage.getItem("careerValue"))
  const certificateValue = JSON.parse(localStorage.getItem("certificateValue"))
  const languageStudyValue = JSON.parse(localStorage.getItem("languageStudyValue"))
  const internshipValue = JSON.parse(localStorage.getItem("internshipValue"))
  const employmentPreValue = JSON.parse(localStorage.getItem("employmentPreValue"))
  const introductionValue = JSON.parse(localStorage.getItem("introductionValue"))
  const uesrImg = JSON.parse(localStorage.getItem("uesrImg"))

  return (
    <div className="previewPage">
      {ResumeTitleTab(basicValue)}
      {BasicInfoTab(basicValue, uesrImg)}
      {resumeLists !== null && resumeLists[0].active && EducationTab(educationValue, educationCheckValue)}
      {resumeLists !== null && resumeLists[1].active && CareerTab(careerValue)}
      {resumeLists !== null && resumeLists[2].active && CertificateTab(certificateValue)}
      {resumeLists !== null && resumeLists[3].active && LanguageStudyTab(languageStudyValue)}
      {resumeLists !== null && resumeLists[4].active && InternshipTab(internshipValue)}
      {resumeLists !== null && resumeLists[5].active && EmploymentPreTab(employmentPreValue)}
      {resumeLists !== null && resumeLists[6].active && IntroductionTab(introductionValue)}
    </div>
  )
}

export default Preview;