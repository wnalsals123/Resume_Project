import ReactDom from 'react-dom';
 
const PopupDom = ({ children }) => {
    const el = document.getElementById('기본정보');
    return ReactDom.createPortal(children, el);
};
 
export default PopupDom;