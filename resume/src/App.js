import './App.css';
import {
  TopBanner, Title, BasicInfo, Education, Career, Certificate, LanguageStudy,
  Internship, EmploymentPre, Introduction, ResumeBottom, ResumeCompleted
} from 'components'
import { useEffect } from 'react';

function App() {
  // 유저 데이터 유효성 확인
  useEffect(()=>{
    const validation = localStorage.getItem("dataValidation")
    if(localStorage.length === 0) return;
    else if(validation === "v1.0") return;
    else {
      alert("유효하지 않은 데이터로 이력서를 초기화합니다!")
      localStorage.clear()
      localStorage.setItem('dataValidation', 'v1.0')
      window.location.replace("/")
    }
  }, [])
  // 이력서 웹페이지 렌더링
  return (
    <div>
      <div className="ResumePage">
        {/* 탑 배너 */}
        <TopBanner />
        {/* 이력서 제목 */}
        <Title />
        <div className="contentBox">
          {/* 기본정보 */}
          <BasicInfo />
          {/* 학력 */}
          <Education />
          {/* 경력 */}
          <Career />
          {/* 자격증 */}
          <Certificate />
          {/* 어학 */}
          <LanguageStudy />
          {/* 인턴·대외활동 */}
          <Internship />
          {/* 병역·취업우대 */}
          <EmploymentPre />
          {/* 자기소개서 */}
          <Introduction />
          {/* 이력서 설명 */}
          <ResumeBottom />
          {/* 이력서 저장 */}
          <ResumeCompleted />
        </div>
      </div>
    </div>
  );
}

export default App;