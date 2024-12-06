import { FaGithub, FaLinkedin, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/Roise-s", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/kgaugelo-tladi-1060262b9/?originalSubdomain=za", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Kgaugelo.dev 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
          <p className="text-[#5542ff]">
            djhfbjh
          </p>
      </div>
    </footer>
  );
};

export default Footer;