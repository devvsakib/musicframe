import api from '../../lib/API'
import { useEffect, useState } from 'react'
import InstructorCard from '../Cards/InstructorCard'
import MFTitle from '../Common/MFTitle'
import LayoutSize from '../Layouts/LayoutSize'
import MFButton from '../Common/MFButton'

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchInstructors = async () => {
    try {
      setLoading(true)
      const { data } = await api.get('/popular-instructors')
      setInstructors(data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInstructors()
  }, [])
  console.log(instructors);
  return (
    <div className="my-32">
      <LayoutSize>
        <MFTitle title="Popular Instructors" tagline="Our popular instructors and explore a diverse range of disciplines." />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-7 md:gap-10 pt-5">
          {
            loading ? <div className="text-center">Loading...</div> : error ? <div className="text-center">Error</div> : instructors.length ?
              instructors.map((instructor, ind) => (
                <InstructorCard key={ind} instructor={instructor} />
              ))
              :
              <div className="text-center col-span-8">No Instructors</div>
          }
        </div>
      {!instructors.length == 0 && 
      <div className="text-center mt-10">
          <MFButton text="All Instructors" path="/instructors" />
        </div>
        }
      </LayoutSize>
    </div >
  )
}

export default PopularInstructors