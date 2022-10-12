import { AddContext } from 'components/Data/AddState';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { inputBoxFocus, inputBoxBlur, ChkNum } from './Event/InputEvent'

/* 인턴대외활동 */
const Internship = () => {
  const { addInter, setaddInter } = useContext(AddContext)
  const [interEvent, setInterEvent] = useState(false)
  const nextId = useRef(0);

  // 저장된 데이터 불러오기
  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem("internshipValue"))
    if (loadData !== null) {
      document.getElementById("인턴·대외활동명").value = loadData.인턴대외활동명
      document.getElementById("소속단체명").value = loadData.소속단체명
      document.getElementById("시작년월").value = loadData.시작년월
      document.getElementById("종료년월").value = loadData.종료년월
      document.getElementById("활동내용").value = loadData.활동내용
    }
  }, [])

  // 추가 항목 불러오기
  const addPlus = () => {
    const loadData = JSON.parse(localStorage.getItem("internshipValue"))
    if (loadData !== null) {
      const plus = loadData.plus
      for(let i = 0; i < addInter.length; i++){
        if(plus[i] === undefined) break;
        document.getElementById("인턴·대외활동명" + addInter[i].id).value = plus[i].인턴대외활동명
        document.getElementById("소속단체명" + addInter[i].id).value = plus[i].소속단체명
        document.getElementById("시작년월" + addInter[i].id).value = plus[i].시작년월
        document.getElementById("종료년월" + addInter[i].id).value = plus[i].종료년월
        document.getElementById("활동내용" + addInter[i].id).value = plus[i].활동내용
      }
    }
  }

  // 인턴대외활동 추가
  const addInterEvent = () => {
    const inter = {
      id: "inter" + nextId.current
    };

    setaddInter(addInter.concat(inter));
    setInterEvent(true)
    nextId.current += 1;
  }

  // 인턴대외활동 삭제
  const deleteInter = (e) => {
    setaddInter(addInter.filter((item) => (item.id !== e.target.id)))
    setInterEvent(true)
  }

  // 활동 내용 박스 길이 자동 조절
  const autoResizeTextarea = (e) => {
    e.target.style.height = '144px'
    e.target.style.height = (e.target.scrollHeight + 25) + "px"
  };

  // 인턴대외활동 추가 항목 렌더링
  const AddInterCreate = () => {
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
              <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"시작년월" + item.id} type="text" placeholder="2006.02"></input>
            </div>
            <div className="inputBox 종료년월" id={"inputBox 종료년월" + item.id}>
              <span>종료년월</span>
              <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"종료년월" + item.id} type="text" placeholder="2006.02"></input>
            </div>
            <button onClick={deleteInter} id={item.id}></button>
          </div>

          <div className="row">
            <div className="inputBox 활동내용" id={"inputBox 활동내용" + item.id}>
              <span>활동내용</span>
              <textarea onClick={autoResizeTextarea} onKeyDown={autoResizeTextarea} onKeyUp={autoResizeTextarea} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"활동내용" + item.id} type="text" placeholder="내용기입"></textarea>
            </div>
          </div>
        </div>
      ))
    )
  }

  return (
    <div className="basicInfo 숨김" id="인턴·대외활동" style={{zIndex: 50}}>

      <h2>인턴·대외활동
        <button onMouseDown={addInterEvent} onClick={addPlus} className='addButton'>추가하기+</button>
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
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="시작년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className="inputBox 종료년월" id="inputBox 종료년월">
          <span>종료년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="종료년월" type="text" placeholder="2006.02"></input>
        </div>
      </div>

      <div className="row">
        <div className="inputBox 활동내용" id="inputBox 활동내용">
          <span>활동내용</span>
          <textarea onClick={autoResizeTextarea} onKeyDown={autoResizeTextarea} onKeyUp={autoResizeTextarea} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="활동내용" type="text" placeholder="내용기입"></textarea>
        </div>
      </div>

      {AddInterCreate()}

    </div>
  )
}

export default Internship