import { motion } from "framer-motion"
import MFButton from "../components/Common/MFButton"
const NotFound = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: "100%" }}
    animate={{ opacity: 1, y: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
      
    className="grid place-content-center min-h-screen min-w-full">
      <img src="/images/notfund.avif" alt="notfound" className="w-3/5 mx-auto" />
      <motion.div
     
      className="text-center mt-5">
      <MFButton text="Go Back" path="/" />
      </motion.div>
    </motion.div>
  )
}

export default NotFound