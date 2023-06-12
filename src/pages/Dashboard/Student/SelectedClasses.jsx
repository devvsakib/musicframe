import React from 'react'
import useSClass from '../../../hooks/useSClass';
import { FaApplePay, FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
function SelectedClasses() {
  const [classes, refetch] = useSClass();

  const handleDelete = item => {
    fetch(`https://musicframe-backend.onrender.com/selectedclass/${item._id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success('Class deleted')
        }
        else {
          toast.error('Something went wrong')
        }
      })
  }

  return (
    <div className='grid md:grid-cols-2 gap-10'>
      {
        classes?.length === 0 && <p>No Class Selected</p>
      }
      {
        classes?.map(item => (
          <div className="grid border mt-3">
            <div className="flex gap-2 overflow-hidden rounded-l">
              <div className="">
                <img className="w-24 h-full object-cover object-center" src={item.classImage} alt="" />
              </div>
              <div className="flex-1 py-2  bg-yellow-50 relative px-2">
                <div className="">
                  <h3 className=" text-sm font-semibold">{item.className}</h3>
                  <div className="flex justify gap-2 text-primary text-sm">
                    <p>${item.price}</p>
                  </div>
                </div>
                <div>
                  <div className="text-[11px]">
                    <p>{item.instructorName}</p>
                    <p>{item.instructorEmail}</p>
                  </div>
                  <div className="gap-2 flex justify-start mt-2 ">
                    <Link to={`/dashboard/payment/${item._id}`}>
                      <button
                        className="bg-primary/70 text-white px-5 py-1 rounded-md">
                        Pay
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-primary/70 text-white px-5 py-1 rounded-md">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div >
  )
}

export default SelectedClasses