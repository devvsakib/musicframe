import React from 'react'
import api from '../../../lib/API'
import { useQuery } from '@tanstack/react-query';
import userData from '../../../hooks/userData';
const InstructorOverview = () => {
  const [loggedUser] = userData();
  const { data: stats, isLoading, error } = useQuery(
    {
      queryKey: ['instructorStats'],
      queryFn: () => api.get(`instructor/stats/${loggedUser?.email}`)
    }
  )
  return (
    <div>
      <h2 className='text-3xl'>Overview</h2>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full mt-2'>
          <div className='bg-white shadow-md rounded-md p-4'>
            <h3 className='text-xl font-semibold'>Users</h3>
            <div className='flex flex-wrap gap-10 mt-5 justify-between'>
              <div className='flex flex-col'>
                <span className='text-2xl font-semibold'>{stats?.data?.totalStudent}</span>
                <span className='text-sm'>Total Student</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-2xl font-semibold'>{stats?.data?.totalClasses}</span>
                <span className='text-sm'>Classes</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-2xl font-semibold'>{stats?.data?.totalApprovedClasses}</span>
                <span className='text-sm'>Approved</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-2xl font-semibold'>{stats?.data?.totalPendingClasses}</span>
                <span className='text-sm'>Pending</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-2xl font-semibold'>{stats?.data?.totalDeniedClasses}</span>
                <span className='text-sm'>Denied</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstructorOverview