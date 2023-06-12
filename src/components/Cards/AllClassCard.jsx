import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaChair, FaCheck, FaUsers } from 'react-icons/fa'
import { MdClose, MdFeedback } from 'react-icons/md'

const AllClassCard = ({ item, handleApproveClass, handleDenyClass, handleFeedback, setFeedback }) => {
  return (
    <div className="grid border">
      <div className="flex gap-2 overflow-hidden rounded-l">
        <div className="">
          <img className="w-24 h-full object-cover object-center" src={item.classImage} alt="" />
        </div>
        <div className="flex-1 py-2 pr-2 bg-yellow-50 relative">
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
                onClick={() => window.my_modal_3.showModal()}
                className="bg-primary text-white px-5 py-1 rounded-md">
                <MdFeedback />
              </button>
              <button
                onClick={() => handleApproveClass(item._id)}
                disabled={item.status !== 'pending'}
                style={{ opacity: item.status !== 'pending' ? '0.5' : '1' }}
                className="bg-green-500 text-white px-5 py-1 rounded-md">
                <FaCheck />
              </button>
              <button
                onClick={() => handleDenyClass(item._id)}
                disabled={item.status !== 'pending'}
                style={{ opacity: item.status !== 'pending' ? '0.5' : '1' }}
                className="bg-yellow-500 text-white px-5 py-1 rounded-md">
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" key={item._id} className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center">Send Feedback!</h3>
          <textarea className='input border-tertiary w-full mt-2 resize-none focus:outline-none py-2' type="text"
            onChange={(e) => setFeedback(e.target.value)} 
            placeholder='Feedback'
          ></textarea>

          <span className='block mx-auto cursor-pointer bg-primary text-white mt-3 text-center py-2 rounded'
            onClick={() => { handleFeedback(item._id); setFeedback('') }}
          >
            Send
          </span>
          <div className="modal-action">
            <button className="bg-tertiary/30 text-xl py-2 px-3">
              <MdClose />
            </button>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default AllClassCard