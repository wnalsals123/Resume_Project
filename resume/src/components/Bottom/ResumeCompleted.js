import { useRef } from "react";
import { getValues, postValues } from "components/Data/UserData";

const ResumeCompleted = () => {
  const preview = useRef();
  let UserData

  const initPreview = () => {
    UserData = getValues()
  }

  const opnePreview = () => {
    postValues(UserData)
    preview.current = window.open("preview", "preview", "width=1000, height=1200")
  }

  const saveResume = () => {
    localStorage.setItem('save', 'true')
    alert("이력서가 저장되었습니다!")
  }

  return (
    <div className='ResumeCompleted'>
      <button onMouseDown={initPreview} onClick={opnePreview}>미리보기</button>
      <button onClick={saveResume}>이력서 저장하기</button>
    </div>
  )
}

export default ResumeCompleted;