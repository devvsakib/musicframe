import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeProvider"

const MFTitle = ({ title, tagline }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`mb-10 text-center ${theme && "text-white"}`}>
      <h3 className="text-2xl mb-5">{title}</h3>
      <p className="text-base w-auto sm:w-6/12 mx-auto">{tagline}</p>
    </div>
  )
}
export default MFTitle