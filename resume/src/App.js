import './App.css';
import React, { useState, useRef } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

function App() {
  // 이력서 항목 관리
  const LibtuClik = (e) => {
    let elemnet = document.getElementById(e.target.innerText)
    e.target.className = e.target.className === "ResumeLi" ? "ResumeLiClik" : "ResumeLi"
    elemnet.className = elemnet.className === "basicInfo" ? "basicInfo 숨김" : "basicInfo"
  }
  // 성별 선택
  const [성별상태, 성별상태바꾸기] = useState("inputBox 성별 성별선택 숨김")

  const ShowDrop = () => {
    성별상태바꾸기("inputBox 성별 성별선택 표시")
    console.log(성별상태)
  }

  const [성별값, 성별값바꾸기] = useState("남자")
  const [색상, 색상값바꾸기] = useState("gray")

  const SelectValue = (e) => {
    색상값바꾸기("black")
    성별값바꾸기(e.target.name)
    성별상태바꾸기("inputBox 성별 성별선택 숨김")
    console.log(색상)
    console.log(성별값)
    console.log(성별상태)
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
    const test = birthRef.current.value
    console.log(test)

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
        console.log(pho)
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
        console.log(bir)
      }

      birthRef.current.value = result;
      setNumBir(e.target.value);
    }
  }
  // 이력서 증명사진 업로드
  const imageInput = useRef();

  const inputClk = () => {
    imageInput.current.click();
  }

  const [imgSrc, setImgSrc] = useState("");

  const loadImg = (e) => {
    const file = e.target.files[0]
    let reader = new FileReader();
    let elemnet = document.getElementById("imgUse")
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgSrc(reader.result)
      elemnet.className = "imgContent"
      elemnet = document.getElementById("imgNotUse")
      elemnet.className = "imgFlex 숨김"
    }
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
    } else{
      setPostBtn(false)
      alert("주소를 검색하세요")
    }
    setPostValue(result)
  }

  return (
    <div className="ResumePage">

      <div className="ResumeTopHeader">
        <div className="ResumeTop">
          <b className="Rname">간단 이력서</b>
          <a className="ToGitLink"
            href="https://github.com/wnalsals123/Resume_Project"
            target="_blank"
            rel="noopener noreferrer">
            <b>Github</b>
          </a>
        </div>
      </div>

      <ul className="ResumeList">
        <li className="ResumeLi" onClick={LibtuClik}>학력</li>
        <li className="ResumeLi" onClick={LibtuClik}>경력</li>
        <li className="ResumeLi" onClick={LibtuClik}>인턴·대외활동</li>
        <li className="ResumeLi" onClick={LibtuClik}>교육이수</li>
        <li className="ResumeLi" onClick={LibtuClik}>자격증</li>
        <li className="ResumeLi" onClick={LibtuClik}>수상</li>
        <li className="ResumeLi" onClick={LibtuClik}>해외경험</li>
        <li className="ResumeLi" onClick={LibtuClik}>어학</li>
        <li className="ResumeLi" onClick={LibtuClik}>포트폴리오</li>
        <li className="ResumeLi" onClick={LibtuClik}>취업우대·병역</li>
        <li className="ResumeLi" onClick={LibtuClik}>자기소개서</li>
      </ul>

      <div className="ResumeTitle">
        <input className="ResumeTitleInput" id="이력서제목" type="text" placeholder="이력서 제목">
        </input>
      </div>

      <div className="contentBox">

        <div className="basicInfo" id="기본정보">

          <h2>기본 정보</h2>

          <div className="row">
            <div className="inputBox 이름">
              <span>이름</span>
              <input id="이름" type="text" placeholder="홍길동"></input>
            </div>
            <div className="inputBox 영문">
              <span>영문</span>
              <input id="영문" type="text" placeholder="HONG GILDONG"></input>
            </div>
            <div className="inputBox 성별">
              <button onClick={ShowDrop}>
                <span>성별</span>
                <span style={{ fontSize: "20px", color: 색상, height: "45px" }}>{성별값}</span>
              </button>
              <div className={성별상태}>
                <ul>
                  <li><button onClick={SelectValue} name="남자">남자</button></li>
                  <li><button onClick={SelectValue} name="여자">여자</button></li>
                </ul>
              </div>
            </div>
            <div className="inputBox 생년월일">
              <span>생년월일</span>
              <input onChange={ChkNum} id="생년월일" type="tel" placeholder="1434.12.18" value={numBir} ref={birthRef}></input>
            </div>
          </div>

          <div className="row">
            <div className="inputBox 연락처">
              <span>연락처</span>
              <input onChange={ChkNum} id="연락처" type="tel" placeholder="010-1234-5678" value={numTel} ref={phoneRef}></input>
            </div>
            <div className="inputBox 이메일">
              <span>이메일</span>
              <input id="이메일" type="text" placeholder="hong@naeinom.com"></input>
            </div>
            <div className="inputBox 주소">
              <button type='button' onClick={openPostCode} disabled={postBtn} style={{ cursor: "default" }}>
                <span>주소</span>
                <input onChange={setPostInput} id="주소" type="text" placeholder="서울특별시 강남구" value={postValue} ref={postRef}></input>
              </button>
            </div>
          </div>

          <div className="imgBox">
            <div className="imgFlex" id="imgNotUse">
              <input onChange={loadImg} type="file" accept="image/jpg,impge/png,image/jpeg,image/gif" style={{ display: "none" }} ref={imageInput}></input>
              <button onClick={inputClk}>사진 등록</button>
            </div>
            <div className="imgContent 숨김" id="imgUse">
              <img src={imgSrc} alt="preview-img"></img>
            </div>
          </div>

        </div>

        <div className="basicInfo 숨김" id="학력">

          <h2>학력</h2>

          <div className="row">
            <div className="inputBox 학력">
              <span>학교명</span>
              <input id="학교명" type="text" placeholder="기장고교"></input>
            </div>
          </div>

        </div>

        <div className="basicInfo 숨김" id="경력">

          <h2>경력</h2>

        </div>

        <div className="basicInfo 숨김" id="인턴·대외활동">

          <h2>인턴·대외활동</h2>

        </div>

        <div className="basicInfo 숨김" id="교육이수">

          <h2>교육이수</h2>

        </div>

        <div className="basicInfo 숨김" id="자격증">

          <h2>자격증</h2>

        </div>

        <div className="basicInfo 숨김" id="수상">

          <h2>수상</h2>

        </div>

        <div className="basicInfo 숨김" id="해외경험">

          <h2>해외경험</h2>

        </div>

        <div className="basicInfo 숨김" id="어학">

          <h2>어학</h2>

        </div>

        <div className="basicInfo 숨김" id="포트폴리오">

          <h2>포트폴리오</h2>

        </div>

        <div className="basicInfo 숨김" id="취업우대·병역">

          <h2>취업우대·병역</h2>

        </div>

        <div className="basicInfo 숨김" id="자기소개서">

          <h2>자기소개서</h2>

        </div>

        <div id='popupDom'>
          {isPopupOpen && (
            <PopupDom>
              <PopupPostCode onClose={closePostCode} setPostValue={setPostValue} setPostBtn={setPostBtn} />
            </PopupDom>
          )}
        </div>

      </div>

    </div>
  );
}

export default App;
