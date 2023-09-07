import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLogo from "../assets/logo.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// changelog icon for later use
// import { faSitemap } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <nav className="flex bg-slate-900 text-white justify-between items-center p-4 sticky top-0 z-10 drop-shadow-2xl">
      <img
        className="h-10 w-10 self-center mr-2 "
        src={mainLogo}
        alt="Weathly Logo"
      />
      <span className="text-2xl font-bold ">Weathly</span>
      <ul className="flex justify-center item-center gap-6">
        {/* Changelog icon
         <li>
          <FontAwesomeIcon icon={faSitemap} size="2xl" />
        </li> */}
        <li>
          <a
            href="https://github.com/primelbln/wealthly1.1/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
