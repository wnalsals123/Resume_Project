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

export { inputBoxFocus, inputBoxBlur }