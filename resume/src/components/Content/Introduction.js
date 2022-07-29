import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const Introduction = () => {
  const autoResizeTextarea = (e) => {
    e.target.style.height = '169px'
    e.target.style.height = e.target.scrollHeight + "px"
  };

  return (
    <div className="basicInfo 숨김" id="자기소개서" style={{zIndex: 30}}>

      <h2>자기소개서</h2>

      <div className="row">
        <div className="inputBox 자기소개서내용" id="inputBox 자기소개서내용">
          <span>자기소개서</span>
          <textarea onKeyDown={autoResizeTextarea} onKeyUp={autoResizeTextarea} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="자기소개서내용" type="text" placeholder="내용기입"></textarea>
        </div>
      </div>

    </div>
  )
}

export default Introduction