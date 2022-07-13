import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const Certificate = () => {
  return(
    <div className="basicInfo 숨김" id="자격증">

    <h2>자격증</h2>

    <div className="row">
      <div className="inputBox 자격증명" id="inputBox 자격증명">
        <span>자격증명</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="자격증명" type="text" placeholder="정보처리기사"></input>
      </div>
      <div className="inputBox 발행처" id="inputBox 발행처">
        <span>발행처</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="발행처" type="text" placeholder="한국산업인력공단"></input>
      </div>
      <div className="inputBox 취득년월-자격증" id="inputBox 취득년월-자격증">
        <span>취득년월</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="취득년월-자격증" type="text" placeholder="2006.02"></input>
      </div>
    </div>

  </div>
  )
}

export default Certificate