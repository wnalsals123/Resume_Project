# 간단한 이력서 작성 및 편집 웹페이지
### Demo page : <a href="https://jmj-resume-page.netlify.app/" target="_blank">JMJ-ResumePage-Demo</a>[![Netlify Status](https://api.netlify.com/api/v1/badges/5fd08a12-3d02-4be8-9cee-760bbf7d8a83/deploy-status)](https://app.netlify.com/sites/jmj-resume-page/deploys)

#### 1. 개발도구 : VSCode, , Git
#### 2. 라이브러리 : React(@18.2.0), React Router(@6.3.0)
#### 3. API : Context, react-daum-postcode(@3.1.1), html2canvas(@1.4.1), jsPDF(@2.5.1)
#### 4. 웹 호스팅 : Netlify

***

### <코드 구조>

#### resume\src
* <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/index.js">*\index.js*</a> : 리액트 라우터, Context 설정
* <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/index.css">*\index.js*</a> : body 스타일 설정
* <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/App.js">*\App.js*</a> : 페이지 렌더링, 버전 체크
* <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/App.css">*\App.css*</a> : 이력서 페이지 스타일

#### resume\src\components
* *\Top*
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Top/TopBanner.js">*\TopBanner.js*</a> : 이력서 각 항목 관리
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Top/Title.js">*\Title.js*</a> : 이력서 제목 설정
* *\Bottom*
  * \Event<a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Content/Event/InputEvent.js">*\InputEvent.js*</a> : Input 이벤트, 구분자 함수
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Bottom/ResumeBottom.js">*\ResumeBottom.js*</a> : 이력서 간단 사용 설명서
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Bottom/ResumeCompleted.js">*\ResumeCompleted.js*</a> : 이력서 미리보기, 저장하기, 초기화
* *\Content*
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Content/BasicInfo.js">*\BasicInfo.js*</a> : 기본정보 컴포넌트
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Content/Career.js">*\Career.js*</a> : 경력 컴포넌트
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Content/Certificate.js">*\Certificate.js*</a> : 자격증 컴포넌트
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Content/Education.js">*\Education.js*</a> : 학력 컴포넌트
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Content/EmploymentPre.js">*\EmploymentPre.js*</a> : 병역·취업우대 컴포넌트
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Content/Internship.js">*\Internship.js*</a> : 인턴·대외활동 컴포넌트
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Content/Introduction.js">*\Introduction.js*</a> : 자기소개서 컴포넌트
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Content/LanguageStudy.js">*\LanguageStudy.js*</a> : 어학 컴포넌트
* *\Data*
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Data/AddState.js">*\AddState.js*</a> : Context Provider 설정
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Data/UserData.js">*\UserData.js*</a> : 이력서 데이터 값 획득 및 저장
* *\Post* 
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Post/PopupDom.js">*\PopupDom.js*</a> : Postcode Portal 설정
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Post/PopupPostCode.js">*\PopupPostCode.js*</a> : Postcode 설정
* *\Result*
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Result/Preview.js">*\Preview.js*</a> : 미리보기 페이지
  * <a href="https://github.com/wnalsals123/Resume_Project/blob/master/resume/src/components/Result/Preview.js">*\Preview.js*</a> : 미리보기 페이지 스타일

***

### <기능 구현>
#### 1. 이력서 작성 페이지

><details>
><summary>이력서 작성 항목 관리</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281541-37909728-e6e6-4abc-b746-c8017615e83a.gif"/>
></div>
></details>
>
><details>
><summary>항목별 추가 항목 관리(Context API)</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281540-fefce378-c0aa-48a0-82af-37f05713ef27.gif"/>
></div>
></details>
>
><details>
><summary>Input 포커스 이벤트</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281539-22071aa7-b845-47b1-a71d-22a0bf11736a.gif"/>
></div>
></details>
>
><details>
><summary>사진 등록</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281538-df29fe71-7e85-48c4-b4c0-08e541ef9367.gif"/>
></div>
></details>
>
><details>
><summary>주소 등록(DaumPostcode API)</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281537-953fdf10-2089-410a-a421-ef899af8a86f.gif"/>
></div>
></details>
>
><details>
><summary>체크 박스 및 드롭 박스 관리</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281536-9f33ebc2-dcc3-441b-a191-4ebd994b7fbf.gif"/>
></div>
></details>
>
><details>
><summary>간단 사용 설명서 GIF 이벤트</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281534-1608929b-d2f0-478c-a18c-eacbb2592f40.gif"/>
></div>
></details>
>
><details>
><summary>이력서 저장 및 초기화 관리</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281535-c6bc5cd9-af2c-4162-aaf4-e1f72205797c.gif"/>
></div>
></details>   

#### 2. 이력서 미리보기 페이지
><details>
><summary>CSS Flex</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281533-a4f80f7d-61bd-431a-b61d-bd980167b04a.gif"/>
></div>
></details>
>
><details>
><summary>경력 계산</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281531-fc21e6c9-1b8c-446f-9ae0-77c8a8777116.gif"/>
></div>
></details>
>
><details>
><summary>이력서 출력</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281529-3979b10d-9cee-4fd7-9ce5-7bd4020ac04b.gif"/>
></div>
></details>
>
><details>
><summary>이미지로 저장(html2canvas)</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281528-c74879f7-3c32-470b-97ff-5cf9a778bc60.gif"/>
></div>
></details>
>
><details>
><summary>PDF로 저장(html2canvas, jsPDF)</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281527-690cde75-f08c-4b96-bfd0-05359a483fd5.gif"/>
></div>
></details>
>
><details>
><summary>페이지 표시 및 간격 조정</summary>
><div markdown="1">
><img width="100%" src="https://user-images.githubusercontent.com/44563747/183281525-e1f7df75-aa05-498c-8ca5-9e9eee37f731.gif"/>
></div>
></details>