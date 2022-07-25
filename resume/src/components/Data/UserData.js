import { createContext, useState } from 'react';

const UserContext = createContext(null)

const UserProvider = ({ children }) => {

  const [resumeLists, setResumeLists] = useState([
    { id: 0, class: "ResumeLi", name: "학력", active: false },
    { id: 1, class: "ResumeLi", name: "경력", active: false },
    { id: 2, class: "ResumeLi", name: "자격증", active: false },
    { id: 3, class: "ResumeLi", name: "어학", active: false },
    { id: 4, class: "ResumeLi", name: "인턴·대외활동", oactiven: false },
    { id: 5, class: "ResumeLi", name: "병역·취업우대", active: false },
    { id: 6, class: "ResumeLi", name: "자기소개서", active: false },
  ])

  const [basicValue, setbasicValue] = useState([
    { key: 0, name: "이력서제목", value: "" },
    { key: 1, name: "이름", value: "" },
    { key: 2, name: "영문", value: "" },
    { key: 3, name: "성별", value: "" },
    { key: 4, name: "생년월일", value: "" },
    { key: 5, name: "연락처", value: "" },
    { key: 6, name: "이메일", value: "" },
    { key: 7, name: "주소", value: "" },
  ])

  const [educationValue, setEducationValue] = useState([
    { key: 0, name: "학교명", value: "" },
    { key: 1, name: "입학년월", value: "" },
    { key: 2, name: "졸업년월", value: "" },
    { key: 3, name: "전공명", value: "" },
    { key: 4, name: "학점", value: "" },
    { key: 5, name: "총점", value: "" },
    { key: 6, name: "합격년월", value: "" },
  ])

  const [educationCheckValue, setEducationCheckValue] = useState([
    { key: 0, name: "EducheckBox1", check: false, value: "고졸 미만" },
    { key: 1, name: "EducheckBox2", check: false, value: "고졸" },
    { key: 2, name: "EducheckBox3", check: false, value: "대졸(2,3년)" },
    { key: 3, name: "EducheckBox4", check: false, value: "대졸(4년)" },
    { key: 4, name: "GED", check: false, value: "" },
  ])

  const [careerValue, setCareerValue] = useState([
    { key: 0, name: "회사명", value: "" },
    { key: 1, name: "입사년월", value: "" },
    { key: 2, name: "퇴사년월", value: "" },
    { key: 3, name: "직급", value: "" },
    { key: 4, name: "직무", value: "" },
    { key: 5, name: "연봉", value: "" },
    { key: 6, name: "재직중", value: "" },
  ])

  const [certificateValue, setCertificateValue] = useState([
    { key: 0, name: "자격증명", value: "" },
    { key: 1, name: "발행처", value: "" },
    { key: 2, name: "취득년월-자격증", value: "" },
  ])

  const [languageStudyValue, setLanguageStudyValue] = useState([
    { key: 0, name: "어학명", value: "" },
    { key: 1, name: "급수점수", value: "" },
    { key: 2, name: "취득년월-어학", value: "" },
  ])

  const [internshipValue, setInternshipValue] = useState([
    { key: 0, name: "인턴·대외활동명", value: "" },
    { key: 1, name: "소속단체명", value: "" },
    { key: 2, name: "시작년월", value: "" },
    { key: 3, name: "종료년월", value: "" },
    { key: 4, name: "활동내용", value: "" },
  ])

  const [employmentPreValue, setEmploymentPreValue] = useState([
    { key: 0, name: "보훈대상", check: false, value: "" },
    { key: 1, name: "취업보호", check: false, value: "" },
    { key: 2, name: "고용지원금", check: false, value: "" },
    { key: 3, name: "장애", check: false, value: "" },
    { key: 4, name: "병역", check: false, value: "" },
  ])

  const [introductionValue, setIntroductionValue] = useState([
    { key: 0, name: "자기소개서내용", value: "" },
  ])

  return (
    <UserContext.Provider value={{
      resumeLists, setResumeLists,
      basicValue, setbasicValue,
      educationValue, setEducationValue,
      educationCheckValue, setEducationCheckValue,
      careerValue, setCareerValue,
      certificateValue, setCertificateValue,
      languageStudyValue, setLanguageStudyValue,
      internshipValue, setInternshipValue,
      employmentPreValue, setEmploymentPreValue,
      introductionValue, setIntroductionValue,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }