import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const Internship = () => {
  return (
    <div className="basicInfo 숨김" id="인턴·대외활동">

      <h2>인턴·대외활동</h2>

      <div className="row">
        <div className="inputBox 인턴·대외활동명" id="inputBox 인턴·대외활동명">
          <span>인턴·대외활동명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="인턴·대외활동명" type="text" placeholder="인턴"></input>
        </div>
        <div className="inputBox 소속단체명" id="inputBox 소속단체명">
          <span>소속단체명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="소속단체명" type="text" placeholder="인턴컴퍼니"></input>
        </div>
        <div className="inputBox 시작년월" id="inputBox 시작년월">
          <span>시작년월</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="시작년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className="inputBox 종료년월" id="inputBox 종료년월">
          <span>종료년월</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="종료년월" type="text" placeholder="2006.02"></input>
        </div>
      </div>

      <div className="row">
        <div className="inputBox 활동내용" id="inputBox 활동내용">
          <span>활동내용</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="활동내용" type="text" placeholder="내용기입"></input>
        </div>
      </div>

    </div>
  )
}

export default Internship