const inputBoxFocus = (e) => {
    let str = "inputBox " + (e.target.id)
    let element = document.getElementById(str)
    element.className = element.className + " Clik"
}

const inputBoxBlur = (e) => {
    let str = "inputBox " + (e.target.id)
    let element = document.getElementById(str)
    element.className = (element.className).slice(0, -5)
}

export { inputBoxFocus, inputBoxBlur }