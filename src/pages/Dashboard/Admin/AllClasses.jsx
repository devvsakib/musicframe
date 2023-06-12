import { useQuery } from "@tanstack/react-query"
import api from "../../../lib/API"
import AllClassCard from "../../../components/Cards/AllClassCard"
import toast from "react-hot-toast"
import { useState } from "react"

const AllClasses = () => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    {
      queryKey: 'admin-classes',
      queryFn: () => api.get('admin/classes')
    }
  )

  if (isLoading) return (
    <div className="flex flex-col items-center text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={80}
        preserveAspectRatio="xMidYMid"
        style={{ background: 'none' }}
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#0EB7BE"
          strokeWidth="10"
          r="30"
          strokeDasharray="165 57"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
      <p>
        Loading...
      </p>
    </div>
  )

  const handleApproveClass = async (id) => {
    try {
      await api.patch(`admin/classes/approve/${id}`)
      refetch()
      toast.success('Class approved')
    } catch (error) {
      console.log(error)
    }
  }
  const handleDenyClass = async (id) => {
    try {
      await api.patch(`admin/classes/denied/${id}`)
      refetch()
      toast.success('Class denied')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="grid grid-cols-1 gap-5 mb-10">
      {data?.data.map((item, index) => (
        <AllClassCard key={index} item={item}
          handleApproveClass={handleApproveClass}
          handleDenyClass={handleDenyClass}
          refetch={refetch}
        />
      ))}

    </div>
  )
}

export default AllClasses