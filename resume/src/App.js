import './App.css';
import React, { useState, useRef } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

function App() {
  // 이력서 항목 관리
  const LibtuClik = (e) => {
    let elemnet = document.getElementById(e.target.innerText)
    e.target.className = e.target.className === "ResumeLi" ? "ResumeLi Clik" : "ResumeLi"
    elemnet.className = elemnet.className === "basicInfo" ? "basicInfo 숨김" : "basicInfo"

    if (elemnet.id === "학력") {
      let disableBox = checkBox.filter((item) => (item.id !== "checkBox4"))
      disableBox.map((item) => (document.getElementById(item.id).checked = false))
      document.getElementById("checkBox4").checked = true
      setPreCheck("checkBox4")
    }
  }
  // 성별 선택
  const [성별상태, 성별상태바꾸기] = useState("inputBox 성별 성별선택 숨김")

  const ShowDrop = () => {
    성별상태바꾸기("inputBox 성별 성별선택 표시 Clik")
    console.log(성별상태)
  }

  const HideDrop = () => {
    성별상태바꾸기("inputBox 성별 성별선택 숨김")
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
  const [imgSrc, setImgSrc] = useState("");

  const inputClk = () => {
    imageInput.current.click();
    console.log("inputClk!")
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
      console.log("loadImg!")
    }

    e.target.value = ""
  }
  // 이력서 증명사진 삭제
  const imgDelete = () => {
    let elemnet = document.getElementById("imgNotUse")
    elemnet.className = "imgFlex"
    elemnet = document.getElementById("imgUse")
    elemnet.className = "imgContent 숨김"
    console.log("imgDelete!")
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
  // InputBox 포커스 이벤트
  const inputBoxFocus = (e) => {
    let str = "inputBox " + (e.target.id)
    let element = document.getElementById(str)
    element.className = str + " Clik"
  }

  const inputBoxBlur = (e) => {
    let str = "inputBox " + (e.target.id)
    let element = document.getElementById(str)
    element.className = "inputBox " + (e.target.id)
  }
  // checkBox 리스트 이벤트
  const checkBox = [
    { id: "checkBox1", name: "고졸 미만" },
    { id: "checkBox2", name: "고졸" },
    { id: "checkBox3", name: "대졸(2,3년)" },
    { id: "checkBox4", name: "대졸(4년)" },
  ]

  const [preCheck, setPreCheck] = useState("")

  const checkBoxChange = (e) => {
    console.log("pre: " + preCheck, "curr: " + e.target.id, e.target.checked)

    if (e.target.id === preCheck) {
      e.target.checked = true
      console.log(e.target.checked)
    } else {
      let disableBox = checkBox.filter((item) => (e.target.id !== item.id))
      disableBox.map((item) => (document.getElementById(item.id).checked = false))
      setPreCheck(e.target.id)
    }
  }

  const checkBoxList = checkBox.map((item) => (
    <div key={item.id} className='checkBox'>
      <input onChange={checkBoxChange} type="checkbox" id={item.id}></input>
      <span>{item.name}</span>
    </div>
  ))
  // 이력서 웹페이지
  return (
    <div className="ResumePage">
      {/* 탑 배너 */}
      <div className="ResumeTopHeader">
        <div className="ResumeTop">
          {/* 사이트 배너 */}
          <div className="siteBanner">
            <b style={{ paddingRight: "10px", borderRight: "2px solid black" }}>간단 이력서</b>
            <a className="ToGitLink"
              href="https://github.com/wnalsals123/Resume_Project"
              target="_blank"
              rel="noopener noreferrer">
              <b style={{ paddingLeft: "10px" }}>Github</b>
            </a>
          </div>

          {/* 이력서 리스트 */}
          <ul className="ResumeList">
            <li className="ResumeLi" onClick={LibtuClik}>학력</li>
            <li className="ResumeLi" onClick={LibtuClik}>경력</li>
            <li className="ResumeLi" onClick={LibtuClik}>자격증</li>
            <li className="ResumeLi" onClick={LibtuClik}>어학</li>
            <li className="ResumeLi" onClick={LibtuClik}>인턴·대외활동</li>
            <li className="ResumeLi" onClick={LibtuClik}>병역·취업우대</li>
            <li className="ResumeLi" onClick={LibtuClik}>자기소개서</li>
            <li className="ResumeLi" onClick={LibtuClik}>포트폴리오</li>
          </ul>

        </div>
      </div>
      {/* 이력서 제목 */}
      <div className="ResumeTitle">
        <input className="ResumeTitleInput" id="이력서제목" type="text" placeholder="이력서 제목">
        </input>
      </div>

      <div className="contentBox">
        {/* 기본정보 */}
        <div className="basicInfo" id="기본정보">

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
            <div className="inputBox 성별" id="inputBox 성별">
              <button onClick={ShowDrop} onBlur={HideDrop}>
                <span>성별</span>
                <span style={{ fontSize: "20px", color: 색상, height: "45px" }}>{성별값}</span>
              </button>
              <div className={성별상태}>
                <ul>
                  <li><button onMouseDown={SelectValue} onBlur={HideDrop} name="남자">남자</button></li>
                  <li><button onMouseDown={SelectValue} onBlur={HideDrop} name="여자">여자</button></li>
                </ul>
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
        {/* 학력 */}
        <div className="basicInfo 숨김" id="학력">

          <h2>학력
            <div className='checkBoxWrap'>
              {checkBoxList}
            </div>
          </h2>

          <div className="row">
            <div className="inputBox 학교명" id="inputBox 학교명">
              <span>학교명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="학교명" type="text" placeholder="OO대학교"></input>
            </div>
            <div className="inputBox 입학년월" id="inputBox 입학년월">
              <span>입학년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="입학년월" type="text" placeholder="2002.03"></input>
            </div>
            <div className="inputBox 졸업년월" id="inputBox 졸업년월">
              <span>졸업년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="졸업년월" type="text" placeholder="2006.02"></input>
            </div>
          </div>

          <div className="row">
            <div className="inputBox 전공명" id="inputBox 전공명">
              <span>전공명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="전공명" type="text" placeholder="컴퓨터공학과"></input>
            </div>
            <div className="inputBox 학점" id="inputBox 학점">
              <span>학점</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="학점" type="text" placeholder="4.5"></input>
            </div>
            <div className="inputBox 총점" id="inputBox 총점">
              <span>총점</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="총점" type="text" placeholder="4.5"></input>
            </div>
          </div>

        </div>
        {/* 경력 */}
        <div className="basicInfo 숨김" id="경력">

          <h2>경력
            <div className='checkBoxWrap'>
              <div className='checkBox'>
                <input type="checkbox"></input>
                <span>재직중</span>
              </div>
            </div>
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
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="연봉" type="text" placeholder="3000"></input>
            </div>
          </div>


        </div>
        {/* 자격증 */}
        <div className="basicInfo 숨김" id="자격증">

          <h2>자격증</h2>

          <div className="row">
            <div className="inputBox 자격증명" id="inputBox 자격증명">
              <span>자격증명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="자격증명" type="text" placeholder="정보처리기사"></input>
            </div>
            <div className="inputBox 발행처" id="inputBox 발행처">
              <span>발행처</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="발행처" type="text" placeholder="한국산업인력공단"></input>
            </div>
            <div className="inputBox 취득년월" id="inputBox 취득년월">
              <span>취득년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="취득년월" type="text" placeholder="2006.02"></input>
            </div>
          </div>

        </div>
        {/* 어학 */}
        <div className="basicInfo 숨김" id="어학">

          <h2>어학</h2>

          <div className="row">
            <div className="inputBox 외국어명" id="inputBox 외국어명">
              <span>외국어명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="외국어명" type="text" placeholder="영어"></input>
            </div>
            <div className="inputBox 시험명" id="inputBox 시험명">
              <span>시험명</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="시험명" type="text" placeholder="TOEIC"></input>
            </div>
            <div className="inputBox 취득년월" id="inputBox 취득년월">
              <span>취득년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="취득년월" type="text" placeholder="2006.02"></input>
            </div>
          </div>

        </div>
        {/* 인턴·대외활동 */}
        <div className="basicInfo 숨김" id="인턴·대외활동">

          <h2>인턴·대외활동</h2>

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
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="시작년월" type="text" placeholder="2006.02"></input>
            </div>
            <div className="inputBox 종료년월" id="inputBox 종료년월">
              <span>종료년월</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="종료년월" type="text" placeholder="2006.02"></input>
            </div>
          </div>

          <div className="row">
            <div className="inputBox 활동내용" id="inputBox 활동내용">
              <span>활동내용</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="활동내용" type="text" placeholder="내용기입"></input>
            </div>
          </div>

        </div>
        {/* 병역·취업우대 */}
        <div className="basicInfo 숨김" id="병역·취업우대">

          <h2>병역·취업우대</h2>

          <div className='checkBox'>
            <input type="checkbox"></input>
            <span>보훈대상</span>
          </div>
          <div className='checkBox'>
            <input type="checkbox"></input>
            <span>취업보호 대상</span>
          </div>
          <div className='checkBox'>
            <input type="checkbox"></input>
            <span>고용지원금 대상</span>
          </div>
          <div className='checkBox'>
            <input type="checkbox"></input>
            <span>장애</span>
          </div>
          <div className='checkBox'>
            <input type="checkbox"></input>
            <span>병역</span>
          </div>

        </div>
        {/* 자기소개서 */}
        <div className="basicInfo 숨김" id="자기소개서">

          <h2>자기소개서</h2>

          <div className="row">
            <div className="inputBox 자기소개서내용" id="inputBox 자기소개서내용">
              <span>자기소개서</span>
              <input onFocus={inputBoxFocus} onBlur={inputBoxBlur} id="자기소개서내용" type="text" placeholder="내용기입"></input>
            </div>
          </div>

        </div>
        {/* 포트폴리오 */}
        <div className="basicInfo 숨김" id="포트폴리오">

          <h2>포트폴리오</h2>

          <span>사이트 주소 : </span>
          <input placeholder="https://"></input>
          <button>파일 등록</button>

        </div>
        {/* 주소 찾기 팝업 */}
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
