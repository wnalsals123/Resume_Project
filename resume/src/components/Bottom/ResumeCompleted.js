
const ResumeCompleted = () => {
  const opnePreview = () => {
    window.open("preview", "preview", "width=800, height=900")
  }

  const saveResume = () => {
    alert("저장되었습니다!")
  }

  return (
    <div className='ResumeCompleted'>
      <button onClick={opnePreview}>미리보기</button>
      <button onClick={saveResume}>이력서 저장하기</button>
    </div>
  )
}

export default ResumeCompleted;