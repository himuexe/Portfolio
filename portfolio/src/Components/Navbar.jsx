import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-90" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/himanshuexe/">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://github.com/himuexe">
          <FaGithub></FaGithub>
        </a>
        <a href="">
          <FaInstagram></FaInstagram>
        </a>
        <a href="https://twitter.com/himuexe">
          <FaSquareXTwitter></FaSquareXTwitter>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
