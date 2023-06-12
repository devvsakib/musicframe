import React, { useContext, useEffect, useState } from 'react'
import api from '../lib/API'
import LayoutSize from '../components/Layouts/LayoutSize'
import ClassCard from '../components/Cards/ClassCard'
import { useQuery } from '@tanstack/react-query'
import { ThemeContext } from '../contexts/ThemeProvider'

const Classes = () => {
  const { theme } = useContext(ThemeContext)
  const { data: classes, isLoading, isError, error } = useQuery(
    {
      queryKey: 'classes',
      queryFn: () => api.get('/classes')
    }
  )

  return (
    <div className='my-20'>
      <LayoutSize>
        <h1 className={`text-2xl font-bold text-center mt-20 ${theme && "text-white"}`}>All Classes</h1>
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
        </div>}
        {isError && <p className='text-center mt-5'>{error.message}</p>}
        {classes?.data.length === 0 && <p className='text-center mt-5'>Publish your first
          <span className='text-primary text-md'> Class</span>?</p>}
        <div className='grid mt-10 grid-cols-1 md:grid-cols-3 gap-10'>
          {
            classes?.data?.map((item, idx) => (
              <ClassCard key={idx} item={item} idx={idx} />
            )
            )
          }
        </div>
      </LayoutSize>
    </div>
  )
}

export default Classes