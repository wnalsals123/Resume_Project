import { useEffect } from 'react'
import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

/* 자기소개서 */
const Introduction = () => {
  // 저장된 데이터 불러오기
  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem("introductionValue"))
    if (loadData !== null) {
      document.getElementById("자기소개서내용").value = loadData.자기소개서내용
    }
  }, [])

  // 활동 내용 박스 길이 자동 조절
  const autoResizeTextarea = (e) => {
    e.target.style.height = '144px'
    e.target.style.height = (e.target.scrollHeight + 25) + "px"
  };

  return (
    <div className="basicInfo 숨김" id="자기소개서" style={{zIndex: 30}}>

      <h2>자기소개서</h2>

      <div className="row">
        <div className="inputBox 자기소개서내용" id="inputBox 자기소개서내용">
          <textarea onClick={autoResizeTextarea} onKeyDown={autoResizeTextarea} onKeyUp={autoResizeTextarea} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="자기소개서내용" type="text" placeholder="내용기입"></textarea>
        </div>
      </div>

    </div>
  )
}

export default Introduction