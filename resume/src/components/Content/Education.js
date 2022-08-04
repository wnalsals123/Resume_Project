import { AddContext } from 'components/Data/AddState';
import React, { useEffect, useState, useRef, useContext } from 'react';
import { inputBoxFocus, inputBoxBlur, ChkNum } from './Event/InputEvent';

const Edu1 = () => {
  return (
    <div>
      <div className="row">
        <div className="inputBox 학교명" id="inputBox 학교명">
          <span>학교명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="학교명" type="text" placeholder="OO중학교"></input>
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
  const [schoolName, setSchoolName] = useState("학교명")

  const GedChk = (e) => {
    if (e.target.checked) {
      document.getElementById("inputBox 입학년월").style.display = "none"
      document.getElementById("inputBox 졸업년월").style.display = "none"
      document.getElementById("inputBox 합격년월").style.display = "inline-block"
      document.getElementById("학교명").value = "검정고시"
      setSchoolName("검정고시")
    } else {
      document.getElementById("inputBox 입학년월").style.display = "inline-block"
      document.getElementById("inputBox 졸업년월").style.display = "inline-block"
      document.getElementById("inputBox 합격년월").style.display = "none"
      document.getElementById("학교명").value = ""
      setSchoolName("학교명")
    }
  }

  return (
    <div>
      <div className="row">
        <div className="inputBox 학교명" id="inputBox 학교명">
          <span>{schoolName}</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="학교명" type="text" placeholder="OO고등학교"></input>
        </div>
        <div className="inputBox 입학년월" id="inputBox 입학년월" style={{ display: "inline-block" }}>
          <span>입학년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입학년월" type="text" placeholder="2002.03"></input>
        </div>
        <div className="inputBox 졸업년월" id="inputBox 졸업년월" style={{ display: "inline-block" }}>
          <span>졸업년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="졸업년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className="inputBox 합격년월" id="inputBox 합격년월" style={{ display: "none" }}>
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
  const attending = (e) => {
    const elemet = document.getElementById("inputBox 졸업년월")
    if (e.target.checked) {
      elemet.style.display = "none"
      document.getElementById("졸업년월").value = "재학중"
    } else {
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

const Edu4 = () => {
  const attending = (e) => {
    const elemet = document.getElementById("inputBox 졸업년월")
    if (e.target.checked) {
      elemet.style.display = "none"
      document.getElementById("졸업년월").value = "재학중"
    } else {
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

  const [onLoad, setOnLoad] = useState(false)

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem("educationValue"))
    const element = loadData === null ? document.getElementById("EducheckBox1") : document.getElementById(loadData.학력ID)
    element.checked = true
    setPreCheck(element.id)
    setOnLoad(true)
  }, [])

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem("educationValue"))
    if (loadData !== null) {
      document.getElementById("학교명").value = loadData.학교명
      document.getElementById("입학년월").value = loadData.입학년월
      document.getElementById("졸업년월").value = loadData.졸업년월
      if(document.getElementById("전공명") !== null) document.getElementById("전공명").value = loadData.전공명
      if(document.getElementById("이수학점") !== null) document.getElementById("이수학점").value = loadData.이수학점
      if(document.getElementById("학점") !== null) document.getElementById("학점").value = loadData.학점
      if(document.getElementById("총점") !== null) document.getElementById("총점").checked = loadData.총점
      if(document.getElementById("합격년월") !== null) document.getElementById("합격년월").checked = loadData.합격년월
      if(document.getElementById("GED") !== null) document.getElementById("GED").checked = loadData.검정고시
      if (loadData.졸업년월 === "재학중") {
        if(document.getElementById("재학중") !== null) document.getElementById("재학중").checked = true
        document.getElementById("inputBox 졸업년월").style.display = "none"
      }
      if (loadData.검정고시) {
        if(document.getElementById("입학년월") !== null) document.getElementById("inputBox 입학년월").style.display = "none"
        if(document.getElementById("합격년월") !== null) document.getElementById("inputBox 합격년월").style.display = "inline-block"
        document.getElementById("inputBox 졸업년월").style.display = "none"
      }
    }
  }, [onLoad])

  const addPlus = () => {
    const loadData = JSON.parse(localStorage.getItem("educationValue"))
    if (loadData !== null) {
      const plus = loadData.plus
      for(let i = 0; i < addEdu.length; i++){
        if(plus[i] === undefined) break;
        document.getElementById("학력유형" + addEdu[i].id).value = plus[i].학력유형
        document.getElementById("학교명" + addEdu[i].id).value = plus[i].학교명
        document.getElementById("입학년월" + addEdu[i].id).value = plus[i].입학년월
        document.getElementById("졸업년월" + addEdu[i].id).value = plus[i].졸업년월
      }
    }
  }

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
  // 학력유형 드롭박스
  const ShowDrop = (id) => {
    document.getElementById("학력유형드롭박스" + id).style.display = 'block'
  }

  const HideDrop = (id) => {
    document.getElementById("학력유형드롭박스" + id).style.display = 'none'
  }

  const SelectValue = (id, item) => {
    document.getElementById("학력유형" + id).value = item
    HideDrop(id)
  }

  const eduTypeBox = (id) => {
    return (
      <ul>
        <li><button onMouseDown={() => { SelectValue(id, '고등학교') }}>고등학교</button></li>
        <li><button onMouseDown={() => { SelectValue(id, '중학교') }}>중학교</button></li>
        <li><button onMouseDown={() => { SelectValue(id, '초등학교') }}>초등학교</button></li>
        <li><button onMouseDown={() => { SelectValue(id, '') }}>직접입력</button></li>
      </ul>
    )
  }

  const AddEduCreate = () => {
    var dropboxZindex = 90
    if (eduEvent) return (
      addEdu.map((item) => (
        <div className="addDiv" key={item.id}>
          <div className="row" style={{ zIndex: dropboxZindex-- }}>
            <div onClick={() => { ShowDrop(item.id) }} className="inputBox 학력유형" id={"inputBox 학력유형" + item.id}>
              <span>학력유형</span>
              <input onFocus={inputBoxFocus} onBlur={(e) => { inputBoxBlur(e); HideDrop(item.id) }} id={"학력유형" + item.id} type="text" placeholder="고등학교"></input>
              <div className='dropBox' id={"학력유형드롭박스" + item.id} style={{ display: 'none' }}>{eduTypeBox(item.id)}</div>
            </div>
            <div className="inputBox 학교명" id={"inputBox 학교명" + item.id} style={{width: '236px'}}>
              <span>학교명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"학교명" + item.id} type="text" placeholder="OO고등학교"></input>
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

  return (
    <div className="basicInfo 숨김" id="학력" style={{ zIndex: 90 }}>

      <h2>학력
        <button onMouseDown={addEduEvent} onClick={addPlus} className='addButton'>+</button>
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