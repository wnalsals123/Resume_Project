const Preview = () => {
  const spanStyle = {
    display: "inline-block",
    width: "84px",
    color: "gray",
    marginRight: "10px",
    borderRight: "2px solid #E9967A",
    fontSize: "18px"
  }

  return (
    <div className="previewPage">
      <div>
        <h1>홍길동의 이력서</h1>
      </div>
      <div className="previewBox">
        <h2>기본정보</h2>
        <div className="previewWrap">
          <div className="previewImg"></div>
          <div className="previewBaiscInfo">
            <div className="previewBaiscInfoFlex">
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>이름</span><span>홍길동</span></div>
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>영문</span><span><span>Hong GilDong</span></span></div>
            </div>
            <div className="previewBaiscInfoFlex">
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>성별</span><span>남자</span></div>
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>생년월일</span><span>1234.12.12</span></div>
            </div>
            <div className="previewBaiscInfoFlex">
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>연락처</span><span>010-1234-1234</span></div>
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>이메일</span><span>wnalsals12@naver.com</span></div>
            </div>
            <div className="previewBaiscInfoFlex">
              <div className="previewBaiscInfoFlexItem"><span style={spanStyle}>주소</span><span>서울특별시 강남구 가로수길</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="previewBox">
        <h2>학력</h2>
        <div><span>학교명</span><span>머시기대학교</span><span> / </span><span>전공명</span><span>컴퓨터공학과</span></div>
        <div><span>재학기간</span><span>2002.12</span><span> ~ </span><span>2006.12</span></div>
        <div><span>학점</span><span>4.5</span><span> / </span><span>4.5</span></div>
      </div>
      <div className="previewBox">
        <h2>경력</h2>
        <div><span>회사명</span><span>머시기컴퍼니</span></div>
        <div><span>재직기간</span><span>2002.12</span><span> ~ </span><span>2006.12</span></div>
        <div><span>직급</span><span>과장</span><span>직무</span><span>프론트엔드 개발</span></div>
        <div><span>연봉</span><span>4000</span></div>
      </div>
      <div className="previewBox">
        <h2>자격증</h2>
        <div><span>자격증명</span><span>정보처리기사</span></div>
        <div><span>발행처</span><span>한국산업인력공단</span></div>
        <div><span>취득년월</span><span>2006.02</span></div>
      </div>
      <div className="previewBox">
        <h2>어학</h2>
        <div><span>외국어명</span><span>영어</span></div>
        <div><span>시험명</span><span>TOEIC</span></div>
        <div><span>취득년월</span><span>2006.02</span></div>
      </div>
      <div className="previewBox">
        <h2>인턴·대외활동</h2>
        <div><span>인턴·대외활동명</span><span>인턴</span></div>
        <div><span>소속단체명</span><span>TOEIC</span></div>
        <div><span>활동기간</span><span>2006.02</span><span> ~ </span><span>2006.02</span></div>
        <div><span>활동내용</span><span>내용</span></div>
      </div>
      <div className="previewBox">
        <h2>병역·취업우대</h2>
        <div><span>보훈대상</span><span>대상</span></div>
        <div><span>취업보호 대상</span><span>대상</span></div>
        <div><span>고용지원금 대상</span><span>대상</span></div>
        <div><span>장애</span><span>1급</span></div>
        <div><span>병역</span><span>군필</span></div>
      </div>
      <div className="previewBox">
        <h2>자기소개서</h2>
        <div><span>자기소개서</span><span>내용</span></div>
      </div>
      <div className="previewBox">
        <h2>포트폴리오</h2>
        <div><span>사이트 주소</span><span>https://mypage.com</span></div>
        <div><span>첨부파일</span><span>파일1</span></div>
      </div>
    </div>
  )
}

export default Preview;

