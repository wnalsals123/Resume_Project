import { useContext, useRef } from "react";
import { getValues, postValues } from "components/Data/UserData";
import { AddContext } from "components/Data/AddState";

const ResumeCompleted = () => {
  const { addEdu, addCar, addCer, addLan, addInter } = useContext(AddContext)
  const preview = useRef();
  let UserData

  const initPreview = () => {
    UserData = getValues( addEdu, addCar, addCer, addLan, addInter )
  }

  const opnePreview = () => {
    postValues(UserData)
    preview.current = window.open("preview", "preview", "width=1100, height=1100")
  }

  const saveResume = () => {
    localStorage.setItem('save', 'true')
    alert("이력서가 저장되었습니다!")
  }

  return (
    <div className='ResumeCompleted'>
      <button onMouseDown={initPreview} onClick={opnePreview}>미리보기</button>
      <hr/>
      <button onClick={saveResume}>저장하기</button>
    </div>
  )
}

export default ResumeCompleted;