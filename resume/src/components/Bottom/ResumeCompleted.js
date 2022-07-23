import { UserContext } from "components/Data/UserData"
import { useContext } from "react"

const ResumeCompleted = () => {
  const {dispatch} = useContext(UserContext)
  console.log(dispatch)

  const opnePreview = () => {
    // const Values = [
    //   { key: 0, id: 0, name: "이름", value: document.getElementById("이름").value },
    //   { key: 1, id: 0, name: "영문", value: document.getElementById("영문").value },
    //   { key: 2, id: 0, name: "성별", value: document.getElementById("성별").innerText },
    //   { key: 3, id: 0, name: "생년월일", value: document.getElementById("생년월일").value },
    //   { key: 4, id: 0, name: "연락처", value: document.getElementById("연락처").value },
    //   { key: 5, id: 0, name: "이메일", value: document.getElementById("이메일").value },
    //   { key: 6, id: 0, name: "주소", value: document.getElementById("주소").value },
    //   { key: 7, id: 0, name: "사진", value: "none" }
    // ]
    dispatch({ type: 'TOGGLE_USER', id: 0 });
    window.open("preview", "preview", "width=1000, height=1200")
  }

  const saveResume = () => {
    alert("저장되었습니다!")
  }

  return (
    <div className='ResumeCompleted'>
      <button onClick={opnePreview}>미리보기</button>
      <button onClick={saveResume}>이력서 저장하기</button>
    </div>
  )
}

export default ResumeCompleted;