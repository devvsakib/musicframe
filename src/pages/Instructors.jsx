import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import api from "../lib/API"
import LayoutSize from '../components/Layouts/LayoutSize'
import InstructorCard from '../components/Cards/InstructorCard'
import { ThemeContext } from '../contexts/ThemeProvider'

const Instructors = () => {
  const { theme } = useContext(ThemeContext)
  const { data, isLoading, isError, error } = useQuery(
    {
      queryKey: 'instructors',
      queryFn: () => api.get('/instructors')
    }
  )

  return (
    <div className=' mb-20'>
      <LayoutSize>
        <h1 className={`text-2xl font-bold text-center mt-20 ${theme && "text-white"}`}>Our Instructors</h1>
        {isLoading && <div className='mt-5 flex flex-col items-center text-center'>
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
              stroke="#EC3899"
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
        </div>}
        {isError && <p className='text-center mt-5'>{error.message}</p>}
        {data?.data.length === 0 && <p className='text-center mt-5'>Be the first
          <span className='text-primary text-md'> Instructor</span>?</p>}

        {data?.data.length > 0 && (
          <div className='grid md:grid-cols-2 gap-10 mt-10'>
            {data?.data.map((instructor, idx) => (
              <InstructorCard key={instructor._id} instructor={instructor} idx={idx} />
            ))}
          </div>
        )}
      </LayoutSize>
    </div>
  )
}

export default Instructors