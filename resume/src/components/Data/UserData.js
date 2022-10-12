/* 이력서 데이터 값 얻기 */
const getValues = (addEdu, addCar, addCer, addLan, addInter) => {
  // 학력제목
  const getEduTitle = () => {
    let title
    if (document.getElementById("EducheckBox1").checked) title = "고졸 미만"
    if (document.getElementById("EducheckBox2").checked) title = "고졸"
    if (document.getElementById("EducheckBox3").checked) title = "대졸(2,3년)"
    if (document.getElementById("EducheckBox4").checked) title = "대졸(4년)"
    return title
  }

  // 학력유형
  const getEduId = () => {
    let id
    if (document.getElementById("EducheckBox1").checked) id = "EducheckBox1"
    if (document.getElementById("EducheckBox2").checked) id = "EducheckBox2"
    if (document.getElementById("EducheckBox3").checked) id = "EducheckBox3"
    if (document.getElementById("EducheckBox4").checked) id = "EducheckBox4"
    return id
  }
  
  // 학력 추가 항목
  const plueEdu = () => {
    let temp = addEdu.map((item) => (
      {
        학력유형: document.getElementById("학력유형" + item.id) !== null ? document.getElementById("학력유형" + item.id).value : "",
        학교명: document.getElementById("학교명" + item.id) !== null ? document.getElementById("학교명" + item.id).value : "",
        입학년월: document.getElementById("입학년월" + item.id) !== null ? document.getElementById("입학년월" + item.id).value : "",
        졸업년월: document.getElementById("졸업년월" + item.id) !== null ? document.getElementById("졸업년월" + item.id).value : "",
      }
    ))
    return temp
  }

  // 경력 추가 항목
  const plueCar = () => {
    let temp = addCar.map((item) => (
      {
        회사명: document.getElementById("회사명" + item.id) !== null ? document.getElementById("회사명" + item.id).value : "",
        입사년월: document.getElementById("입사년월" + item.id) !== null ? document.getElementById("입사년월" + item.id).value : "",
        퇴사년월: document.getElementById("퇴사년월" + item.id) !== null ? document.getElementById("퇴사년월" + item.id).value : "",
        직급: document.getElementById("직급" + item.id) !== null ? document.getElementById("직급" + item.id).value : "",
        직무: document.getElementById("직무" + item.id) !== null ? document.getElementById("직무" + item.id).value : "",
        연봉: document.getElementById("연봉" + item.id) !== null ? document.getElementById("연봉" + item.id).value : "",
        재직중: document.getElementById("재직중" + item.id) !== null ? document.getElementById("재직중" + item.id).checked : false,
      }
    ))
    return temp
  }
  
  // 자격증 추가 항목
  const plueCer = () => {
    let temp = addCer.map((item) => (
      {
        자격증명: document.getElementById("자격증명" + item.id) !== null ? document.getElementById("자격증명" + item.id).value : "",
        발행처: document.getElementById("발행처" + item.id) !== null ? document.getElementById("발행처" + item.id).value : "",
        취득년월자격증: document.getElementById("취득년월-자격증" + item.id) !== null ? document.getElementById("취득년월-자격증" + item.id).value : "",
      }
    ))
    return temp
  }

  // 어학 추가 항목
  const plueLan = () => {
    let temp = addLan.map((item) => (
      {
        어학명: document.getElementById("어학명" + item.id) !== null ? document.getElementById("어학명" + item.id).value : "",
        급수점수: document.getElementById("급수점수" + item.id) !== null ? document.getElementById("급수점수" + item.id).value : "",
        취득년월어학: document.getElementById("취득년월-어학" + item.id) !== null ? document.getElementById("취득년월-어학" + item.id).value : "",
      }
    ))
    return temp
  }

  // 인턴 추가 항목
  const plueInter = () => {
    let temp = addInter.map((item) => (
      {
        인턴대외활동명: document.getElementById("인턴·대외활동명" + item.id) !== null ? document.getElementById("인턴·대외활동명" + item.id).value : "",
        소속단체명: document.getElementById("소속단체명" + item.id) !== null ? document.getElementById("소속단체명" + item.id).value : "",
        시작년월: document.getElementById("시작년월" + item.id) !== null ? document.getElementById("시작년월" + item.id).value : "",
        종료년월: document.getElementById("종료년월" + item.id) !== null ? document.getElementById("종료년월" + item.id).value : "",
        활동내용: document.getElementById("활동내용" + item.id) !== null ? document.getElementById("활동내용" + item.id).value : "",
      }
    ))
    return temp
  }

  // 이력서 데이터 값 저장
  return (
    [
      {
        학력: document.getElementById("학력").className === "basicInfo" ? true : false,
        경력: document.getElementById("경력").className === "basicInfo" ? true : false,
        자격증: document.getElementById("자격증").className === "basicInfo" ? true : false,
        어학: document.getElementById("어학").className === "basicInfo" ? true : false,
        인턴: document.getElementById("인턴·대외활동").className === "basicInfo" ? true : false,
        병역: document.getElementById("병역·취업우대").className === "basicInfo" ? true : false,
        자기소개서: document.getElementById("자기소개서").className === "basicInfo" ? true : false,
      },
      {
        이력서제목: document.getElementById("이력서제목") !== null ? document.getElementById("이력서제목").value : "",
        이름: document.getElementById("이름") !== null ? document.getElementById("이름").value : "",
        영문: document.getElementById("영문") !== null ? document.getElementById("영문").value : "",
        성별: document.getElementById("성별") !== null ? document.getElementById("성별").innerText : "",
        생년월일: document.getElementById("생년월일") !== null ? document.getElementById("생년월일").value : "",
        연락처: document.getElementById("연락처") !== null ? document.getElementById("연락처").value : "",
        이메일: document.getElementById("이메일") !== null ? document.getElementById("이메일").value : "",
        주소: document.getElementById("주소") !== null ? document.getElementById("주소").value : "",
      },
      {
        학력ID: getEduId(),
        학력유형: getEduTitle(),
        학교명: document.getElementById("학교명") !== null ? document.getElementById("학교명").value : "",
        입학년월: document.getElementById("입학년월") !== null ? document.getElementById("입학년월").value : "",
        졸업년월: document.getElementById("졸업년월") !== null ? document.getElementById("졸업년월").value : "",
        전공명: document.getElementById("전공명") !== null ? document.getElementById("전공명").value : "",
        이수학점: document.getElementById("이수학점") !== null ? document.getElementById("이수학점").value : "",
        학점: document.getElementById("학점") !== null ? document.getElementById("학점").value : "",
        총점: document.getElementById("총점") !== null ? document.getElementById("총점").value : "",
        합격년월: document.getElementById("합격년월") !== null ? document.getElementById("합격년월").value : "",
        검정고시: document.getElementById("GED") !== null ? document.getElementById("GED").checked : false,
        plus: plueEdu()
      },
      {
        회사명: document.getElementById("회사명") !== null ? document.getElementById("회사명").value : "",
        입사년월: document.getElementById("입사년월") !== null ? document.getElementById("입사년월").value : "",
        퇴사년월: document.getElementById("퇴사년월") !== null ? document.getElementById("퇴사년월").value : "",
        직급: document.getElementById("직급") !== null ? document.getElementById("직급").value : "",
        직무: document.getElementById("직무") !== null ? document.getElementById("직무").value : "",
        연봉: document.getElementById("연봉") !== null ? document.getElementById("연봉").value : "",
        재직중: document.getElementById("재직중") !== null ? document.getElementById("재직중").checked : false,
        plus: plueCar()
      },
      {
        자격증명: document.getElementById("자격증명") !== null ? document.getElementById("자격증명").value : "",
        발행처: document.getElementById("발행처") !== null ? document.getElementById("발행처").value : "",
        취득년월자격증: document.getElementById("취득년월-자격증") !== null ? document.getElementById("취득년월-자격증").value : "",
        plus: plueCer()
      },
      {
        어학명: document.getElementById("어학명") !== null ? document.getElementById("어학명").value : "",
        급수점수: document.getElementById("급수점수") !== null ? document.getElementById("급수점수").value : "",
        취득년월어학: document.getElementById("취득년월-어학") !== null ? document.getElementById("취득년월-어학").value : "",
        plus: plueLan()
      },
      {
        인턴대외활동명: document.getElementById("인턴·대외활동명") !== null ? document.getElementById("인턴·대외활동명").value : "",
        소속단체명: document.getElementById("소속단체명") !== null ? document.getElementById("소속단체명").value : "",
        시작년월: document.getElementById("시작년월") !== null ? document.getElementById("시작년월").value : "",
        종료년월: document.getElementById("종료년월") !== null ? document.getElementById("종료년월").value : "",
        활동내용: document.getElementById("활동내용") !== null ? document.getElementById("활동내용").value : "",
        plus: plueInter()
      },
      {
        보훈대상: document.getElementById("보훈대상").checked ? true : false,
        취업보호: document.getElementById("취업보호").checked ? true : false,
        고용지원금: document.getElementById("고용지원금").checked ? true : false,
        장애: document.getElementById("장애").checked ? document.getElementById("장애값").innerText : false,
        병역: document.getElementById("병역").checked ? document.getElementById("병역값").innerText : false,
      },
      {
        자기소개서내용: document.getElementById("자기소개서내용") !== null ? document.getElementById("자기소개서내용").value : "",
      },
    ]
  )
}

/* 이력서 localStorage 생성 */
const postValues = (UserData) => {
  var i = 0
  console.log(UserData)
  localStorage.setItem('resumeLists', JSON.stringify(UserData[i++]))
  localStorage.setItem('baiscValue', JSON.stringify(UserData[i++]))
  localStorage.setItem('educationValue', JSON.stringify(UserData[i++]))
  localStorage.setItem('careerValue', JSON.stringify(UserData[i++]))
  localStorage.setItem('certificateValue', JSON.stringify(UserData[i++]))
  localStorage.setItem('languageStudyValue', JSON.stringify(UserData[i++]))
  localStorage.setItem('internshipValue', JSON.stringify(UserData[i++]))
  localStorage.setItem('employmentPreValue', JSON.stringify(UserData[i++]))
  localStorage.setItem('introductionValue', JSON.stringify(UserData[i]))
  localStorage.setItem('dataValidation', 'v1')
}

export { getValues, postValues }