import './foot.css'
import footPic from '../../assets/Screenshot (21).png'
import footPic1 from '../../assets/trans-5.png'

const Footer = () => {
  return (
    <div className='footer'>
      <p className="footText">Copyright © 2024. All right are reserved</p>
      <a href="https://www.linkedin.com/in/kgaugelo-tladi-1060262b9/" target='_blank'>
        <button className="footBtn">
          <img src={footPic1} alt="LinkedIn" className="footBtnImg" />
        </button>
      </a>
      
      <a href="https://github.com/Roise-s" target='_blank'>
        <button className="footBtn">
          <img src={footPic} alt="GitHub" className="footBtnImg" />
        </button>
      </a>
      
    </div>
  )
}

export default Footer
