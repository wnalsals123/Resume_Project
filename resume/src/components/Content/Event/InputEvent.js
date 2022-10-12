/* input 포커스 이벤트 */
const inputBoxFocus = (e) => {
  const str = "inputBox " + (e.target.id)
  const element = document.getElementById(str)
  element.className = element.className + " Clik"
}

/* input 블러 이벤트 */
const inputBoxBlur = (e) => {
  const str = "inputBox " + (e.target.id)
  const element = document.getElementById(str)
  element.className = (element.className).slice(0, -5)
}

/* 날짜 구분자 */
const ChkNum = (e) => {
  const pho = e.target.value.replace(/\D+/g, "");
  const numberLength = 6;

  let result;
  result = "";

  for (let i = 0; i < pho.length && i < numberLength; i++) {
    switch (i) {
      case 4:
        result += ".";
        break;
      default:
        break;
    }
    result += pho[i];
  }
  e.target.value = result;
}

/* 생년월일 구분자 */
const ChkNumBirth = (e) => {
  console.log("chk2")
  const pho = e.target.value.replace(/\D+/g, "");
  const numberLength = 8;

  let result;
  result = "";

  for (let i = 0; i < pho.length && i < numberLength; i++) {
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
    result += pho[i];
  }
  e.target.value = result;
}

/* 휴대폰 구분자 */
const ChkNumPhone = (e) => {
  console.log("chk2")
  const pho = e.target.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result;
  result = "";

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
  e.target.value = result;
}

export { inputBoxFocus, inputBoxBlur, ChkNum, ChkNumBirth, ChkNumPhone }