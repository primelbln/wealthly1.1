import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-zinc-900 text-center p-3 text-white">
      Made by L & F with{" "}
      <FontAwesomeIcon style={{ color: "#fff" }} icon={faHeart} />
    </div>
  );
};

// bg-zinc-900 text-center relative h-32 w-32 right-10 p-3 text-white
export default Footer;
