import React, { useState, useRef, useEffect } from 'react';
import { inputBoxFocus, inputBoxBlur } from './Event/InputEvent'
import { PopupDom, PopupPostCode } from 'components'
import { ChkNumBirth, ChkNumPhone } from './Event/InputEvent';

const BasicInfo = () => {
  useEffect(()=>{
    const loadData = JSON.parse(localStorage.getItem("baiscValue"))
    const loadImgData = JSON.parse(localStorage.getItem("uesrImg"))
    if(loadData !== null){
      document.getElementById("이력서제목").value = loadData.이력서제목
      document.getElementById("이름").value = loadData.이름
      document.getElementById("영문").value = loadData.영문
      document.getElementById("성별").innerText = loadData.성별
      document.getElementById("생년월일").value = loadData.생년월일
      document.getElementById("연락처").value = loadData.연락처
      document.getElementById("이메일").value = loadData.이메일
      if(loadData.주소 !== "") setPostBtn("flex"); setPostValue(loadData.주소);
    }
    if(loadImgData !== null){
      document.getElementById("imgUse").className = "imgContent"
      document.getElementById("imgNotUse").className = "imgFlex 숨김"
      setImgSrc(loadImgData);
    } 
  }, [])
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

    var maxSize = 5 * 1024 * 1024;
		var fileSize = file.size;

		if(fileSize > maxSize){
			alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
			return;
		}

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
  const [postBtn, setPostBtn] = useState('none')

  const openPostCode = () => {
    if(postBtn === 'none') setIsPopupOpen(true)
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
      setPostBtn('none')
      alert("주소를 검색하세요")
    }
    setPostValue(result)
  }

  const deletePostCode = () => {
    setPostValue('')
    setPostBtn('none')
    setIsPopupOpen(true)
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
          <input onChange={ChkNumBirth} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="생년월일" type="tel" placeholder="1434.12.18"></input>
        </div>
      </div>

      <div className="row">
        <div className="inputBox 연락처" id="inputBox 연락처">
          <span>연락처</span>
          <input onChange={ChkNumPhone} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="연락처" type="tel" placeholder="010-1234-5678"></input>
        </div>
        <div className="inputBox 이메일" id="inputBox 이메일">
          <span>이메일</span>
          <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="이메일" type="text" placeholder="hong@naeinom.com"></input>
        </div>
        <div className="inputBox 주소" id="inputBox 주소">
          <span>주소</span>
          <input onClick={openPostCode} onChange={setPostInput} onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="주소" type="text" placeholder="서울특별시 강남구" value={postValue} ref={postRef} style={{ width: '400px' }}></input>
          <div className='deletePost' style={{ display: postBtn }}><button onClick={deletePostCode}></button></div>
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
          <input onChange={loadImg} type="file" accept="image/*" style={{ display: "none" }} ref={imageInput}></input>
          <button onClick={inputClk}>사진 등록</button>
          <span>* 4:5비율 권장<br/>* 5mb 이하 업로드</span>
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