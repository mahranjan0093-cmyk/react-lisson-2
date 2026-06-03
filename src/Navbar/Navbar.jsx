import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faInfoCircle , faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
  return (
    <nav className="flex gap-6 p-4 text-white">
      <Link className="transition hover:text-blue-500 " to="/" onClick={() => { props.setBgColor("bg-orange-400") }}>
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link className="transition hover:text-blue-500" to="/about" onClick={() => { props.setBgColor("bg-green-800") }}>
        <FontAwesomeIcon icon={faInfoCircle} /> About
      </Link>
      <Link className="transition hover:text-blue-500" to="/contact" onClick={() => { props.setBgColor("bg-purple-500") }}>
        <FontAwesomeIcon icon={faUser} /> Contact
      </Link>
      <Link className="transition hover:text-blue-500" to="/products" onClick={() => { props.setBgColor("bg-cyan-600") }}>
        <FontAwesomeIcon icon={faCartShopping} /> Products
      </Link>
    </nav>
  )
}

export default Navbar
