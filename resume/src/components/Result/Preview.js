import './Preview.css';

const Preview = () => {
  let basicValue = JSON.parse(localStorage.getItem("baiscValue"))
  console.log(basicValue)

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

  return (
    <div className="previewPage">
      <div>
        <h1>홍길동의 이력서</h1>
      </div>
      <div className="previewBox">
        <h2>기본정보</h2>
        <div className="previewBaiscInfoWrap">
          <div className="previewBaiscInfoImg"></div>
          <div className="previewBaiscInfo">
            <div className="previewBaiscInfoFlex">
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>이름</span><span>none</span></div>
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>영문</span><span><span>none</span></span></div>
            </div>
            <div className="previewBaiscInfoFlex">
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>성별</span><span>none</span></div>
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>생년월일</span><span>none</span></div>
            </div>
            <div className="previewBaiscInfoFlex">
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>연락처</span><span>none</span></div>
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>이메일</span><span>none</span></div>
            </div>
            <div className="previewBaiscInfoFlex">
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>주소</span><span>none</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="previewBox">
        <h2>학력</h2>
        <div className="previewEducationWrap">
          <div className="previewEducationTitle">대졸(4년)</div>
          <div className="previewEducation">
            <div className="previewEducationFlex">
              <div className="previewEducationFlexItem"><span style={spanStyle}>학교명</span><span>머시기대학교</span></div>
              <div className="previewEducationFlexItem"><span style={spanStyle}>전공명</span><span><span>컴퓨터공학과</span></span></div>
            </div>
            <div className="previewEducationFlex">
              <div className="previewEducationFlexItem"><span style={spanStyle}>입학년월</span><span>2002.03</span></div>
              <div className="previewEducationFlexItem"><span style={spanStyle}>졸업년월</span><span>2006.02</span></div>
            </div>
            <div className="previewEducationFlex">
              <div className="previewEducationFlexItem"><span style={spanStyle}>학점</span><span>4.5 / 4.5</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="previewBox">
        <h2>경력</h2>
        <div className="previewCareerWrap">
          <div className="previewCareerTitle">경력(18개월)</div>
          <div className="previewCareer">
            <div className="previewCareerFlex">
              <div className="previewCareerFlexItem"><span style={spanStyle}>회사명</span><span>머시기컴퍼니</span></div>
              <div className="previewCareerFlexItem"><span style={spanStyle}>직무</span><span>개발자</span></div>
            </div>
            <div className="previewCareerFlex">
              <div className="previewCareerFlexItem"><span style={spanStyle}>입사년월</span><span>2002.03</span></div>
              <div className="previewCareerFlexItem"><span style={spanStyle}>퇴사년월</span><span>2006.02</span></div>
            </div>
            <div className="previewCareerFlex">
              <div className="previewCareerFlexItem"><span style={spanStyle}>직급</span><span>과장</span></div>
              <div className="previewCareerFlexItem"><span style={spanStyle}>연봉</span><span>4000만원</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="previewBox">
        <h2>자격증</h2>
        <div className="previewCertificateWrap">
          <div className="previewCertificateTitle">컴퓨터그래픽스운용기능사</div>
          <div className="previewCertificate">
            <div className="previewCertificateFlex">
              <div className="previewCertificateFlexItem"><span style={spanStyle}>발행처</span><span>한국산업인력공단</span></div>
            </div>
            <div className="previewCertificateFlex">
              <div className="previewCertificateFlexItem"><span style={spanStyle}>취득년월</span><span>2002.03</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="previewBox">
        <h2>어학</h2>
        <div className="previewLanguageWrap">
          <div className="previewLanguageTitle">TOEIC</div>
          <div className="previewLanguage">
            <div className="previewLanguageFlex">
              <div className="previewLanguageFlexItem"><span style={spanStyle}>급수/점수</span><span>990</span></div>
            </div>
            <div className="previewLanguageFlex">
              <div className="previewLanguageFlexItem"><span style={spanStyle}>취득년월</span><span>2002.03</span></div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="previewBox">
        <h2>자기소개서</h2>
        <div className="previewIntroWrap">
          <div className="previewIntro">
            안녕하세요!
          </div>
        </div>
      </div>
      <div className="previewBox">
        <h2>포트폴리오</h2>
        <div className="previewPortfolioWrap">
          <div className="previewPortfolio">
            <div><span>사이트 주소: </span><span>https://mypage.com</span></div>
            <div><span>첨부파일: </span><span>파일1</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview;

