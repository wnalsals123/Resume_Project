import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEffect, useState } from 'react';
import './Preview.css';
// span 스타일
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

/* 이력서 제목 */
const ResumeTitleTab = (data) => {
  return (
    <div>
      <h1>{data.이력서제목 === "" ? "이력서" : data.이력서제목}</h1>
    </div>
  )
}

/* 기본정보 탭 */
const BasicInfoTab = (data, img, marginValue, marginChange, layoutView) => {
  return (
    <div className="previewBox" style={{ paddingBottom: marginValue }}>
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
      <div className='marginBox no-print' style={{ display: layoutView }}>
        <span>{marginValue}px</span>
        <button onClick={() => { marginChange(true) }}>↑</button>
        <button onClick={() => { marginChange(false) }}>↓</button>
      </div>
    </div>
  )
}

/* 학력 탭 */
const EducationTab = (data, marginValue, marginChange, layoutView) => {
  // 학력 추가 항목
  const addEduTab = () => {
    if (data.plus !== []) return (
      data.plus.map((item) => (
        <div className="previewEducationWrap">
          <div className="previewEducationTitle">{item.학력유형 === '' ? '-' : item.학력유형}</div>
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

  // 고졸 미만
  const EduTab1 = () => {
    // 검정고시
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
    // 검정고시 아님
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

  // 고졸
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

  // 학력유형 설정
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
    <div className="previewBox" style={{ paddingBottom: marginValue }}>
      <h2>학력</h2>
      {SelectEduTab()}
      {addEduTab()}
      <div className='marginBox no-print' style={{ display: layoutView }}>
        <span>{marginValue}px</span>
        <button onClick={() => { marginChange(true) }}>↑</button>
        <button onClick={() => { marginChange(false) }}>↓</button>
      </div>
    </div>
  )
}

/* 경력 탭 */
const CareerTab = (data, marginValue, marginChange, layoutView) => {
  let today = new Date();
  let inService = today.getFullYear() + '.' + ((today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1) + 1)

  // 경력 계산 
  const getCareerPeriod = (start, end) => {
    if (start === '' || end === '' || start.length < 7 || end.length < 7) return '연월확인'
    else {
      let strDate = start.split('.')
      let endDate = end.split('.')
      let period, year, month

      if (Number(strDate[1]) > 12 || Number(endDate[1]) > 12) return '연월확인'

      year = endDate[0] - strDate[0]
      month = Number(endDate[1]) - Number(strDate[1])

      if (month < 0) {
        year = year - 1
        month = (12 - Number(strDate[1])) + Number(endDate[1])
      }

      if (year > 0) {
        month === 0 ? period = year + '년' : period = year + '년' + month + '개월'
      } else if (year === 0) {
        if (month < 0) period = '연월확인'
        else {

          period = month + '개월'
        }
      } else {
        period = '연월확인'
      }
      return period
    }
  }

  // 경력 추가 항목
  const addCareerTab = () => {
    if (data.plus !== []) return (
      data.plus.map((item) => (
        <div className="previewCareerWrap">
          <div className="previewCareerTitle" style={{ textAlign: 'center' }}>경력<br />({getCareerPeriod(item.입사년월, item.재직중 ? inService : item.퇴사년월)})</div>
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
    <div className="previewBox" style={{ paddingBottom: marginValue }}>
      <h2>경력</h2>
      <div className="previewCareerWrap">
        <div className="previewCareerTitle" style={{ textAlign: 'center' }}>경력<br />({getCareerPeriod(data.입사년월, data.재직중 ? inService : data.퇴사년월)})</div>
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
      <div className='marginBox no-print' style={{ display: layoutView }}>
        <span>{marginValue}px</span>
        <button onClick={() => { marginChange(true) }}>↑</button>
        <button onClick={() => { marginChange(false) }}>↓</button>
      </div>
    </div>
  )
}

/* 자격증 탭 */
const CertificateTab = (data, marginValue, marginChange, layoutView) => {
  // 자격증 추가 항목
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
    <div className="previewBox" style={{ paddingBottom: marginValue }}>
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
      <div className='marginBox no-print' style={{ display: layoutView }}>
        <span>{marginValue}px</span>
        <button onClick={() => { marginChange(true) }}>↑</button>
        <button onClick={() => { marginChange(false) }}>↓</button>
      </div>
    </div>
  )
}

/* 어학 탭 */
const LanguageStudyTab = (data, marginValue, marginChange, layoutView) => {
  // 어학 추가 항목
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
    <div className="previewBox" style={{ paddingBottom: marginValue }}>
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
      <div className='marginBox no-print' style={{ display: layoutView }}>
        <span>{marginValue}px</span>
        <button onClick={() => { marginChange(true) }}>↑</button>
        <button onClick={() => { marginChange(false) }}>↓</button>
      </div>
    </div>
  )
}

/* 인턴대외활동 탭 */
const InternshipTab = (data, marginValue, marginChange, layoutView) => {
  // 인턴대외활동 추가 항목
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
    <div className="previewBox" style={{ paddingBottom: marginValue }}>
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
      <div className='marginBox no-print' style={{ display: layoutView }}>
        <span>{marginValue}px</span>
        <button onClick={() => { marginChange(true) }}>↑</button>
        <button onClick={() => { marginChange(false) }}>↓</button>
      </div>
    </div>
  )
}

/* 병역취업우대 탭 */
const EmploymentPreTab = (data, marginValue, marginChange, layoutView) => {
  return (
    <div className="previewBox" style={{ paddingBottom: marginValue }}>
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
      <div className='marginBox no-print' style={{ display: layoutView }}>
        <span>{marginValue}px</span>
        <button onClick={() => { marginChange(true) }}>↑</button>
        <button onClick={() => { marginChange(false) }}>↓</button>
      </div>
    </div>
  )
}

/* 자기소개서 탭 */
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

/* 미리보기 페이지 */
const Preview = () => {
  // 사용자 정보 불러오기
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
  // 페이지에 표시
  const [previewHeight, setPreviewHeight] = useState(0)
  const [heightEvent, setHeightEvent] = useState(false)
  const [pageLineView, setPageLineView] = useState("block")
  const [layoutView, setLayoutView] = useState("none")
  const [layoutViewText, setLayoutViewText] = useState("표시")

  // 미리보기 페이지 편집 시 페이지 길이 설정
  useEffect(() => {
    setPreviewHeight(document.getElementById('미리보기').clientHeight)
  }, [heightEvent])

  // 인쇄 및 출력 시 버튼 숨기기
  const setNone = () => {
    setPageLineView("none")
    setLayoutView("none")
  }

  // 인쇄 및 출력 시 레이아웃 숨기기
  const layoutViewVisible = () => {
    if (layoutView === 'block') {
      setLayoutView("none")
      setLayoutViewText("표시")
    } else {
      setLayoutView("block")
      setLayoutViewText("숨김")
    }
  }

  // 출력
  const print = () => {
    window.print()
  }

  // 이미지 변환
  const onSaveAs = (uri, filename) => {
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  // png로 변환
  const convertPng = () => {
    html2canvas(document.getElementById('미리보기'), { scale: 3 }).then(canvas => {
      onSaveAs(canvas.toDataURL('resume/png'), resumeName)
      setPageLineView("block")
      setLayoutViewText("표시")
    })
  }

  // 저장 취소
  const cancelConfirm = () => console.log("cancel");

  // png로 저장 시 페이지 초과 알림
  const pngConfirm = (message = null) => {
    if (window.confirm(message)) {
      convertPng()
    } else {
      cancelConfirm();
    }
  };

  // png로 저장
  const toPng = () => {
    if (previewHeight > 1285) {
      pngConfirm("페이지를 초과하면 PDF 저장을 권장합니다.\n그래도 저장하시겠습니까?");
      setPageLineView("block")
    } else {
      convertPng()
    }
  }

  // pdf로 저장
  const toPdf = () => {
    html2canvas(document.getElementById('미리보기'), { scale: 3 }).then(canvas => {
      var img = canvas.toDataURL('resume/png')
      var pdf = new jsPDF('p', 'cm', 'a4', true);
      var imgWidth = 21;
      var pageHeight = 29.7;
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
      setPageLineView("block")
      setLayoutViewText("표시")
    })
  }

  // 이력서 간격 설정
  const [basicMargin, setBasicMargin] = useState(0)
  const [eduMargin, setEduMargin] = useState(0)
  const [carMargin, setCarMargin] = useState(0)
  const [cerMargin, setCerMargin] = useState(0)
  const [lanMargin, setLanMargin] = useState(0)
  const [interMargin, setInterMargin] = useState(0)
  const [preMargin, setPreMargin] = useState(0)

  // 전체 탭 간격 수정(증가, 감소, 초기화)
  const allMarginChange = (chageState) => {
    if (chageState === 'add') {
      setBasicMargin(basicMargin + 5)
      setEduMargin(eduMargin + 5)
      setCarMargin(carMargin + 5)
      setCerMargin(cerMargin + 5)
      setLanMargin(lanMargin + 5)
      setInterMargin(interMargin + 5)
      setPreMargin(preMargin + 5)
    } else if (chageState === 'subtract') {
      setBasicMargin(basicMargin - 5)
      setEduMargin(eduMargin - 5)
      setCarMargin(carMargin - 5)
      setCerMargin(cerMargin - 5)
      setLanMargin(lanMargin - 5)
      setInterMargin(interMargin - 5)
      setPreMargin(preMargin - 5)
    } else {
      setBasicMargin(0)
      setEduMargin(0)
      setCarMargin(0)
      setCerMargin(0)
      setLanMargin(0)
      setInterMargin(0)
      setPreMargin(0)
    }
    setHeightEvent(!heightEvent)
  }

  // 기본정보 마진 설정
  const baiscMarginChange = (chageState) => {
    if (chageState) setBasicMargin(basicMargin + 5)
    else setBasicMargin(basicMargin - 5)
    setHeightEvent(!heightEvent)
  }

  // 학력 마진 설정
  const eduMarginChange = (chageState) => {
    if (chageState) setEduMargin(eduMargin + 5)
    else setEduMargin(eduMargin - 5)
    setHeightEvent(!heightEvent)
  }

  // 경력 마진 설정
  const carMarginChange = (chageState) => {
    if (chageState) setCarMargin(carMargin + 5)
    else setCarMargin(carMargin - 5)
    setHeightEvent(!heightEvent)
  }

  // 자격증 마진 설정
  const cerMarginChange = (chageState) => {
    if (chageState) setCerMargin(cerMargin + 5)
    else setCerMargin(cerMargin - 5)
    setHeightEvent(!heightEvent)
  }

  // 어학 마진 설정
  const lanMarginChange = (chageState) => {
    if (chageState) setLanMargin(lanMargin + 5)
    else setLanMargin(lanMargin - 5)
    setHeightEvent(!heightEvent)
  }

  // 인턴대외활동 마진 설정
  const interMarginChange = (chageState) => {
    if (chageState) setInterMargin(interMargin + 5)
    else setInterMargin(interMargin - 5)
    setHeightEvent(!heightEvent)
  }

  // 병역취업우대 마진 설정
  const preMarginChange = (chageState) => {
    if (chageState) setPreMargin(preMargin + 5)
    else setPreMargin(preMargin - 5)
    setHeightEvent(!heightEvent)
  }

  // 미리보기 페이지 렌더링
  return (
    <div>
      <div className="previewPage" id='미리보기'>
        {ResumeTitleTab(basicValue)}
        {BasicInfoTab(basicValue, uesrImg, basicMargin, baiscMarginChange, layoutView)}
        {resumeLists !== null && resumeLists.학력 && EducationTab(educationValue, eduMargin, eduMarginChange, layoutView)}
        {resumeLists !== null && resumeLists.경력 && CareerTab(careerValue, carMargin, carMarginChange, layoutView)}
        {resumeLists !== null && resumeLists.자격증 && CertificateTab(certificateValue, cerMargin, cerMarginChange, layoutView)}
        {resumeLists !== null && resumeLists.어학 && LanguageStudyTab(languageStudyValue, lanMargin, lanMarginChange, layoutView)}
        {resumeLists !== null && resumeLists.인턴 && InternshipTab(internshipValue, interMargin, interMarginChange, layoutView)}
        {resumeLists !== null && resumeLists.병역 && EmploymentPreTab(employmentPreValue, preMargin, preMarginChange, layoutView)}
        {resumeLists !== null && resumeLists.자기소개서 && IntroductionTab(introductionValue)}

        <div className='pageLine no-print' style={{ display: pageLineView }}>
          <div className='pageNumber'>page1</div>
          {previewHeight > 1285 && <div className='pageNumber'>page2</div>}
          {previewHeight > (1285 * 2) && <div className='pageNumber'>page3</div>}
          {previewHeight > (1285 * 3) && <div className='pageNumber'>page4</div>}
          {previewHeight > (1285 * 4) && <div className='pageNumber'>page5</div>}
          {previewHeight > (1285 * 5) && <div className='pageNumber'>page6</div>}
          {previewHeight > (1285 * 6) && <div className='pageNumber'>page7</div>}
          {previewHeight > (1285 * 7) && <div className='pageNumber'>page8</div>}
          {previewHeight > (1285 * 8) && <div className='pageNumber'>page9</div>}
          {previewHeight > (1285 * 9) && <div className='pageNumber'>page10</div>}
        </div>
      </div>
      <div className='PreviewCompleted no-print' >
          <span>옵션</span>
          <div className='printBtn buttonFilter' data-tooltip-text="인쇄"><button onClick={print}></button></div>
          <hr />
          <div className='toPngBtn buttonFilter' data-tooltip-text="이미지 저장"><button onMouseDown={setNone} onClick={toPng}></button></div>
          <hr />
          <div className='toPdfBtn buttonFilter' data-tooltip-text="PDF 저장"><button onMouseDown={setNone} onClick={toPdf}></button></div>
        </div>

        <div className='PreviewLayout no-print'>
          <span>간격</span>
          <button onClick={layoutViewVisible} style={{ fontSize: "14px", border: "1px solid #E9967A", borderRadius: "5px", boxSizing: "border-box" }}>{layoutViewText}</button>
          <hr />
          <button onClick={() => { allMarginChange('add') }}>↑</button>
          <hr />
          <button onClick={() => { allMarginChange('subtract') }}>↓</button>
          <hr />
          <button onClick={() => { allMarginChange("init") }}>↻</button>
        </div>
    </div>
  )
}

export default Preview;