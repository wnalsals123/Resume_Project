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
    { id: 7, class: "ResumeLi", name: "포트폴리오", active: false },
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
    { key: 0, name: "EducheckBox1", value: "" },
    { key: 1, name: "EducheckBox2", value: "" },
    { key: 2, name: "EducheckBox3", value: "" },
    { key: 3, name: "EducheckBox4", value: "" },
    { key: 4, name: "학교명", value: "" },
    { key: 5, name: "입학년월", value: "" },
    { key: 6, name: "졸업년월", value: "" },
    { key: 7, name: "전공명", value: "" },
    { key: 8, name: "학점", value: "" },
    { key: 9, name: "총점", value: "" },
    { key: 10, name: "GED", value: "" },
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

  return (
    <UserContext.Provider value={{
      resumeLists, setResumeLists,
      basicValue, setbasicValue,
      educationValue, setEducationValue,
      careerValue, setCareerValue,
      certificateValue, setCertificateValue,
      languageStudyValue, setLanguageStudyValue
    }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }