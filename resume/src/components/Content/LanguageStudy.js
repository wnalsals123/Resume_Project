import { AddContext } from 'components/Data/AddState';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { inputBoxFocus, inputBoxBlur, ChkNum } from './Event/InputEvent'

/* 어학 */
const LanguageStudy = () => {
  const { addLan, setAddLan } = useContext(AddContext)
  const [lanEvent, setLanEvent] = useState(false)
  const nextId = useRef(0);

  // 저장된 데이터 불러오기
  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem("languageStudyValue"))
    if (loadData !== null) {
      document.getElementById("어학명").value = loadData.어학명
      document.getElementById("급수점수").value = loadData.급수점수
      document.getElementById("취득년월-어학").value = loadData.취득년월어학
    }
  }, [])

  // 추가 항목 불러오기
  const addPlus = () => {
    const loadData = JSON.parse(localStorage.getItem("languageStudyValue"))
    if (loadData !== null) {
      const plus = loadData.plus
      for(let i = 0; i < addLan.length; i++){
        if(plus[i] === undefined) break;
        document.getElementById("어학명" + addLan[i].id).value = plus[i].어학명
        document.getElementById("급수점수" + addLan[i].id).value = plus[i].급수점수
        document.getElementById("취득년월-어학" + addLan[i].id).value = plus[i].취득년월어학
      }
    }
  }

  // 어학 추가
  const addLanEvent = () => {
    const lan = {
      id: "lan" + nextId.current
    };

    setAddLan(addLan.concat(lan));
    setLanEvent(true)
    nextId.current += 1;
  }

  // 어학 삭제
  const deleteLan = (e) => {
    setAddLan(addLan.filter((item) => (item.id !== e.target.id)))
    setLanEvent(true)
  }

  // 어학 추가 항목 렌더링
  const AddLanCreate = () => {
    if (lanEvent) return (
      addLan.map((item) => (
        <div className="addDiv" key={item.id}>
          <div className="row">
            <div className="inputBox 어학명" id={"inputBox 어학명" + item.id}>
              <span>어학명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"어학명" + item.id} type="text" placeholder="TOEIC"></input>
            </div>
            <div className="inputBox 급수점수" id={"inputBox 급수점수" + item.id}>
              <span>급수/점수</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"급수점수" + item.id} type="text" placeholder="990"></input>
            </div>
            <div className="inputBox 취득년월-어학" id={"inputBox 취득년월-어학" + item.id}>
              <span>취득년월</span>
              <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"취득년월-어학" + item.id} type="text" placeholder="2006.02"></input>
            </div>
            <button onClick={deleteLan} id={item.id}></button>
          </div>
        </div>
      ))
    )
  }

  return (
    <div className="basicInfo 숨김" id="어학" style={{zIndex: 60}}>

      <h2>어학
        <button onMouseDown={addLanEvent} onClick={addPlus} className='addButton'>추가하기+</button>
      </h2>

      <div className="row">
        <div className="inputBox 어학명" id="inputBox 어학명">
          <span>어학명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="어학명" type="text" placeholder="TOEIC"></input>
        </div>
        <div className="inputBox 급수점수" id="inputBox 급수점수">
          <span>급수/점수</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="급수점수" type="text" placeholder="990"></input>
        </div>
        <div className="inputBox 취득년월-어학" id="inputBox 취득년월-어학">
          <span>취득년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="취득년월-어학" type="text" placeholder="2006.02"></input>
        </div>
      </div>

      {AddLanCreate()}

    </div>
  )
}

export default LanguageStudy