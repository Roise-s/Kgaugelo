import './cont.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>
            Send me a message <img src={msg_icon} alt="" />
        </h3>
        <p>Feel free to reach out through the contact form or find my contact information below. Your feedback, questions and interveiws are important to me as I strive to provide exceptional service.</p>
        <ul>
            <li><img src={mail_icon} alt="" /> milkeyroise@gamil.com</li>
            <li><img src={phone_icon} alt="" /> +27 71 648 2966</li>
            <li><img src={location_icon} alt="" /> 363 Block F1 New Eersterus, Hammanskraal<br/> Pretoria, South Africa</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label>From</label>
            <input type="text" name='name' placeholder='Enter your Email' required/>
            <label>Subject</label>
            <input type="text" name='phone' placeholder='e.g Job role, Interveiws etc' required/>
            <label>Compose email</label>
            <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
