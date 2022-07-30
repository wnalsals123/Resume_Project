import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
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
      <h1>{data.이력서제목}</h1>
    </div>
  )
}
const BasicInfoTab = (data, img, marginValue) => {
  return (
    <div className="previewBox" style={{marginBottom: marginValue}}>
      <h2>기본정보</h2>
      <div className="previewBaiscInfoWrap">
        <div className="previewBaiscInfoImg"><img src={img} alt="user-img"></img></div>
        <div className="previewBaiscInfo">
          <div className="previewBaiscInfoFlex">
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>이름</span><span>{data.이름}</span></div>
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>영문</span><span><span>{data.영문}</span></span></div>
          </div>
          <div className="previewBaiscInfoFlex">
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>성별</span><span>{data.성별}</span></div>
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>생년월일</span><span>{data.생년월일}</span></div>
          </div>
          <div className="previewBaiscInfoFlex">
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>연락처</span><span>{data.연락처}</span></div>
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>이메일</span><span>{data.이메일}</span></div>
          </div>
          <div className="previewBaiscInfoFlex">
            <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>주소</span><span>{data.주소}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const EducationTab = (data, marginValue) => {
  const addEduTab = () => {
    if (data.plus !== []) return (
      data.plus.map((item) => (
        <div className="previewEducationWrap">
          <div className="previewEducationTitle">-</div>
          <div className="previewEducation">
            <div className="previewEducationFlex">
              <div className="previewEducationFlexItem"><span style={spanStyle}>학교명</span><span>{item.학교명}</span></div>
            </div>
            <div className="previewEducationFlex">
              <div className="previewEducationFlexItem"><span style={spanStyle}>입학년월</span><span>{item.입학년월}</span></div>
              <div className="previewEducationFlexItem"><span style={spanStyle}>졸업년월</span><span>{item.졸업년월}</span></div>
            </div>
          </div>
        </div>
      ))
    )
  }
  const EduTab1 = () => {
    const GedOn = () => {
      return (
        <div className="previewEducation">
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>검정고시</span><span>{data.학교명}</span></div>
          </div>
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>합격년월</span><span>{data.합격년월}</span></div>
          </div>
        </div>
      )
    }
    const GedOff = () => {
      return (
        <div className="previewEducation">
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>학교명</span><span>{data.학교명}</span></div>
          </div>
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>입학년월</span><span>{data.입학년월}</span></div>
            <div className="previewEducationFlexItem"><span style={spanStyle}>졸업년월</span><span>{data.졸업년월}</span></div>
          </div>
        </div>
      )
    }
    return (
      <div className="previewEducationWrap">
        <div className="previewEducationTitle">{data.학력유형}</div>
        {data.검정고시 ? <GedOn /> : <GedOff />}
      </div>
    )
  }
  const EduTab2 = () => {
    return (
      <div className="previewEducationWrap">
        <div className="previewEducationTitle">{data.학력유형}</div>
        <div className="previewEducation">
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>학교명</span><span>{data.학교명}</span></div>
            <div className="previewEducationFlexItem"><span style={spanStyle}>전공명</span><span>{data.전공명}</span></div>
          </div>
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>입학년월</span><span>{data.입학년월}</span></div>
            <div className="previewEducationFlexItem"><span style={spanStyle}>졸업년월</span><span>{data.졸업년월}</span></div>
          </div>
          <div className="previewEducationFlex">
            <div className="previewEducationFlexItem"><span style={spanStyle}>이수학점</span><span>{data.이수학점}</span></div>
            <div className="previewEducationFlexItem"><span style={spanStyle}>학점</span><span>{data.학점 + " / " + data.총점}</span></div>
          </div>
        </div>
      </div>
    )
  }
  const SelectEduTab = () => {
    switch (data.학력유형) {
      case '고졸 미만': return <EduTab1 />
      case '고졸': return <EduTab1 />
      case '대졸(2,3년)': return <EduTab2 />
      case '대졸(4년)': return <EduTab2 />
      default: return <EduTab1 />
    }
  }
  return (
    <div className="previewBox" style={{marginBottom: marginValue}}>
      <h2>학력</h2>
      {SelectEduTab()}
      {addEduTab()}
    </div>

  )
}
const CareerTab = (data, marginValue) => {
  const addCareerTab = () => {
    if (data.plus !== []) return (
      data.plus.map((item) => (
        <div className="previewCareerWrap">
          <div className="previewCareerTitle">경력</div>
          <div className="previewCareer">
            <div className="previewCareerFlex">
              <div className="previewCareerFlexItem"><span style={spanStyle}>회사명</span><span>{item.회사명}</span></div>
              <div className="previewCareerFlexItem"><span style={spanStyle}>직무</span><span>{item.직무}</span></div>
            </div>
            <div className="previewCareerFlex">
              <div className="previewCareerFlexItem"><span style={spanStyle}>입사년월</span><span>{item.입사년월}</span></div>
              <div className="previewCareerFlexItem"><span style={spanStyle}>퇴사년월</span><span>{item.재직중 ? "재직중" : item.퇴사년월}</span></div>
            </div>
            <div className="previewCareerFlex">
              <div className="previewCareerFlexItem"><span style={spanStyle}>직급</span><span>{item.직급}</span></div>
              <div className="previewCareerFlexItem"><span style={spanStyle}>연봉</span><span>{item.연봉}</span></div>
            </div>
          </div>
        </div>
      ))
    )
  }
  return (
    <div className="previewBox" style={{marginBottom: marginValue}}>
      <h2>경력</h2>
      <div className="previewCareerWrap">
        <div className="previewCareerTitle">경력</div>
        <div className="previewCareer">
          <div className="previewCareerFlex">
            <div className="previewCareerFlexItem"><span style={spanStyle}>회사명</span><span>{data.회사명}</span></div>
            <div className="previewCareerFlexItem"><span style={spanStyle}>직무</span><span>{data.직무}</span></div>
          </div>
          <div className="previewCareerFlex">
            <div className="previewCareerFlexItem"><span style={spanStyle}>입사년월</span><span>{data.입사년월}</span></div>
            <div className="previewCareerFlexItem"><span style={spanStyle}>퇴사년월</span><span>{data.재직중 ? "재직중" : data.퇴사년월}</span></div>
          </div>
          <div className="previewCareerFlex">
            <div className="previewCareerFlexItem"><span style={spanStyle}>직급</span><span>{data.직급}</span></div>
            <div className="previewCareerFlexItem"><span style={spanStyle}>연봉</span><span>{data.연봉}</span></div>
          </div>
        </div>
      </div>
      {addCareerTab()}
    </div>
  )
}
const CertificateTab = (data, marginValue) => {
  const addCertificateTab = () => {
    if (data.plus !== []) return (
      data.plus.map((item) => (
        <div className="previewCertificateWrap">
          <div className="previewCertificateTitle">{item.자격증명}</div>
          <div className="previewCertificate">
            <div className="previewCertificateFlex">
              <div className="previewCertificateFlexItem"><span style={spanStyle}>발행처</span><span>{item.발행처}</span></div>
            </div>
            <div className="previewCertificateFlex">
              <div className="previewCertificateFlexItem"><span style={spanStyle}>취득년월</span><span>{item.취득년월자격증}</span></div>
            </div>
          </div>
        </div>
      ))
    )
  }
  return (
    <div className="previewBox" style={{marginBottom: marginValue}}>
      <h2>자격증</h2>
      <div className="previewCertificateWrap">
        <div className="previewCertificateTitle">{data.자격증명}</div>
        <div className="previewCertificate">
          <div className="previewCertificateFlex">
            <div className="previewCertificateFlexItem"><span style={spanStyle}>발행처</span><span>{data.발행처}</span></div>
          </div>
          <div className="previewCertificateFlex">
            <div className="previewCertificateFlexItem"><span style={spanStyle}>취득년월</span><span>{data.취득년월자격증}</span></div>
          </div>
        </div>
      </div>
      {addCertificateTab()}
    </div>
  )
}
const LanguageStudyTab = (data, marginValue) => {
  const addLanguageStudyTab = () => {
    if (data.plus !== []) return (
      data.plus.map((item) => (
        <div className="previewLanguageWrap">
          <div className="previewLanguageTitle">{item.어학명}</div>
          <div className="previewLanguage">
            <div className="previewLanguageFlex">
              <div className="previewLanguageFlexItem"><span style={spanStyle}>급수/점수</span><span>{item.급수점수}</span></div>
            </div>
            <div className="previewLanguageFlex">
              <div className="previewLanguageFlexItem"><span style={spanStyle}>취득년월</span><span>{item.취득년월어학}</span></div>
            </div>
          </div>
        </div>
      ))
    )
  }
  return (
    <div className="previewBox" style={{marginBottom: marginValue}}>
      <h2>어학</h2>
      <div className="previewLanguageWrap">
        <div className="previewLanguageTitle">{data.어학명}</div>
        <div className="previewLanguage">
          <div className="previewLanguageFlex">
            <div className="previewLanguageFlexItem"><span style={spanStyle}>급수/점수</span><span>{data.급수점수}</span></div>
          </div>
          <div className="previewLanguageFlex">
            <div className="previewLanguageFlexItem"><span style={spanStyle}>취득년월</span><span>{data.취득년월어학}</span></div>
          </div>
        </div>
      </div>
      {addLanguageStudyTab()}
    </div>
  )
}
const InternshipTab = (data, marginValue) => {
  const addInternshipTab = () => {
    if (data.plus !== []) return (
      data.plus.map((item) => (
        <div className="previewInternWrap">
          <div className="previewInternTitle">{item.인턴대외활동명}</div>
          <div className="previewIntern">
            <div className="previewInternFlex">
              <div className="previewInternFlexItem"><span style={spanStyle}>소속단체명</span><span>{item.소속단체명}</span></div>
              <div className="previewInternFlexItem"><span style={spanStyle}>활동기간</span><span>{item.시작년월 + " ~ " + item.종료년월}</span></div>
            </div>
            <div className="previewInternFlex">
              <div className="previewInternFlexItem">
                <div className="previewContentFlex">
                  <div className='previewContentFlexItem'><span>활동내용</span></div>
                  <div className='previewContentFlexItem'><span style={{ lineHeight: "150%" }}>{item.활동내용}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    )
  }
  return (
    <div className="previewBox" style={{marginBottom: marginValue}}>
      <h2>인턴·대외활동</h2>
      <div className="previewInternWrap">
        <div className="previewInternTitle">{data.인턴대외활동명}</div>
        <div className="previewIntern">
          <div className="previewInternFlex">
            <div className="previewInternFlexItem"><span style={spanStyle}>소속단체명</span><span>{data.소속단체명}</span></div>
            <div className="previewInternFlexItem"><span style={spanStyle}>활동기간</span><span>{data.시작년월 + " ~ " + data.종료년월}</span></div>
          </div>
          <div className="previewInternFlex">
            <div className="previewInternFlexItem">
              <div className="previewContentFlex">
                <div className='previewContentFlexItem'><span>활동내용</span></div>
                <div className='previewContentFlexItem'><span style={{ lineHeight: "150%" }}>{data.활동내용}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {addInternshipTab()}
    </div>
  )
}
const EmploymentPreTab = (data, marginValue) => {
  return (
    <div className="previewBox" style={{marginBottom: marginValue}}>
      <h2>병역·취업우대</h2>
      <div className="previewPreWrap">
        <div className="previewPre">
          <div className="previewPreFlex">
            <div className="previewPreFlexItem"><span style={preSpanStyle}>보훈대상</span><span>{data.보훈대상 ? "해당" : "-"}</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>취업보호 대상</span><span>{data.취업보호 ? "해당" : "-"}</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>고용지원금 대상</span><span>{data.고용지원금 ? "해당" : "-"}</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>장애</span><span>{data.장애 !== false ? data.장애 : "-"}</span></div>
            <div className="previewPreFlexItem"><span style={preSpanStyle}>병역</span><span>{data.병역 !== false ? data.병역 : "-"}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
const IntroductionTab = (data) => {
  return (
    <div className="previewBox" style={{ margin: 0 }}>
      <h2>자기소개서</h2>
      <div className="previewIntroWrap">
        <div className="previewIntro">
          <pre>{data.자기소개서내용}</pre>
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
  const internshipValue = JSON.parse(localStorage.getItem("internshipValue"))
  const employmentPreValue = JSON.parse(localStorage.getItem("employmentPreValue"))
  const introductionValue = JSON.parse(localStorage.getItem("introductionValue"))
  const uesrImg = JSON.parse(localStorage.getItem("uesrImg"))
  let resumeName = basicValue.이름 === "" ? "이력서" : basicValue.이름 + "-이력서"

  const print = () => {
    window.print()
  }

  const onSaveAs = (uri, filename) => {
    console.log('onSaveAs');
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const toPng = () => {
    html2canvas(document.getElementById('미리보기'), { scale: 3 }).then(canvas => {
      onSaveAs(canvas.toDataURL('resume/png'), resumeName)
    })
  }

  const toPdf = () => {
    html2canvas(document.getElementById('미리보기'), { scale: 3 }).then(canvas => {
      var img = canvas.toDataURL('resume/png')
      var pdf = new jsPDF('p', 'mm', 'a4', true);
      var imgWidth = 210;
      var pageHeight = 297;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var position = 0;
      // 첫 페이지
      pdf.addImage(img, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight;
      // 남은 페이지
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(img, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight;
      }
      // 파일저장
      pdf.save(resumeName)
    })
  }

  const [marginValue, setMarginValue] = useState(20)

  const marginUp = () => {
    setMarginValue(marginValue + 5)

  }
  
  const marginDown = () => {
    setMarginValue(marginValue - 5)
  }

  return (
    <div className="previewPage" id='미리보기'>
      {ResumeTitleTab(basicValue)}
      {BasicInfoTab(basicValue, uesrImg, marginValue)}
      {resumeLists !== null && resumeLists.학력 && EducationTab(educationValue, marginValue)}
      {resumeLists !== null && resumeLists.경력 && CareerTab(careerValue, marginValue)}
      {resumeLists !== null && resumeLists.자격증 && CertificateTab(certificateValue, marginValue)}
      {resumeLists !== null && resumeLists.어학 && LanguageStudyTab(languageStudyValue, marginValue)}
      {resumeLists !== null && resumeLists.인턴 && InternshipTab(internshipValue, marginValue)}
      {resumeLists !== null && resumeLists.병역 && EmploymentPreTab(employmentPreValue, marginValue)}
      {resumeLists !== null && resumeLists.자기소개서 && IntroductionTab(introductionValue)}
      <div className='PreviewCompleted'>
        <button onClick={print}></button>
        <hr />
        <button onClick={toPng}></button>
        <hr />
        <button onClick={toPdf}></button>
        <hr />
        <button onClick={marginUp}>증</button>
        <hr />
        <button onClick={marginDown}>감</button>
      </div>
    </div>
  )
}

export default Preview;