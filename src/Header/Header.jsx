import Btn from "../Btn/Btn"
import Navbar from "../Navbar/Navbar"
import Logo from "../Logo/Logo"

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Logo />
      <Navbar />
      <Btn />
    </header>
  )
}

export default Header
