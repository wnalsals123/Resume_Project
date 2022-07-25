import { UserContext } from "components/Data/UserData";
import { useContext, useRef, useState } from "react"

const ResumeCompleted = () => {
  const preview = useRef();
  const [ready, setReady] = useState(false)
  const { resumeLists,
    basicValue, setbasicValue,
    educationValue, setEducationValue,
    educationCheckValue, setEducationCheckValue,
    careerValue, setCareerValue,
    certificateValue, setCertificateValue,
    languageStudyValue, setLanguageStudyValue,
    internshipValue, setInternshipValue,
    employmentPreValue, setEmploymentPreValue,
    introductionValue, setIntroductionValue,
  } = useContext(UserContext)

  const postValues = () => {
    localStorage.setItem('baiscValue', JSON.stringify(basicValue))
    localStorage.setItem('resumeLists', JSON.stringify(resumeLists))
    localStorage.setItem('educationValue', JSON.stringify(educationValue))
    localStorage.setItem('educationCheckValue', JSON.stringify(educationCheckValue))
    localStorage.setItem('careerValue', JSON.stringify(careerValue))
    localStorage.setItem('certificateValue', JSON.stringify(certificateValue))
    localStorage.setItem('languageStudyValue', JSON.stringify(languageStudyValue))
    localStorage.setItem('internshipValue', JSON.stringify(internshipValue))
    localStorage.setItem('employmentPreValue', JSON.stringify(employmentPreValue))
    localStorage.setItem('introductionValue', JSON.stringify(introductionValue))
  }

  const saveValues = () => {
    setbasicValue(basicValue.map((item) => (item.name === "성별" ? { ...item, value: document.getElementById(item.name).innerText } : { ...item, value: document.getElementById(item.name).value })))
    setEducationValue(educationValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
    setEducationCheckValue(educationCheckValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, check: document.getElementById(item.name).checked } : item)))
    setCareerValue(careerValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
    setCertificateValue(certificateValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
    setLanguageStudyValue(languageStudyValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
    setInternshipValue(internshipValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
    setEmploymentPreValue(employmentPreValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, check: document.getElementById(item.name).checked } : item)))
    setIntroductionValue(introductionValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
    setReady(true)
  }

  const opnePreview = () => {
    if (ready) {
      postValues()
      preview.current = window.open("preview", "preview", "width=1000, height=1200")
      setReady(false)
    } else {
      alert("데이터 불러오기에 실패했습니다.")
      return
    }
  }

  const saveResume = () => {
    localStorage.setItem('save', 'true')
    alert("이력서가 저장되었습니다!")
  }

  return (
    <div className='ResumeCompleted'>
      <button onMouseDown={saveValues} onClick={opnePreview}>미리보기</button>
      <button onClick={saveResume}>이력서 저장하기</button>
    </div>
  )
}

export default ResumeCompleted;