import { AddContext } from 'components/Data/AddState';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { inputBoxFocus, inputBoxBlur, ChkNum } from './Event/InputEvent'

/* 경력 */
const Career = () => {
  const { addCar, setAddCar } = useContext(AddContext)
  const [carEvent, setCarEvent] = useState(false)
  const nextId = useRef(0);

  // 저장된 데이터 불러오기
  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem("careerValue"))
    if (loadData !== null) {
      document.getElementById("회사명").value = loadData.회사명
      document.getElementById("입사년월").value = loadData.입사년월
      document.getElementById("퇴사년월").value = loadData.퇴사년월
      document.getElementById("직급").value = loadData.직급
      document.getElementById("직무").value = loadData.직무
      document.getElementById("연봉").value = loadData.연봉
      document.getElementById("재직중").checked = loadData.재직중
      if (loadData.재직중) document.getElementById("inputBox 퇴사년월").style.display = "none"
    }
  }, [])

  // 추가 항목 불러오기
  const addPlus = () => {
    const loadData = JSON.parse(localStorage.getItem("careerValue"))
    if (loadData !== null) {
      const plus = loadData.plus
      for(let i = 0; i < addCar.length; i++){
        if(plus[i] === undefined) break;
        document.getElementById("회사명" + addCar[i].id).value = plus[i].회사명
        document.getElementById("입사년월" + addCar[i].id).value = plus[i].입사년월
        document.getElementById("퇴사년월" + addCar[i].id).value = plus[i].퇴사년월
        document.getElementById("직급" + addCar[i].id).value = plus[i].직급
        document.getElementById("직무" + addCar[i].id).value = plus[i].직무
        document.getElementById("연봉" + addCar[i].id).value = plus[i].연봉
        document.getElementById("재직중" + addCar[i].id).checked = plus[i].재직중
        if (plus[i].재직중) document.getElementById("inputBox 퇴사년월" + addCar[i].id).style.display = "none"
      }
    }
  }

  // 경력 추가
  const addCarEvent = () => {
    const car = {
      id: "car" + nextId.current
    };

    setAddCar(addCar.concat(car));
    setCarEvent(true)
    nextId.current += 1;
  }

  // 경력 삭제
  const deleteCar = (e) => {
    setAddCar(addCar.filter((item) => (item.id !== e.target.id)))
    setCarEvent(true)
  }

  // 재직중 표시
  const inService = (e) => {
    const element = document.getElementById("inputBox 퇴사년월")
    if (e.target.checked) {
      element.style.display = "none"
    } else {
      element.style.display = "inline-block"
    }
  }

  // 추가 항목 재직중 표시
  const addInService = (e, id) => {
    const element = document.getElementById("inputBox 퇴사년월" + id)
    if (e.target.checked) {
      element.style.display = "none"
    } else {
      element.style.display = "inline-block"
    }
  }

  // 경력 추가 항목 렌더링
  const AddCarCreate = () => {
    if (carEvent) {
      return (
        addCar.map((item) => (
          <div className="addDiv" key={item.id}>
            <div className="row">
              <div className="inputBox 회사명" id={"inputBox 회사명" + item.id}>
                <span>회사명</span>
                <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"회사명" + item.id} type="text" placeholder="OO컴퍼니"></input>
              </div>
              <div className="inputBox 입사년월" id={"inputBox 입사년월" + item.id}>
                <span>입사년월</span>
                <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"입사년월" + item.id} type="text" placeholder="2002.03"></input>
              </div>
              <div className="inputBox 퇴사년월" id={"inputBox 퇴사년월" + item.id}>
                <span>퇴사년월</span>
                <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"퇴사년월" + item.id} type="text" placeholder="2006.02"></input>
              </div>
              <div className='checkBox' style={{ margin: "0" }}>
                <input onChange={(e) => (addInService(e, item.id))} type="checkbox" id={"재직중" + item.id}></input>
                <span>재직중</span>
                <button onClick={deleteCar} id={item.id}></button>
              </div>
            </div>

            <div className="row">
              <div className="inputBox 직무" id={"inputBox 직무" + item.id}>
                <span>직무</span>
                <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"직무" + item.id} type="text" placeholder="프론트엔드 개발"></input>
              </div>
              <div className="inputBox 직급" id={"inputBox 직급" + item.id}>
                <span>직급</span>
                <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"직급" + item.id} type="text" placeholder="과장"></input>
              </div>
              <div className="inputBox 연봉" id={"inputBox 연봉" + item.id}>
                <span>연봉</span>
                <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"연봉" + item.id} type="text" placeholder="4000"></input>
              </div>
            </div>
          </div>
        ))
      )
    }
  }

  return (
    <div className="basicInfo 숨김" id="경력" style={{ zIndex: 80 }}>

      <h2>경력
        <button onMouseDown={addCarEvent} onClick={addPlus} className='addButton'>추가하기+</button>
      </h2>

      <div className="row">
        <div className="inputBox 회사명" id="inputBox 회사명">
          <span>회사명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="회사명" type="text" placeholder="OO컴퍼니"></input>
        </div>
        <div className="inputBox 입사년월" id="inputBox 입사년월">
          <span>입사년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입사년월" type="text" placeholder="2002.03"></input>
        </div>
        <div className="inputBox 퇴사년월" id="inputBox 퇴사년월" style={{ display: "inline-block" }}>
          <span>퇴사년월</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="퇴사년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className='checkBox' style={{ margin: "0" }}>
          <input onChange={inService} type="checkbox" id="재직중"></input>
          <span>재직중</span>
        </div>
      </div>

      <div className="row">
        <div className="inputBox 직무" id="inputBox 직무">
          <span>직무</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="직무" type="text" placeholder="프론트엔드 개발"></input>
        </div>
        <div className="inputBox 직급" id="inputBox 직급">
          <span>직급</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="직급" type="text" placeholder="과장"></input>
        </div>
        <div className="inputBox 연봉" id="inputBox 연봉">
          <span>연봉</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="연봉" type="text" placeholder="4000"></input>
        </div>
      </div>

      {AddCarCreate()}

    </div>
  )
}

export default Career