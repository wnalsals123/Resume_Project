import React, { useState, useRef } from 'react';
import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'
import { PopupDom, PopupPostCode } from 'components'

const BasicInfo = () => {
  // 성별 선택
  const [sexVisble, setSexVisble] = useState("none")
  const [sexValue, setSexValue] = useState("남자")
  const [색상, 색상값바꾸기] = useState("gray")

  const ShowDrop = () => {
    setSexVisble("block")
  }

  const HideDrop = () => {
    setSexVisble("none")
  }

  const SelectValue = (e) => {
    색상값바꾸기("black")
    setSexValue(e.target.innerText)
    HideDrop()
  }

  const SexBox = () => {
    return (
      <ul>
        <li><button onMouseDown={(e)=>{SelectValue(e)}} onBlur={() => {HideDrop()}}>남자</button></li>
        <li><button onMouseDown={(e)=>{SelectValue(e)}} onBlur={() => {HideDrop()}}>여자</button></li>
      </ul>
    )
  }
  // 생년월일, 연락처 구분자
  const [numTel, setNumTel] = useState('');
  const phoneRef = useRef();
  const [numBir, setNumBir] = useState('');
  const birthRef = useRef();

  const ChkNum = (e) => {
    const pho = phoneRef.current.value.replace(/\D+/g, "");
    const bir = birthRef.current.value.replace(/\D+/g, "");
    const numberLength = e.target.id === "연락처" ? 11 : 8;

    let result;
    result = "";

    if (numberLength === 11) {
      for (let i = 0; i < pho.length && i < numberLength; i++) {
        switch (i) {
          case 3:
            result += "-";
            break;
          case 7:
            result += "-";
            break;

          default:
            break;
        }

        result += pho[i];
      }

      phoneRef.current.value = result;
      setNumTel(e.target.value);
    } else {
      for (let i = 0; i < bir.length && i < numberLength; i++) {
        switch (i) {
          case 4:
            result += ".";
            break;
          case 6:
            result += ".";
            break;

          default:
            break;
        }

        result += bir[i];
      }

      birthRef.current.value = result;
      setNumBir(e.target.value);
    }
  }
  // 이력서 증명사진 업로드
  const imageInput = useRef();
  const [imgSrc, setImgSrc] = useState("");

  const inputClk = () => {
    imageInput.current.click();
  }

  const loadImg = (e) => {
    const file = e.target.files[0]
    let reader = new FileReader()
    let elemnet = document.getElementById("imgUse")

    if (file === undefined) return;

    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImgSrc(reader.result)
      elemnet.className = "imgContent"
      elemnet = document.getElementById("imgNotUse")
      elemnet.className = "imgFlex 숨김"
      localStorage.setItem('uesrImg', JSON.stringify(reader.result))
    }

    e.target.value = ""
  }
  // 이력서 증명사진 삭제
  const imgDelete = () => {
    let elemnet = document.getElementById("imgNotUse")
    elemnet.className = "imgFlex"
    elemnet = document.getElementById("imgUse")
    elemnet.className = "imgContent 숨김"
    localStorage.removeItem('uesrImg')
  }
  // 주소 찾기
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [postValue, setPostValue] = useState("")
  const postRef = useRef();
  const [postBtn, setPostBtn] = useState(false)

  const openPostCode = () => {
    setIsPopupOpen(true)
  }

  const closePostCode = () => {
    setIsPopupOpen(false)
  }

  const setPostInput = () => {
    let result = ""
    const post = postRef.current.value
    const numberLength = 50

    if (postValue !== "") {
      for (let i = 0; i < post.length && i < numberLength; i++) {
        result += post[i];
      }
    } else {
      setPostBtn(false)
      alert("주소를 검색하세요")
    }
    setPostValue(result)
  }
  // 기본 정보 렌더링
  return (
    <div className="basicInfo" id="기본정보" style={{zIndex: 100}}>
      <h2>기본 정보</h2>

      <div className="row">
        <div className="inputBox 이름" id="inputBox 이름">
          <span>이름</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="이름" type="text" placeholder="홍길동"></input>
        </div>
        <div className="inputBox 영문" id="inputBox 영문">
          <span>영문</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="영문" type="text" placeholder="HONG GILDONG"></input>
        </div>
        <div className="inputBox 성별" id="inputBox 성별" style={{zIndex: 100}}>
          <button onClick={ShowDrop} onBlur={HideDrop}>
            <span>성별</span>
            <span id="성별" style={{ fontSize: "20px", color: 색상, height: "45px" }}>{sexValue}</span>
          </button>
          <div className="dropBox" style={{display: sexVisble}}>
            <SexBox/>
          </div>
        </div>
        <div className="inputBox 생년월일" id="inputBox 생년월일">
          <span>생년월일</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="생년월일" type="tel" placeholder="1434.12.18" value={numBir} ref={birthRef}></input>
        </div>
      </div>

      <div className="row">
        <div className="inputBox 연락처" id="inputBox 연락처">
          <span>연락처</span>
          <input onChange={ChkNum} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="연락처" type="tel" placeholder="010-1234-5678" value={numTel} ref={phoneRef}></input>
        </div>
        <div className="inputBox 이메일" id="inputBox 이메일">
          <span>이메일</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="이메일" type="text" placeholder="hong@naeinom.com"></input>
        </div>
        <div className="inputBox 주소" id="inputBox 주소">
          <button type='button' onClick={openPostCode} disabled={postBtn} style={{ cursor: "default" }}>
            <span>주소</span>
            <input onChange={setPostInput} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="주소" type="text" placeholder="서울특별시 강남구" value={postValue} ref={postRef}></input>
          </button>
          <div>
            {isPopupOpen && (
              <PopupDom>
                <PopupPostCode onClose={closePostCode} setPostValue={setPostValue} setPostBtn={setPostBtn} />
              </PopupDom>
            )}
          </div>
        </div>
      </div>

      <div className="imgBox">
        <div className="imgFlex" id="imgNotUse">
          <input onChange={loadImg} type="file" accept="image/jpg,impge/png,image/jpeg,image/gif" style={{ display: "none" }} ref={imageInput}></input>
          <button onClick={inputClk}>사진 등록</button>
        </div>
        <div className="imgContent 숨김" id="imgUse">
          <img src={imgSrc} alt="preview-img"></img>
          <button onClick={imgDelete}>삭제</button>
        </div>
      </div>

    </div>
  )
}

export default BasicInfo