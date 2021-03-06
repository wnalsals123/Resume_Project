import { AddContext } from 'components/Data/AddState';
import React, { useState, useRef, useContext } from 'react';
import { inputBoxFocus, inputBoxBlur, ChkNum } from './Event/InputEvent'

const Certificate = () => {
  const { addCer, setAddCer } = useContext(AddContext)
  const [cerEvent, setCerEvent] = useState(false)
  const nextId = useRef(0);

  const addCerEvent = () => {
    const cer = {
      id: "cer" + nextId.current
    };

    setAddCer(addCer.concat(cer));
    setCerEvent(true)
    nextId.current += 1;
  }

  const deleteCer = (e) => {
    setAddCer(addCer.filter((item) => (item.id !== e.target.id)))
    setCerEvent(true)
  }

  const AddCerCreate = () => {
    if (cerEvent) return (
      addCer.map((item) => (
        <div className="addDiv" key={item.id}>
          <div className="row">
            <div className="inputBox 자격증명" id={"inputBox 자격증명" + item.id}>
              <span>자격증명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"자격증명" + item.id} type="text" placeholder="정보처리기사"></input>
            </div>
            <div className="inputBox 발행처" id={"inputBox 발행처" + item.id}>
              <span>발행처</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"발행처"  + item.id} type="text" placeholder="한국산업인력공단"></input>
            </div>
            <div className="inputBox 취득년월-자격증" id={"inputBox 취득년월-자격증" + item.id}>
              <span>취득년월</span>
              <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"취득년월-자격증"  + item.id} type="text" placeholder="2006.02"></input>
            </div>
            <button onClick={deleteCer} id={item.id}></button>
          </div>
        </div>
      ))
    )
  }

  return (
    <div className="basicInfo 숨김" id="자격증" style={{zIndex: 70}}>

      <h2>자격증
        <button onClick={addCerEvent} className='addButton'>+</button>
      </h2>

      <div className="row">
        <div className="inputBox 자격증명" id="inputBox 자격증명">
          <span>자격증명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="자격증명" type="text" placeholder="정보처리기사"></input>
        </div>
        <div className="inputBox 발행처" id="inputBox 발행처">
          <span>발행처</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="발행처" type="text" placeholder="한국산업인력공단"></input>
        </div>
        <div className="inputBox 취득년월-자격증" id="inputBox 취득년월-자격증">
          <span>취득년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="취득년월-자격증" type="text" placeholder="2006.02"></input>
        </div>
      </div>

      {AddCerCreate()}

    </div>
  )
}

export default Certificate