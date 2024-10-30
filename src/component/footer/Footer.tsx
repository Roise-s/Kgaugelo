import './foot.css'
import footPic from '../../assets/Screenshot (21).png'
import footPic1 from '../../assets/trans-5.png'

const Footer = () => {
  return (
    <div className='footer'>
      <p className="footText">Copyright © 2024. All right are reserved</p>
      <button className="footBtn">
        <img src={footPic1} alt="LinkedIn" className="footBtnImg" />
      </button>
      <button className="footBtn">
        <img src={footPic} alt="GitHub" className="footBtnImg" />
      </button>
    </div>
  )
}

export default Footer
