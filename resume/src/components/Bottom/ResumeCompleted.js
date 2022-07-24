import { UserContext } from "components/Data/UserData";
import { useContext, useRef } from "react"
const ResumeCompleted = () => {
  const preview = useRef();
  const { userValue, test } = useContext(UserContext)

  const opnePreview = () => {
    preview.current = window.open("preview", "preview", "width=1000, height=1200")
  }

  const saveResume = () => {
    test("홍길동")
    alert("저장되었습니다!")
    console.log(userValue)
    localStorage.setItem('baiscValue', JSON.stringify(userValue))
  }

  const deleteResume = () => {
    alert("삭제되었습니다!")
    localStorage.removeItem('baiscValue')
  }

  return (
    <div className='ResumeCompleted'>
      <button onClick={opnePreview}>미리보기</button>
      <button onClick={saveResume}>이력서 저장하기</button>
      <button onClick={deleteResume}>삭제</button>
    </div>
  )
}

export default ResumeCompleted;