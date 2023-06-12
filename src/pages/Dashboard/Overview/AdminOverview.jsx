import React from 'react'
import api from '../../../lib/API'
import { useQuery } from '@tanstack/react-query';

const AdminOverview = () => {

  const { data: stats, isLoading, error } = useQuery(
    {
      queryKey: ['adminStats'],
      queryFn: () => api.get('users/stats')
    }
  )

  return (
    <div className='w-full'>
      <h2 className='text-3xl'>Overview</h2>
      <div>
        <div className='flex flex-col md:flex-row'>
          <div className='w-auto md:w-1/2'>
            <div className='shadow-md rounded-md p-4'>
              <h3 className='text-xl font-semibold text-primary'>Users</h3>
              <div className='flex flex-wrap gap-10 md:justify-between mt-3'>
                <div className='flex flex-col'>
                  <span className='text-2xl font-semibold text-tertiary'>{stats?.data.totalUsers}</span>
                  <span className='text-sm'>Total</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-semibold text-tertiary'>{stats?.data.activeUsers}</span>
                  <span className='text-sm'>Active</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-semibold text-tertiary'>{stats?.data.inactiveUsers}</span>
                  <span className='text-sm'>Inactive</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-semibold text-tertiary'>{stats?.data.totalInstructors}</span>
                  <span className='text-sm'>Instructors</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-semibold text-tertiary'>{stats?.data.totalStudents}</span>
                  <span className='text-sm'>Students</span>
                </div>
              </div>
            </div>
            <div className='mt-5 shadow-md rounded-md p-4'>
              <h3 className='text-xl font-semibold text-primary'>Classes</h3>
              <div className='flex flex-wrap gap-10 md:justify-between mt-3'>
                <div className='flex flex-col'>
                  <span className='text-2xl font-semibold text-tertiary'>{stats?.data.totalClasses}</span>
                  <span className='text-sm'>Total</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-semibold text-tertiary'>{stats?.data.totalApprovedClasses}</span>
                  <span className='text-sm'>Approved</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-semibold text-tertiary'>{stats?.data.totalPendingClasses}</span>
                  <span className='text-sm'>Pending</span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-2xl font-semibold text-tertiary'>{stats?.data.totalDeniedClasses}</span>
                  <span className='text-sm'>Denied</span>
                </div>
              </div>
            </div>
          </div>
          <div>
       
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOverview