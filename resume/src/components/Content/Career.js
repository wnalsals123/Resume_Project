import React, { useState, useRef } from 'react';
import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'

const Career = () => {
  const [addCar, setAddCar] = useState([])
  const [carEvent, setCarEvent] = useState(false)
  const nextId = useRef(0);

  const addCarEvent = () => {
    const car = {
      id: "car" + nextId.current
    };

    setAddCar(addCar.concat(car));
    setCarEvent(true)
    nextId.current += 1;
    console.log(carEvent)
  }

  const deleteCar = (e) => {
    setAddCar(addCar.filter((item) => (item.id !== e.target.id)))
    setCarEvent(true)
  }

  const inService = (e) => {
    const element = document.getElementById("inputBox 퇴사년월")
    if(e.target.checked) {
      element.style.display = "none"
    } else {
      element.style.display = "inline-block"
    }
    console.log(element)
  }

  const addInService = (e) => {
    const element = document.getElementById("inputBox 퇴사년월" + e.target.id)
    if(e.target.checked) {
      element.style.display = "none"
    } else {
      element.style.display = "inline-block"
    }
  }

  const addCarCreate = () => {
    if (carEvent) return (
      addCar.map((item) => (
        <div className="addDiv" key={item.id}>
          <div className="row">
            <div className="inputBox 회사명" id={"inputBox 회사명" + item.id}>
              <span>회사명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"회사명" + item.id} type="text" placeholder="OO컴퍼니"></input>
            </div>
            <div className="inputBox 입사년월" id={"inputBox 입사년월" + item.id}>
              <span>입사년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"입사년월" + item.id} type="text" placeholder="2002.03"></input>
            </div>
            <div className="inputBox 퇴사년월" id={"inputBox 퇴사년월" + item.id}>
              <span>퇴사년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"퇴사년월"  + item.id} type="text" placeholder="2006.02"></input>
            </div>
            <div className='checkBox' style={{ margin: "0" }}>
              <input onChange={addInService} type="checkbox" id={item.id}></input>
              <span>재직중</span>
              <button onClick={deleteCar} id={item.id}>삭제</button>
            </div>
          </div>

          <div className="row">
            <div className="inputBox 직급" id={"inputBox 직급" + item.id}>
              <span>직급</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"직급" + item.id} type="text" placeholder="과장"></input>
            </div>
            <div className="inputBox 직무" id={"inputBox 직무" + item.id}>
              <span>직무</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id={"직무" + item.id} type="text" placeholder="프론트엔드 개발"></input>
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

  return (
    <div className="basicInfo 숨김" id="경력">

      <h2>경력
        <button onClick={addCarEvent} className='addButton'>+</button>
      </h2>

      <div className="row">
        <div className="inputBox 회사명" id="inputBox 회사명">
          <span>회사명</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="회사명" type="text" placeholder="OO컴퍼니"></input>
        </div>
        <div className="inputBox 입사년월" id="inputBox 입사년월">
          <span>입사년월</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입사년월" type="text" placeholder="2002.03"></input>
        </div>
        <div className="inputBox 퇴사년월" id="inputBox 퇴사년월">
          <span>퇴사년월</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="퇴사년월" type="text" placeholder="2006.02"></input>
        </div>
        <div className='checkBox' style={{ margin: "0" }}>
          <input onChange={inService} type="checkbox"></input>
          <span>재직중</span>
        </div>
      </div>

      <div className="row">
        <div className="inputBox 직급" id="inputBox 직급">
          <span>직급</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="직급" type="text" placeholder="과장"></input>
        </div>
        <div className="inputBox 직무" id="inputBox 직무">
          <span>직무</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="직무" type="text" placeholder="프론트엔드 개발"></input>
        </div>
        <div className="inputBox 연봉" id="inputBox 연봉">
          <span>연봉</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="연봉" type="text" placeholder="4000"></input>
        </div>
      </div>

      {addCarCreate()}

    </div>
  )
}

export default Career