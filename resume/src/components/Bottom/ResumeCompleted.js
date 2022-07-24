import { UserContext } from "components/Data/UserData";
import { useContext, useRef, useState } from "react"

const ResumeCompleted = () => {
  const preview = useRef();
  const [save, setSave] = useState(false)
  const { resumeLists,
    basicValue, setbasicValue,
    educationValue, setEducationValue,
    careerValue, setCareerValue,
    certificateValue, setCertificateValue,
    languageStudyValue, setLanguageStudyValue
  } = useContext(UserContext)

  const onloadValues = () => {
    localStorage.setItem('baiscValue', JSON.stringify(basicValue))
    localStorage.setItem('resumeLists', JSON.stringify(resumeLists))
    localStorage.setItem('educationValue', JSON.stringify(educationValue))
    localStorage.setItem('careerValue', JSON.stringify(careerValue))
    localStorage.setItem('certificateValue', JSON.stringify(certificateValue))
    localStorage.setItem('languageStudyValue', JSON.stringify(languageStudyValue))
  }

  const saveValues = () => {
    setbasicValue(basicValue.map((item) => (item.name === "성별" ? { ...item, value: document.getElementById(item.name).innerText } : { ...item, value: document.getElementById(item.name).value })))
    setEducationValue(educationValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
    setCareerValue(careerValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
    setCertificateValue(certificateValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
    setLanguageStudyValue(languageStudyValue.map((item) => (document.getElementById(item.name) !== null ? { ...item, value: document.getElementById(item.name).value } : item)))
  }

  const opnePreview = () => {
    if (!save) {
      alert("이력서를 저장해 주세요!")
      return
    }
    onloadValues()
    preview.current = window.open("preview", "preview", "width=1000, height=1200")
  }

  const saveResume = () => {
    saveValues()

    alert("저장되었습니다!")
    setSave(true)
  }

  return (
    <div className='ResumeCompleted'>
      <button onClick={opnePreview}>미리보기</button>
      <button onClick={saveResume}>이력서 저장하기</button>
    </div>
  )
}

export default ResumeCompleted;