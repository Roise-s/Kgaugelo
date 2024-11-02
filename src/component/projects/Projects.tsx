import './pro.css'
import picss1 from '../../assets/Screenshot (67).png'


const Projects = () => {
  return (
    <div className='projects'>
      <p className="protitle">PORTFOLIO</p>
      <p className="litterPro">Each project is a unique piece of development</p>

      <div className="proT">
        <div className="pro1">
          <img className='proImgss' src={picss1} alt="Project Picture" />
        </div>
        <div className="pro1">
          <p className="proTitle">EDU</p>
          <p className="proD">
            Edu, is a multi-campus public research university. This Website is made to highlight my skills in React working with Vite to improve performance.... and improving my skills with React Scroll
          </p>
          <div className="boxss">
            <button className='btnBoxss'>
              React with Vite
            </button>
            <button className='btnBoxss'>
               SASS
            </button>
            <a href="https://github.com/Roise-s/edu" target='_blank'>
              <button className='btnBoxss2'>
                View Code
              </button>
            </a>
            
            <a href="https://roise-s.github.io/edu/" target='_blank'>
              <button className='btnBoxss2'>
                Live Site
              </button>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
