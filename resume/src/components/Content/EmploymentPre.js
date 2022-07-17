import { useState } from 'react'
import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const EmploymentPre = () => {
  const [milVisible, setMilVisible] = useState("none")
  const [disAbility, setDisAbility] = useState("none")

  const MilitaryBox = () => {
    return (
      <ul>
        <li><button>군필</button></li>
        <li><button>미필</button></li>
        <li><button>면제</button></li>
        <li><button>기타</button></li>
      </ul>
    )
  }

  const showMilRow = (e) => {
    if(e.target.checked)
      setMilVisible("block")
    else
      setMilVisible("none")
  }

  const showDisRow = (e) => {
    if(e.target.checked)
      setDisAbility("block")
    else
      setDisAbility("none")
  }

  return (
    <div className="basicInfo 숨김" id="병역·취업우대">

      <h2>병역·취업우대</h2>

      <div style={{margin: "20px 0px 20px 0px"}}>
        <div className='checkBox'>
          <input type="checkbox"></input>
          <span>보훈대상</span>
        </div>
        <div className='checkBox'>
          <input type="checkbox"></input>
          <span>취업보호 대상</span>
        </div>
        <div className='checkBox'>
          <input type="checkbox"></input>
          <span>고용지원금 대상</span>
        </div>
        <div className='checkBox'>
          <input onChange={showDisRow} type="checkbox"></input>
          <span>장애</span>
        </div>
        <div className='checkBox'>
          <input onChange={showMilRow} type="checkbox"></input>
          <span>병역</span>
        </div>
      </div>

      <div className='row' style={{ display: disAbility}}>
        <div className="inputBox 장애" id="inputBox 장애" >
          <span>장애</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="장애" type="text" placeholder="1급"></input>
          <div style={{ display: "none" }}><MilitaryBox></MilitaryBox></div>
        </div>
      </div>

      <div className='row' style={{ display: milVisible}}>
        <div className="inputBox 병역" id="inputBox 병역" >
          <span>병역</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="병역" type="text" placeholder="군필"></input>
          <div style={{ display: "none" }}><MilitaryBox></MilitaryBox></div>
        </div>
      </div>

    </div>
  )
}

export default EmploymentPre