import InnerBar from '@/components/InnerBar'
import './styles/style.css'
import ContactMe from '@/components/ContactMe'

const Navbar = () => {
  return (
    <header className='header'>
      <div className="nameDiv">
        <a href="/">
          <button className="nameboy">
           Kgaugelo.dev
          </button>
        </a>
        
      </div>

      <div className="navbar">
        <InnerBar title='Tech Stack' Context='Tech' />
        <InnerBar title='About Me' Context='About' />
        <ContactMe />
      </div>

      <div className="sentEmail">
        
      </div>
    </header>
  )
}

export default Navbar
