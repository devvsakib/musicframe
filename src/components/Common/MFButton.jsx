import { Link } from "react-router-dom"

const MFButton = ({text, path, fnc}) => {
  return (
    <button onClick={fnc} className="bg-gradient-to-br from-primary to-quaternary px-4 py-1 rounded text-white font-semibold transition-all hover:scale-105 duration-200 ease-linear">
      <Link to={path}>
        {text}
      </Link>
    </button>
  )
}
export default MFButton