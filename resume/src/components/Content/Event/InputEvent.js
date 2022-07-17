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

export { inputBoxFocus, inputBoxBlur }