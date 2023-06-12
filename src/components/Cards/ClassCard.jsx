import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import userData from "../../hooks/userData";
import toast from "react-hot-toast";
import useSClass from "../../hooks/useSClass";

const ClassCard = ({ item, idx }) => {
    const { className, price, classImage, instructorName, _id } = item;
    const [classes, refetch] = useSClass();
    const [loggedUser] = userData();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        if (loggedUser && loggedUser?.email) {
            const classItem = { classId: _id, price, email: loggedUser?.email, classImage, className, instructorName }
            fetch('http://localhost:5000/selectedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
                        refetch();
                        return toast.success('Class added')
                    }
                    toast.error('Class already added')
                })

        }
        else {
            toast.error('Please login first')
            navigate('/login', { state: { from: location } })
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}


            className={`shadow ${item.availableSeats === "0" && "bg-primary/30"}`}>
            <div className="h-44 overflow-hidden">
                {item.hot && (
                    <motion.span
                        animate={{ scale: [1, 1.3, 1], transition: { duration: 3, repeat: Infinity } }}
                        className="badge absolute right-2 top-2 bg-tertiary text-white"
                    >
                        HOT
                    </motion.span>
                )}
                <img className="w-full object-fit object-cover h-full " src={item.classImage} alt="" />
            </div>
            <div className="p-3 pb-5">
                <h3 className="font-semibold  text-md">{item.className}</h3>
                <p className="text-[12px] text-tertiary">{item.instructorName}</p>
                <div className='text-sm mb-2 md:flex justify-between'>
                    <h3>Seats Left: {item.availableSeats}</h3>
                    <h3>Student Enrolled: {item.numberOfStudents}</h3>
                </div>
                <div className="flex mt-1 mb-2 justify-between">
                    <h3 className="font-bold">${item.price}</h3>
                </div>
                {
                    item.availableSeats > 0 ? (
                        !loggedUser ? <button onClick={handleAddToCart} className="bg-gradient-to-br from-primary to-quaternary px-4 py-1 rounded text-white font-semibold">Enroll Now</button> : <button
                            disabled={classes?.find(c => c.classId === item._id) || loggedUser?.type !== "student"}
                            style={{ background: classes?.find(c => c.classId === item._id) || loggedUser?.type !== "student" ? "#4B5563" : "" }}
                            onClick={handleAddToCart} className="bg-gradient-to-br from-primary to-quaternary px-4 py-1 rounded text-white font-semibold">
                            {classes?.find(c => c.classId === item._id) ? "Added" : "Enroll Now"}
                        </button>
                    ) : (
                        <button className="bg-gradient-to-br from-primary/40 to-quaternary/40 px-4 py-1 rounded text-white font-semibold transition-all" disabled={true}>Class Full</button>
                    )
                }
            </div>
        </motion.div>
    )
}

export default ClassCard