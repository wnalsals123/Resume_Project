import { useContext, useRef } from "react";
import { getValues, postValues } from "components/Data/UserData";
import { AddContext } from "components/Data/AddState";

/* 이력서 관리 컴포넌트 */
const ResumeCompleted = () => {
  const { addEdu, addCar, addCer, addLan, addInter } = useContext(AddContext) // 추가 항목 Context
  const preview = useRef();
  let UserData

  // 이력서 초기화 확인
  const initConfirm = (message = null) => {
    if (window.confirm(message)) {
      console.log("초기화")
      localStorage.clear()
      window.location.replace("/")
    } else {
      console.log("초기화 취소")
    }
  };

  // 이력서 초기화
  const initialization = () => {
    initConfirm("이력서가 저장된 데이터가 삭제됩니다.\n정말로 초기화하시겠습니까?");
  }

  // 미리보기 설정
  const initPreview = () => {
    UserData = getValues( addEdu, addCar, addCer, addLan, addInter )
  }

  // 미리보기 윈도우 오픈
  const opnePreview = () => {
    postValues(UserData)
    preview.current = window.open("preview", "preview", "width=1100, height=1100")
  }

  // 이력서 저장
  const saveResume = () => {
    postValues(UserData)
    alert("이력서가 저장되었습니다!")
  }

  return (
    <div className='ResumeCompleted'>
      <button onMouseDown={initPreview} onClick={opnePreview}>미리보기</button>
      <hr/>
      <button onMouseDown={initPreview} onClick={saveResume}>저장하기</button>
      <hr/>
      <button onClick={initialization}>초기화</button>
    </div>
  )
}

export default ResumeCompleted;