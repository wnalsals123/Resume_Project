# Resume_Project
### Demo page : <a href="https://jmj-resume-page.netlify.app/" target="_blank">JMJ-ResumePage-Demo</a>[![Netlify Status](https://api.netlify.com/api/v1/badges/5fd08a12-3d02-4be8-9cee-760bbf7d8a83/deploy-status)](https://app.netlify.com/sites/jmj-resume-page/deploys)

## 간단한 이력서 작성 및 편집 웹페이지
1. 개발도구 : VSCode, React, Git
2. 라이브러리 : React-Router-v6
3. API : Context, DaumPostcode, html2canvas, jsPDF
4. 웹 호스팅 : Netlify

***

### <코드 구조>

#### 1. resume\src
* *\index.js*   
: 리액트 라우터, Context 설정
* *\App.js*   
: 이력서 작성 페이지 렌더링

#### 2. resume\src\components
* *\Bottom*   
: 이력서 간단 사용 설명서, 이력서 미리보기, 저장하기, 초기화
* *\Content*   
: 이력서 각 항목(학력, 경력 등) 관리
  * *\Content\Event*   
  : 이력서 항목 컴포넌트 각종 이벤트 관리
* *\Data*   
: 추가 항목 관리 Context, 유저 데이터 저장
* *\Post*   
: 주소 검색 DaumPostcode API
* *\Result*   
: 이력서 미리보기 페이지 렌더링
* *\Top*   
: 이력서 각 항목 표시/숨김 관리

***

### <기능 구현>
#### 1. 이력서 작성 페이지

<details>
<summary style="font-style: italic">이력서 작성 항목 관리</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281541-37909728-e6e6-4abc-b746-c8017615e83a.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">항목별 추가 항목 관리(Context API)</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281540-fefce378-c0aa-48a0-82af-37f05713ef27.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">Input 포커스 이벤트</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281539-22071aa7-b845-47b1-a71d-22a0bf11736a.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">사진 등록</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281538-df29fe71-7e85-48c4-b4c0-08e541ef9367.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">주소 등록(DaumPostcode API)</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281537-953fdf10-2089-410a-a421-ef899af8a86f.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">체크 박스 및 드롭 박스 관리</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281536-9f33ebc2-dcc3-441b-a191-4ebd994b7fbf.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">간단 사용 설명서 GIF 이벤트</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281534-1608929b-d2f0-478c-a18c-eacbb2592f40.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">이력서 저장 및 초기화 관리</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281535-c6bc5cd9-af2c-4162-aaf4-e1f72205797c.gif"/>
</div>
</details>   

#### 2. 이력서 미리보기 페이지

<details>
<summary style="font-style: italic">CSS Flex</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281533-a4f80f7d-61bd-431a-b61d-bd980167b04a.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">경력 계산</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281531-fc21e6c9-1b8c-446f-9ae0-77c8a8777116.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">이력서 출력</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281529-3979b10d-9cee-4fd7-9ce5-7bd4020ac04b.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">이미지로 저장(html2canvas)</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281528-c74879f7-3c32-470b-97ff-5cf9a778bc60.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">PDF로 저장(html2canvas, jsPDF)</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281527-690cde75-f08c-4b96-bfd0-05359a483fd5.gif"/>
</div>
</details>

<details>
<summary style="font-style: italic">페이지 표시 및 간격 조정</summary>
<div markdown="1">
<img width="100%" src="https://user-images.githubusercontent.com/44563747/183281525-e1f7df75-aa05-498c-8ca5-9e9eee37f731.gif"/>
</div>
</details>

***