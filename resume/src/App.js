import './App.css';
import React, { useState } from 'react';

function App() {

  const LibtuClik = (e) => {
    let elemnet = document.getElementById(e.target.innerText)
    e.target.className = e.target.className === "ResumeLi" ? "ResumeLiClik" : "ResumeLi"
    elemnet.className = elemnet.className === "basicInfo" ? "basicInfo 숨김" : "basicInfo"
  }

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

  const ChkNum = () => {
    console.log("chk")
  }

  return (
    <div className="ResumePage">

      <div className="ResumeTopHeader">
        <div className="ResumeTop">
          <b className="Rname">간단 이력서</b>
          <a className="ToGitLink"
            href="https://github.com/wnalsals123"
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

        <div className="basicInfo">

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
              <input id="생년월일" type="text" placeholder="123456"></input>
            </div>
          </div>

          <div className="row">
            <div className="inputBox 연락처">
              <span>연락처</span>
              <input onKeyUp={ChkNum} id="연락처" type="tel" placeholder="010-1234-5678" maxlength="13"></input>
            </div>
            <div className="inputBox 이메일">
              <span>이메일</span>
              <input id="이메일" type="text" placeholder="hong@naeinom.com"></input>
            </div>
            <div className="inputBox 주소">
              <span>주소</span>
              <input id="주소" type="text" placeholder="주소검색"></input>
            </div>
          </div>

          <div className="imgBox">
              <div className="imgFlex">
                <button>사진 등록</button>
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

      </div>

    </div>
  );
}

export default App;
