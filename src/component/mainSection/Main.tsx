import pic1 from '../../assets/trans-5.png';
import pic2 from '../../assets/Screenshot (21).png';
import pic3 from '../../assets/DSC00035.jpg';
import './main.css'

const Main = () => {
  return (
    <div className='mainSection'>
        <div className="mainDiv1">
            <p className="full">Full Stack React Developer</p>
            <p className="innerFull">
            Am a passionate React Developer based in Pretoria, South Africa. With <span className='nnn'>2.5+ years</span> of 
            experience
            </p>
            <div className="innermainDiv1">
                <button className="innerInnerbtn">
                    <img src={pic1} alt="LinkedIn" className='innerInnerbtnPic'/>
                </button>
                <button className="innerInnerbtn">
                    <img src={pic2} alt="GitHub" className='innerInnerbtnPic1' />
                </button>
            </div>
        </div>
        <div className="mainDiv2">
            <img src={pic3} alt="My Pic" className='mainDiv2Pic'/>
        </div>
      
    </div>
  )
}

export default Main
