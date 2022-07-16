import React, { useState, useRef } from 'react';
import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const Internship = () => {
  const [addInter, setaddInter] = useState([])
  const [interEvent, setInterEvent] = useState(false)
  const nextId = useRef(0);

  const addInterEvent = () => {
    const inter = {
      id: "inter" + nextId.current
    };

    setaddInter(addInter.concat(inter));
    setInterEvent(true)
    nextId.current += 1;
    console.log(interEvent)
  }

  const deleteInter = (e) => {
    setaddInter(addInter.filter((item) => (item.id !== e.target.id)))
    setInterEvent(true)
  }

  const addInterCreate = () => {
    if (interEvent) return (
      addInter.map((item) => (
        <div className="addDiv" key={item.id}>
          <div className="row">
            <div className="inputBox 인턴·대외활동명" id={"inputBox 인턴·대외활동명" + item.id}>
              <span>인턴·대외활동명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"인턴·대외활동명" + item.id} type="text" placeholder="인턴"></input>
            </div>
            <div className="inputBox 소속단체명" id={"inputBox 소속단체명" + item.id}>
              <span>소속단체명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"소속단체명" + item.id} type="text" placeholder="인턴컴퍼니"></input>
            </div>
            <div className="inputBox 시작년월" id={"inputBox 시작년월" + item.id}>
              <span>시작년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"시작년월" + item.id} type="text" placeholder="2006.02"></input>
            </div>
            <div className="inputBox 종료년월" id={"inputBox 종료년월" + item.id}>
              <span>종료년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"종료년월" + item.id} type="text" placeholder="2006.02"></input>
            </div>
            <button onClick={deleteInter} id={item.id}>삭제</button>
          </div>

          <div className="row">
            <div className="inputBox 활동내용" id={"inputBox 활동내용" + item.id}>
              <span>활동내용</span>
              <textarea onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"활동내용" + item.id} type="text" placeholder="내용기입"></textarea>
            </div>
          </div>
        </div>
      ))
    )
  }


  return (
    <div className="basicInfo 숨김" id="인턴·대외활동">

      <h2>인턴·대외활동
        <button onClick={addInterEvent} className='addButton'>+</button>
      </h2>

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
          <textarea onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="활동내용" type="text" placeholder="내용기입"></textarea>
        </div>
      </div>

      {addInterCreate()}

    </div>
  )
}

export default Internship