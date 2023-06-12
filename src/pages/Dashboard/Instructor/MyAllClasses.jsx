import { useState } from 'react'
import api from '../../../lib/API'
import userData from '../../../hooks/userData'
import { useQuery } from '@tanstack/react-query'
import InsClassCard from '../../../components/Cards/InsClassCard'
const MyAllClasses = () => {
  const [loggedUser] = userData()
  const [classes, setClasses] = useState([])

  const { data, isLoading, isError, error, refetch } = useQuery(
    {
      queryKey: 'instructor-classes',
      queryFn: () => api.get(`classes/instructor/${loggedUser?.email}`)
    }
  )
  const { data: numberofStudent, isLoading: getNumberOfStudent } = useQuery(
    {
      queryKey: 'instructor-tstudents',
      queryFn: () => api.get(`classes/instructor/${loggedUser?.email}/students`)
    }
  )

  return (
    <div>
      <h2 className='mb-5'>Total Student Enrolled <span className='text-primary font-semibold'>{numberofStudent?.data?.totalStudent}</span></h2>
      <div className='grid gap-5'>
        {
          data?.data?.map((item, index) => (
            <InsClassCard key={index} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default MyAllClasses