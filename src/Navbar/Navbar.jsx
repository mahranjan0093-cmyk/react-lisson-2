import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faInfoCircle , faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="flex gap-6 p-4 text-white">
      <Link className="transition hover:text-blue-500 " to="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link className="transition hover:text-blue-500" to="/about">
        <FontAwesomeIcon icon={faInfoCircle} /> About
      </Link>
      <Link className="transition hover:text-blue-500" to="/contact">
        <FontAwesomeIcon icon={faUser} /> Contact
      </Link>
      <Link className="transition hover:text-blue-500" to="/products">
        <FontAwesomeIcon icon={faCartShopping} /> Products
      </Link>
    </nav>
  )
}

export default Navbar
