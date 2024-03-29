import React from 'react';
import DaumPostcode from "react-daum-postcode";

const PopupPostCode = (props) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)
    props.setPostValue(fullAddress)
    props.setPostBtn('flex')
    props.onClose()
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "162px",
    left: "598px",
    width: "427.188px",
    height: "466px",
    padding: "0px",
    border: "2px solid black",
    borderColor: "#E9967A"
  };

  const postCodeBtnStyle = {
    position: "absolute",
    top: "162px",
    left: "1035px",
    fontSize: "15px",
    width: "50px",
    height: "26px",
    lineHeight: "0px",
    padding: "0px",
    border: "2px solid black",
    borderRadius: "10px",
    cursor: "pointer",
    borderColor: "#E9967A",
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode}/>
      <button type='button' onClick={() => { props.onClose() }} style={postCodeBtnStyle}>닫기</button>
    </div>
  )
}

export default PopupPostCode;