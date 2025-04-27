import { FaGithub, FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";
import './styles/style.css'
import { Button } from "@/components/ui/button";

const Footer = () => {

    const date = new Date().getFullYear();

  return (
    <div className='footer'>
      <p className="tilteF">
        Developed by Kgaugelo Tladi
      </p>

      <p className="copyrightF">
        Copyright &copy; {`${date}`}
      </p>

      <div className="socials">
        <a className="abtn" href="https://github.com/Roise-s" target="_blank">
            <Button>
                <FaGithub />
            </Button>
        </a>

        <a className="abtn" href="https://www.tiktok.com/@roiseanimations" target="_blank">
            <Button>
                <FaTiktok />
            </Button>
        </a>

        <a className="abtn" href="https://www.linkedin.com/in/kgaugelo-tladi-1060262b9/" target="_blank">
            <Button>
                <FaLinkedin />
            </Button>
        </a>

        <a className="abtn" href="https://www.instagram.com/roiseanimations/?next=%2F" target="_blank">
            <Button>
                <FaInstagram />
            </Button>
        </a>
      </div>
    </div>
  )
}

export default Footer
