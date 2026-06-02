import { Link } from "react-router-dom"

function Btn() {
  return (
    <div className="flex gap-4">
      <Link to="/signin" className="blue-btn">
        Sign in
      </Link>
      <Link to="/signup" className="green-btn">
        Sign up
      </Link>
    </div>
  )
}

export default Btn
