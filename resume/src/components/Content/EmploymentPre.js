import { useState, useEffect } from 'react'

const EmploymentPre = () => {
  const [milShowDropVis, setMilShowDropVis] = useState("none")
  const [disShowDropVis, setDisShowDropVis] = useState("none")
  const [milValue, setMilValue] = useState("군필")
  const [disValue, setDisValue] = useState("1급")
  const [milFontColor, setMilFontColor] = useState("gray")
  const [disFontColor, setDisFontColor] = useState("gray")

  useEffect(() => {
    const loadData = JSON.parse(localStorage.getItem("employmentPreValue"))
    if (loadData !== null) {
      document.getElementById("보훈대상").checked = loadData.보훈대상
      document.getElementById("취업보호").checked = loadData.취업보호
      document.getElementById("고용지원금").checked = loadData.고용지원금
      if (loadData.장애 !== false) {
        document.getElementById("장애").checked = true
        document.getElementById("inputBox 장애").style.display = "inline-block"
        document.getElementById("장애값").innerText = loadData.장애
      } else document.getElementById("장애").checked = false
      if (loadData.병역 !== false) {
        document.getElementById("병역").checked = true
        document.getElementById("inputBox 병역").style.display = "inline-block"
        document.getElementById("병역값").innerText = loadData.병역
      } else document.getElementById("병역").checked = false
    }
  }, [])

  const MilitaryBox = () => {
    return (
      <ul>
        <li><button onMouseDown={(e) => { SelectValue(e, '병역') }} onBlur={() => { HideDrop('병역') }}>군필</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '병역') }} onBlur={() => { HideDrop('병역') }}>미필</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '병역') }} onBlur={() => { HideDrop('병역') }}>면제</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '병역') }} onBlur={() => { HideDrop('병역') }}>기타</button></li>
      </ul>
    )
  }

  const DisabilityBox = () => {
    return (
      <ul>
        <li><button onMouseDown={(e) => { SelectValue(e, '장애') }} onBlur={() => { HideDrop('장애') }}>중증</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '장애') }} onBlur={() => { HideDrop('장애') }}>경증</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '장애') }} onBlur={() => { HideDrop('장애') }}>1급</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '장애') }} onBlur={() => { HideDrop('장애') }}>2급</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '장애') }} onBlur={() => { HideDrop('장애') }}>3급</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '장애') }} onBlur={() => { HideDrop('장애') }}>4급</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '장애') }} onBlur={() => { HideDrop('장애') }}>5급</button></li>
        <li><button onMouseDown={(e) => { SelectValue(e, '장애') }} onBlur={() => { HideDrop('장애') }}>6급</button></li>
      </ul>
    )
  }


  const showMilRow = (e) => {
    if (e.target.checked) document.getElementById("inputBox 병역").style.display = "inline-block"
    else  document.getElementById("inputBox 병역").style.display = "none"
  }

  const showDisRow = (e) => {
    if (e.target.checked) document.getElementById("inputBox 장애").style.display = "inline-block"
    else  document.getElementById("inputBox 장애").style.display = "none"
  }

  const milShowDrop = () => {
    setMilShowDropVis("block")
  }

  const disShowDrop = () => {
    setDisShowDropVis("block")
  }

  const HideDrop = (item) => {
    item === '장애' ? setDisShowDropVis('none') : setMilShowDropVis('none')
  }

  const SelectValue = (e, item) => {
    item === '장애' ? setDisFontColor("black") : setMilFontColor("black")
    item === '장애' ? setDisValue(e.target.innerText) : setMilValue(e.target.innerText)
    HideDrop(item)
  }


  return (
    <div className="basicInfo 숨김" id="병역·취업우대" style={{ zIndex: 40 }}>

      <h2>병역·취업우대</h2>

      <div style={{ margin: "20px 0px 20px 0px" }}>
        <div className='checkBox'>
          <input id="보훈대상" type="checkbox"></input>
          <span>보훈대상</span>
        </div>
        <div className='checkBox'>
          <input id="취업보호" type="checkbox"></input>
          <span>취업보호 대상</span>
        </div>
        <div className='checkBox'>
          <input id="고용지원금" type="checkbox"></input>
          <span>고용지원금 대상</span>
        </div>
        <div className='checkBox'>
          <input id="장애" onChange={showDisRow} type="checkbox"></input>
          <span>장애</span>
        </div>
        <div className='checkBox'>
          <input id="병역" onChange={showMilRow} type="checkbox"></input>
          <span>병역</span>
        </div>
      </div>

      <div className="inputBox 장애" id="inputBox 장애" style={{display: "none"}}>
        <button onClick={disShowDrop} onBlur={() => { HideDrop('장애') }}>
          <span>장애</span>
          <span id='장애값' style={{ fontSize: "20px", color: disFontColor, height: "45px" }}>{disValue}</span>
        </button>
        <div className='dropBox' style={{ display: disShowDropVis }}><DisabilityBox /></div>
      </div>

      <div className="inputBox 병역" id="inputBox 병역" style={{display: "none"}}>
        <button onClick={milShowDrop} onBlur={() => { HideDrop('병역') }}>
          <span>병역</span>
          <span id='병역값' style={{ fontSize: "20px", color: milFontColor, height: "45px" }}>{milValue}</span>
        </button>
        <div className='dropBox' style={{ display: milShowDropVis }}><MilitaryBox /></div>
      </div>
    </div>
  )
}

export default EmploymentPre