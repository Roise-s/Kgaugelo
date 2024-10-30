import TechList from '../TechList'
import './tech.css'

const Tech = () => {

  return (
    <div className='mainTech'>
        <p className="tech">
            Tech Stack
        </p>
        <div className="techDiv">
            <TechList  title="Front End" />
            <TechList  title="Back End" />
        </div>
      
    </div>
  )
}

export default Tech
