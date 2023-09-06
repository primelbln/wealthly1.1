import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLogo from "../assets/logo.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  return (
    <nav className="flex bg-slate-900 text-white justify-between items-center p-4 sticky top-0 z-10 drop-shadow-2xl">
      <img
        className="h-10 w-10 self-center mr-2 "
        src={mainLogo}
        alt="Wealthly Logo"
      />
      <span className="text-2xl font-bold">Wealthly</span>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
