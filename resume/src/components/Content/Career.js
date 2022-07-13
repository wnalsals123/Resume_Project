import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const Career = () => {
  return(
    <div className="basicInfo 숨김" id="경력">

    <h2>경력
      <div className='checkBoxWrap'>
        <div className='checkBox'>
          <input type="checkbox"></input>
          <span>재직중</span>
        </div>
      </div>
    </h2>

    <div className="row">
      <div className="inputBox 회사명" id="inputBox 회사명">
        <span>회사명</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="회사명" type="text" placeholder="OO컴퍼니"></input>
      </div>
      <div className="inputBox 입사년월" id="inputBox 입사년월">
        <span>입사년월</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입사년월" type="text" placeholder="2002.03"></input>
      </div>
      <div className="inputBox 퇴사년월" id="inputBox 퇴사년월">
        <span>퇴사년월</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="퇴사년월" type="text" placeholder="2006.02"></input>
      </div>
    </div>

    <div className="row">
      <div className="inputBox 직급" id="inputBox 직급">
        <span>직급</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="직급" type="text" placeholder="과장"></input>
      </div>
      <div className="inputBox 직무" id="inputBox 직무">
        <span>직무</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="직무" type="text" placeholder="프론트엔드 개발"></input>
      </div>
      <div className="inputBox 연봉" id="inputBox 연봉">
        <span>연봉</span>
        <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="연봉" type="text" placeholder="4000"></input>
      </div>
    </div>

  </div>
  )
}

export default Career