import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-flamingo-100 text-center p-3 mt-5 text-white">
      Made by L & F with{" "}
      <FontAwesomeIcon style={{ color: "#fff" }} icon={faHeart} />
    </div>
  );
};

export default Footer;




