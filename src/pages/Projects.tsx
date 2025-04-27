import { Button } from '@/components/ui/button'
import './styles/style.css'

const projectsFile = [
  {
    img: '/xora.png',
    title: "Xora",
    dS: "Xora is a Modern UI/UX SaaS website developed using React.js and Tailwind CSS that exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general",
    gitHubLink: 'https://github.com/Roise-s/xora',
    demoLink: "https://xoraa.vercel.app/"
  },
  {
    img: 'zee.png',
    title: "Zee Nxumalo Website",
    dS: "This is a Modern website developed using React.js and Tailwind CSS that exemplifies modern UI/UX principles. Its sleek design and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general",
    gitHubLink: 'https://github.com/Roise-s/zeenxumalo',
    demoLink: 'https://zeenxumalo.vercel.app/'
  },
  {
    img: 'edu.png',
    title: "Edusity",
    dS: "Edu, is a multi-campus public research university. This Website is made to highlight my skills in React working with Vite to improve performance... and improving my skills with React Scroll.",
    gitHubLink: 'https://github.com/Roise-s/edu',
    demoLink: 'https://roise-s.github.io/edu/'
  }
]

const Projects = () => {
  return (
    <div className='projects'>
      {projectsFile.map((projectsF) => (
        <div className="allMap">
          <div className="imgSide">
            <img src={projectsF.img} alt={projectsF.title} />
          </div>

          <div className="dSide">
            <p className="titleP">
              {projectsF.title}
            </p>
            <p className="dP">
              {projectsF.dS}
            </p>

            <a className='btnLink' href={projectsF.gitHubLink} target='_blank'>
              <Button>GitHub</Button>
            </a>

            <a className='btnLink' href={projectsF.demoLink} target='_blank'>
              <Button>Demo</Button>
            </a>

          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
