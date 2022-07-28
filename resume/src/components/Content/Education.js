import { AddContext } from 'components/Data/AddState';
import React, { useEffect, useState, useRef, useContext } from 'react';
import { inputBoxFocus, inputBoxBlur, ChkNum } from './Event/InputEvent';

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
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입학년월" type="text" placeholder="2002.03"></input>
        </div>
        <div className="inputBox 졸업년월" id="inputBox 졸업년월">
          <span>졸업년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="졸업년월" type="text" placeholder="2006.02"></input>
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
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입학년월" type="text" placeholder="2002.03"></input>
        </div>
        <div className="inputBox 졸업년월" id="inputBox 졸업년월" style={{ display: noGed }}>
          <span>졸업년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="졸업년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className="inputBox 합격년월" id="inputBox 합격년월" style={{ display: yesGed }}>
          <span>합격년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="합격년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className='checkBox' style={{ margin: "0" }}>
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
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입학년월" type="text" placeholder="2002.03"></input>
        </div>
        <div className="inputBox 졸업년월" id="inputBox 졸업년월">
          <span>졸업년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="졸업년월" type="text" placeholder="2006.02"></input>
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
  const attending = (e) => {
    const elemet = document.getElementById("inputBox 졸업년월")
    if (e.target.checked) {
      elemet.style.display = "none"
      document.getElementById("졸업년월").value = "재학중"
    }else{
      elemet.style.display = "inline-block"
      document.getElementById("졸업년월").value = ""
    }
  }


  return (
    <div>
      <div className="row">
        <div className="inputBox 학교명" id="inputBox 학교명">
          <span>학교명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="학교명" type="text" placeholder="OO대학교"></input>
        </div>
        <div className="inputBox 입학년월" id="inputBox 입학년월">
          <span>입학년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입학년월" type="text" placeholder="2002.03"></input>
        </div>
        <div className="inputBox 졸업년월" id="inputBox 졸업년월">
          <span>졸업년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="졸업년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className='checkBox' style={{ margin: "0" }}>
          <input onChange={attending} type="checkbox" id="재학중"></input>
          <span>재학중</span>
        </div>
      </div>

      <div className="row">
        <div className="inputBox 전공명" id="inputBox 전공명">
          <span>전공명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="전공명" type="text" placeholder="컴퓨터공학과"></input>
        </div>
        <div className="inputBox 이수학점" id="inputBox 이수학점">
          <span>이수학점</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="이수학점" type="text" placeholder="140"></input>
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
  const { addEdu, setAddEdu } = useContext(AddContext)
  const [eduEvent, setEduEvent] = useState(false)
  const nextId = useRef(0);

  const addEduEvent = () => {
    const edu = {
      id: "edu" + nextId.current
    };

    setAddEdu(addEdu.concat(edu));
    setEduEvent(true)
    nextId.current += 1;
  }

  const deleteEdu = (e) => {
    setAddEdu(addEdu.filter((item) => (item.id !== e.target.id)))
    setEduEvent(true)
  }

  const AddEduCreate = () => {
    if (eduEvent) return (
      addEdu.map((item) => (
        <div className="addDiv" key={item.id}>
          <div className="row">
            <div className="inputBox 학교명" id={"inputBox 학교명" + item.id}>
              <span>학교명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"학교명" + item.id} type="text" placeholder="OO대학교"></input>
            </div>
            <div className="inputBox 입학년월" id={"inputBox 입학년월" + item.id}>
              <span>입학년월</span>
              <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"입학년월" + item.id} type="text" placeholder="2002.03"></input>
            </div>
            <div className="inputBox 졸업년월" id={"inputBox 졸업년월" + item.id}>
              <span>졸업년월</span>
              <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"졸업년월" + item.id} type="text" placeholder="2006.02"></input>
            </div>
            <button onClick={deleteEdu} id={item.id}></button>
          </div>
        </div>
      ))
    )
  }

  const EducheckBox = [
    { id: "EducheckBox1", name: "고졸 미만" },
    { id: "EducheckBox2", name: "고졸" },
    { id: "EducheckBox3", name: "대졸(2,3년)" },
    { id: "EducheckBox4", name: "대졸(4년)" },
  ]

  const [preCheck, setPreCheck] = useState("")

  const checkBoxChange = (e) => {
    if (e.target.id === preCheck) {
      e.target.checked = true
      console.log(e.target.checked)
    } else {
      const disableBox = EducheckBox.filter((item) => (item.id !== e.target.id))
      disableBox.map((item) => (document.getElementById(item.id).checked = false))
      setPreCheck(e.target.id)
    }
  }

  const EducheckBoxList = EducheckBox.map((item) => (
    <div key={item.id} className='checkBox'>
      <input onChange={checkBoxChange} type="checkbox" id={item.id}></input>
      <span>{item.name}</span>
    </div>
  ))

  const SelectEdu = () => {
    switch (preCheck) {
      case 'EducheckBox1': return <Edu1 />
      case 'EducheckBox2': return <Edu2 />
      case 'EducheckBox3': return <Edu3 />
      case 'EducheckBox4': return <Edu4 />
      default: return <Edu1 />
    }
  }

  useEffect(() => {
    const element = document.getElementById("EducheckBox1")
    element.checked = true
    setPreCheck(element.id)
  }, [])

  return (
    <div className="basicInfo 숨김" id="학력" style={{zIndex: 90}}>

      <h2>학력
        <button onClick={addEduEvent} className='addButton'>+</button>
        <div className='checkBoxWrap'>
          {EducheckBoxList}
        </div>
      </h2>

      {SelectEdu()}
      {AddEduCreate()}

    </div>
  )

}

export default Education