import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={`flex justify-between items-center p-4 text-white ${props.bgColor}`}>
      <div>
        <FontAwesomeIcon icon={faCube} className="text-4xl text-blue-500" />
      </div>
      <Navbar />
      <div className="flex gap-4">
        <Link to="/signin" className="blue-btn">
          Sign in
        </Link>
        <Link to="/signup" className="green-btn">
          Sign up
        </Link>
      </div>
    </header>
  );
}

export default Header;
