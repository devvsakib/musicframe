import MFButton from '../Common/MFButton'
import { motion } from 'framer-motion'
const InstructorCard = ({ instructor, idx }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: "30%" }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            key={instructor._id} className='bg-white rounded-lg pl-4 sm:pl-10 shadow-md overflow-hidden shadow-tertiary/30 p-4 sm:flex items-start gap-10 relative'>
            <div className='bg-gradient-to-br absolute left-0 top-0 h-full w-1 sm:w-2 from-primary to-quaternary'></div>
            <div className='flex flex-col md:justify-between text-sm md:h-full'>
                <img src={instructor.photoURL} alt={instructor.name} className='border-2 border-tertiary object-fit mx-auto object-cover object-center rounded-full mb-2 w-32 h-32' />
                <MFButton text={"Classes"} path={`/instructor/classes/${instructor._id}`} />
            </div>
            <div className='mt-4'>
                <h2 className='text-xl inline-block font-bold mb-2 bg-gradient-to-br text-transparent bg-clip-text from-primary via-quaternary to-tertiary'>{instructor.name}</h2>
                <div className='text-xs text-gray-400'>
                    <p>Mail: {instructor.email}</p>
                    <p>Phone: {instructor.phone || "Private"}</p>
                </div>
                <div className='capitalize text-xs text-gray-400'>
                    <p>Gender: {instructor.gender}</p>
                    <p>Joined: {instructor.createdAt.slice(0, 10)}</p>
                    <p>Total Class: {instructor.classes?.length || 0}</p>
                    <p>Total Student: {instructor.totalEnrolled || 0}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default InstructorCard