const inputBoxFocus = (e) => {
  const str = "inputBox " + (e.target.id)
  const element = document.getElementById(str)
  element.className = element.className + " Clik"
}

const inputBoxBlur = (e) => {
  const str = "inputBox " + (e.target.id)
  const element = document.getElementById(str)
  element.className = (element.className).slice(0, -5)
}

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

export { inputBoxFocus, inputBoxBlur, ChkNum }