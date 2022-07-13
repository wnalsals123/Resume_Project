import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const LanguageStudy = () => {
  return(
    <div className="basicInfo 숨김" id="어학">

    <h2>어학</h2>

    <div className="row">
      <div className="inputBox 외국어명" id="inputBox 외국어명">
        <span>외국어명</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="외국어명" type="text" placeholder="영어"></input>
      </div>
      <div className="inputBox 시험명" id="inputBox 시험명">
        <span>시험명</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="시험명" type="text" placeholder="TOEIC"></input>
      </div>
      <div className="inputBox 취득년월-어학" id="inputBox 취득년월-어학">
        <span>취득년월</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="취득년월-어학" type="text" placeholder="2006.02"></input>
      </div>
    </div>

  </div>
  )
}

export default LanguageStudy