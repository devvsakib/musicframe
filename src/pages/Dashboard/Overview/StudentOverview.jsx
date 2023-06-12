import React from 'react'
import userData from '../../../hooks/userData'
import { useQuery } from '@tanstack/react-query';
import api from '../../../lib/API';

const StudentOverview = () => {
  const [loggedUser] = userData();

  const { data: stats, isLoading, error } = useQuery(
    {
      queryKey: ['studentStats'],
      queryFn: () => api.get(`student/stats/${loggedUser?.email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      })
    }
  )
  console.log(stats?.data);
  return (
    <div>
      <div className='w-full'>
        <h2 className='text-3xl'>Overview</h2>
        <div>
          <div className='flex flex-col md:flex-row'>
            <div className='w-auto mt-3'>
              <div className='shadow-md rounded-md p-4'>
                <div className='flex flex-wrap gap-10 mt-3'>
                  <div className='flex flex-col'>
                    <span className='text-2xl font-semibold text-tertiary'>{stats?.data.totalClass.length}</span>
                    <span className='text-sm'>Total Class</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-2xl font-semibold text-tertiary'>{stats?.data.selectedClass.length}</span>
                    <span className='text-sm'>Selected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentOverview