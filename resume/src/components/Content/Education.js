import React, { useState } from 'react';
import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const Education = () => {
  const checkBox = [
    { id: "checkBox1", name: "고졸 미만" },
    { id: "checkBox2", name: "고졸" },
    { id: "checkBox3", name: "대졸(2,3년)" },
    { id: "checkBox4", name: "대졸(4년)" },
  ]

  const [preCheck, setPreCheck] = useState("")

  const checkBoxChange = (e) => {
    console.log("pre: " + preCheck, "curr: " + e.target.id, e.target.checked)

    if (e.target.id === preCheck) {
      e.target.checked = true
      console.log(e.target.checked)
    } else {
      let disableBox = checkBox.filter((item) => (e.target.id !== item.id))
      disableBox.map((item) => (document.getElementById(item.id).checked = false))
      setPreCheck(e.target.id)
    }
  }

  const checkBoxList = checkBox.map((item) => (
    <div key={item.id} className='checkBox'>
      <input onChange={checkBoxChange} type="checkbox" id={item.id}></input>
      <span>{item.name}</span>
    </div>
  ))

  return (
    <div className="basicInfo 숨김" id="학력">

      <h2>학력
        <div className='checkBoxWrap'>
          {checkBoxList}
        </div>
      </h2>

      <div className="row">
        <div className="inputBox 학교명" id="inputBox 학교명">
          <span>학교명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="학교명" type="text" placeholder="OO대학교"></input>
        </div>
        <div className="inputBox 입학년월" id="inputBox 입학년월">
          <span>입학년월</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입학년월" type="text" placeholder="2002.03"></input>
        </div>
        <div className="inputBox 졸업년월" id="inputBox 졸업년월">
          <span>졸업년월</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="졸업년월" type="text" placeholder="2006.02"></input>
        </div>
      </div>

      <div className="row">
        <div className="inputBox 전공명" id="inputBox 전공명">
          <span>전공명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="전공명" type="text" placeholder="컴퓨터공학과"></input>
        </div>
        <div className="inputBox 학점" id="inputBox 학점">
          <span>학점</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="학점" type="text" placeholder="4.5"></input>
        </div>
        <div className="inputBox 총점" id="inputBox 총점">
          <span>총점</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="총점" type="text" placeholder="4.5"></input>
        </div>
      </div>

    </div>
  )

}

export default Education