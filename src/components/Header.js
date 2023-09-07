import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import mainLogo from "../assets/logo.png";
const Header = () => {
  return (
    <nav className="flex bg-slate-900 text-white justify-between items-center p-4 sticky top-0 z-10 drop-shadow-2xl">
      <img
        className="h-10 w-10 self-center mr-2 "
        src={mainLogo}
        alt="Weathly Logo"
      />
      <NavLink to={"/"}>
        <span className="text-2xl font-bold">Weathly</span>
      </NavLink>

      <ul className="flex justify-center item-center gap-3">
        <li className="text-center hover:text-slate-300">
          <a
            href="https://github.com/primelbln/wealthly1.1/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
            <p>Github</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
