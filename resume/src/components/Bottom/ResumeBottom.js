import { useState } from 'react';
import ma1 from './ManualImg/ma1.gif'
import ma2 from './ManualImg/ma2.gif'
import ma3 from './ManualImg/ma3.gif'
import ma4 from './ManualImg/ma4.gif'
import ma5 from './ManualImg/ma5.gif'
import ma6 from './ManualImg/ma6.gif'

/* 이력서 설명서 */
const ResumeBottom = () => {
  // 이미지 visable state
  const [img1, setImg1] = useState('none')
  const [img2, setImg2] = useState('none')
  const [img3, setImg3] = useState('none')
  const [img4, setImg4] = useState('none')
  const [img5, setImg5] = useState('none')
  const [img6, setImg6] = useState('none')

  // 이미지 src state
  const [img1Start, setImg1Start] = useState('')
  const [img2Start, setImg2Start] = useState('')
  const [img3Start, setImg3Start] = useState('')
  const [img4Start, setImg4Start] = useState('')
  const [img5Start, setImg5Start] = useState('')
  const [img6Start, setImg6Start] = useState('')

  return (
    <div className='ResumeBottom' style={{zIndex: 10}}>
      <h1>간단 이력서 간단 사용 설명서</h1>
      <div className="manualWrap">
        <h2 onMouseOver={()=>{setImg1('block'); setImg1Start(ma1)}} onMouseOut={()=>{setImg1('none'); setImg1Start('')}}>상단에 있는 항목을 눌러 원하는 항목을 추가할 수 있습니다.</h2>
        <h2 onMouseOver={()=>{setImg2('block'); setImg2Start(ma2)}} onMouseOut={()=>{setImg2('none'); setImg2Start('')}}>모든 항목의 작성이 끝났으면 미리보기로 확인할 수 있습니다.</h2>
        <h2 onMouseOver={()=>{setImg3('block'); setImg3Start(ma3)}} onMouseOut={()=>{setImg3('none'); setImg3Start('')}}>필요 시 미리보기 간격에서 이력서 간격을 표시하여 조정할 수 있습니다.</h2>
        <h2 onMouseOver={()=>{setImg4('block'); setImg4Start(ma4)}} onMouseOut={()=>{setImg4('none'); setImg4Start('')}}>미리보기 옵션에서 이력서를 출력, 파일로 저장할 수 있습니다.</h2>
        <h2 onMouseOver={()=>{setImg5('block'); setImg5Start(ma5)}} onMouseOut={()=>{setImg5('none'); setImg5Start('')}}>저장하기를 누르면 작성한 이력서 내용을 저장합니다.</h2>
        <h2 onMouseOver={()=>{setImg6('block'); setImg6Start(ma6)}} onMouseOut={()=>{setImg6('none'); setImg6Start('')}}>초기화를 누르면 작성한 이력서 내용을 초기화합니다.</h2>
        <span>👈 설명서를 눌러보세요!</span>
      </div>
      <div className="manualImgWrap">
        <img src={img1Start} alt="manual-1" style={{display: img1}}></img>
        <img src={img2Start} alt="manual-1" style={{display: img2}}></img>
        <img src={img3Start} alt="manual-1" style={{display: img3}}></img>
        <img src={img4Start} alt="manual-1" style={{display: img4}}></img>
        <img src={img5Start} alt="manual-1" style={{display: img5}}></img>
        <img src={img6Start} alt="manual-1" style={{display: img6}}></img>
      </div>
    </div>
  )
}

export default ResumeBottom;