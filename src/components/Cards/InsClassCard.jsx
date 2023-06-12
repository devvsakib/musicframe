import { useState } from 'react'
import { FaChair, FaTrash, FaUsers } from 'react-icons/fa'
import { MdFeedback } from 'react-icons/md'

const InsClassCard = ({ item }) => {
  const [showFeedback, setShowFeedback] = useState(false)

  const handleFeedback = (feed) => {
    setShowFeedback(!showFeedback)
  }

  return (
    <div className="grid border">
      <div className="flex gap-2 overflow-hidden rounded-l">
        <div className="">
          <img className="w-24 h-full object-cover object-center" src={item.classImage} alt="" />
        </div>
        <div className="flex-1 py-2  bg-yellow-50 relative px-2">
          <div className="">
            <h3 className=" text-sm font-semibold">{item.className}
              <span className={`badge hidden sm:block absolute text-[8px] top-0 right-0 ${item.status
                === 'approved' ? 'bg-green-500' : item.status
                  === 'denied' ? 'bg-quaternary/60' : 'bg-yellow-200'}
                  } `}>{item.status}</span>
            </h3>
            <div className="flex justify gap-2 text-primary text-sm">
              <p className="flex items-center gap-1"><FaChair /> {item.availableSeats}</p>
              <p className="flex items-center gap-1"><FaUsers /> {item.numberOfStudents}</p>
              <p>${item.price}</p>
            </div>
          </div>
          <div>
            <div className="text-[11px]">
              <p>{item.instructorName}</p>
              <p>{item.instructorEmail}</p>
            </div>
            <div className="gap-2 flex justify-start mt-2 ">
              <button
                className="bg-primary/70 text-white px-5 py-1 rounded-md">
                <FaTrash />
              </button>
              <button
                disabled={!item?.feedback ? true : false}
                onClick={() => handleFeedback(item?.feedback)}
                className="bg-green-700 relative text-white px-5 py-1 rounded-md">
                <MdFeedback />
                {item?.feedback && <span className='absolute -top-2 -right-[6px] bg-primary rounded-full w-4 text-[10px] h-4'>1</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`feedback transition-all duration-200 ease-linear py-2 ${showFeedback ? '' : 'hidden'}`}
      >
        <p className="text-sm text-center">{item?.feedback}</p>
      </div>
    </div>
  )
}

export default InsClassCard