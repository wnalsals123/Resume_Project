import React, { useEffect, useState, useRef } from 'react';
import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent';

const Edu1 = () => {
  return (
    <div>
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
    </div>
  )
}

const Edu2 = () => {
  const [noGed, setNoGed] = useState("inline-block")
  const [yesGed, setYesGed] = useState("none")
  const [학교명, 셋학교명] = useState("학교명")

  const GedChk = (e) => {
    const elemet = document.getElementById("학교명")
    if (e.target.checked) {
      setNoGed("none")
      setYesGed("inline-block")
      셋학교명("검정고시")
      elemet.value = "검정고시"
    } else {
      setNoGed("inline-block")
      setYesGed("none")
      셋학교명("학교명")
      elemet.value = ""
    }
  }

  return (
    <div>
      <div className="row">
        <div className="inputBox 학교명" id="inputBox 학교명">
          <span>{학교명}</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="학교명" type="text" placeholder="OO대학교"></input>
        </div>
        <div className="inputBox 입학년월" id="inputBox 입학년월" style={{ display: noGed }}>
          <span>입학년월</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입학년월" type="text" placeholder="2002.03"></input>
        </div>
        <div className="inputBox 졸업년월" id="inputBox 졸업년월" style={{ display: noGed }}>
          <span>졸업년월</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="졸업년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className="inputBox 합격년월" id="inputBox 합격년월" style={{ display: yesGed }}>
          <span>합격년월</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="합격년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className='checkBox'>
          <input onChange={GedChk} type="checkbox" id="GED"></input>
          <span>검정고시</span>
        </div>
      </div>
    </div>
  )
}

const Edu3 = () => {
  return (
    <div>
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

const Edu4 = () => {
  return (
    <div>
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

const Education = () => {
  const [addEdu, setAddEdu] = useState([])
  const [eduEvent, setEduEvent] = useState(false)
  const nextId = useRef(0);

  const addEduEvent = () => {
    const edu = {
      id: "edu" + nextId.current
    };

    setAddEdu(addEdu.concat(edu));
    setEduEvent(true)
    nextId.current += 1;
    console.log(eduEvent)
  }

  const deleteEdu = (e) => {
    setAddEdu(addEdu.filter((item) => (item.id !== e.target.id)))
    setEduEvent(true)
  }

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
      let disableBox = checkBox.filter((item) => (item.id !== e.target.id))
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

  const selectEdu = () => {
    switch (preCheck) {
      case 'checkBox1': return <Edu1 />
      case 'checkBox2': return <Edu2 />
      case 'checkBox3': return <Edu3 />
      case 'checkBox4': return <Edu4 />
      default: return <Edu1 />
    }
  }

  const addEduCreate = () => {
    if (eduEvent) return (
      addEdu.map((item) => (
        <div className="row" key={item.id}>
          <div className="inputBox 학교명" id={"inputBox 학교명" + item.id}>
            <span>학교명</span>
            <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"학교명" + item.id} type="text" placeholder="OO대학교"></input>
          </div>
          <div className="inputBox 입학년월" id={"inputBox 입학년월" + item.id}>
            <span>입학년월</span>
            <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"입학년월" + item.id} type="text" placeholder="2002.03"></input>
          </div>
          <div className="inputBox 졸업년월" id={"inputBox 졸업년월" + item.id}>
            <span>졸업년월</span>
            <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"졸업년월" + item.id} type="text" placeholder="2006.02"></input>
          </div>
          <button onClick={deleteEdu} id={item.id}>삭제</button>
        </div>
      ))
    )
  }

  useEffect(() => {
    const element = document.getElementById("checkBox1")
    element.checked = true
  }, [])

  return (
    <div className="basicInfo 숨김" id="학력">

      <h2>학력
        <button onClick={addEduEvent} className='addButton'>+</button>
        <div className='checkBoxWrap'>
          {checkBoxList}
        </div>
      </h2>

      {selectEdu()}
      {addEduCreate()}

    </div>
  )

}

export default Education