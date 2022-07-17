import React, { useState, useRef } from 'react';
import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const LanguageStudy = () => {
  const [addLan, setAddLan] = useState([])
  const [lanEvent, setLanEvent] = useState(false)
  const nextId = useRef(0);

  const addLanEvent = () => {
    const lan = {
      id: "lan" + nextId.current
    };

    setAddLan(addLan.concat(lan));
    setLanEvent(true)
    nextId.current += 1;
    console.log(lanEvent)
  }

  const deleteLan = (e) => {
    setAddLan(addLan.filter((item) => (item.id !== e.target.id)))
    setLanEvent(true)
  }

  const AddLanCreate = () => {
    if (lanEvent) return (
      addLan.map((item) => (
        <div className="addDiv" key={item.id}>
          <div className="row">
            <div className="inputBox 외국어명" id={"inputBox 외국어명" + item.id}>
              <span>외국어명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"외국어명" + item.id} type="text" placeholder="영어"></input>
            </div>
            <div className="inputBox 시험명" id={"inputBox 시험명" + item.id}>
              <span>시험명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"시험명" + item.id} type="text" placeholder="TOEIC"></input>
            </div>
            <div className="inputBox 취득년월-어학" id={"inputBox 취득년월-어학" + item.id}>
              <span>취득년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"취득년월-어학" + item.id} type="text" placeholder="2006.02"></input>
            </div>
            <button onClick={deleteLan} id={item.id}>삭제</button>
          </div>
        </div>
      ))
    )
  }

  return (
    <div className="basicInfo 숨김" id="어학">

      <h2>어학
        <button onClick={addLanEvent} className='addButton'>+</button>
      </h2>

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

      <AddLanCreate/>

    </div>
  )
}

export default LanguageStudy