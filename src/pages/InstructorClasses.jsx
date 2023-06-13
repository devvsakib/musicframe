import { useParams } from 'react-router-dom'
import LayoutSize from '../components/Layouts/LayoutSize'
import { useQuery } from '@tanstack/react-query';
import api from '../lib/API';
import ClassCard from '../components/Cards/ClassCard';

const InstructorClasses = () => {
    const { id } = useParams();

    const { data: instructor, isError, isLoading, error } = useQuery({
        queryKey: ['instructor', id],
        queryFn: () => api.get(`/instructors/${id}`)
    })
    return (
        <div className='my-32 mt-20 relative'>
            <LayoutSize>
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
                <div>
                    <div className="w-36 mb-2 mask mask-squircle">
                        <img src={instructor?.data.photoURL} alt={instructor?.data?.name} className='w-full object-fit object-cover object-center' />
                    </div>
                    <h1 className='inline-block bg-gradient-to-br text-transparent bg-clip-text from-primary via-quaternary to-tertiary text-2xl font-bold text-center'>{instructor?.data.name}</h1>

                    <div className=''>
                        <div className='text-md text-gray-400'>
                            <p>Mail: {instructor?.data?.email}</p>
                            <p>Phone: {instructor?.data?.phone || "Private"}</p>
                        </div>
                        <div className='capitalize text-md text-gray-400'>
                            <p>Gender: {instructor?.data?.gender}</p>
                            <p>Joined: {instructor?.data?.createdAt.slice(0, 10)}</p>
                            <p>Total Class: {instructor?.data?.classes?.length || 0}</p>
                            <p>Total Student: {instructor?.data?.totalEnrolled || 0}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r mt-10 h-1 min-w-full sm:w-2 from-primary to-tertiary via-quaternary'></div>
                <h2 className='text-xl font-bold text- mt-5'>Classes</h2>
                {isError && <p className='text-center mt-5'>{error.message}</p>}
                {instructor?.length === 0 && <p className='text-center mt-5'>Instructor Not Found</p>}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-10 pt-5">
                    {
                        instructor?.data.classes?.map((item, index) => (
                            <ClassCard key={index} item={item} />
                        ))
                    }
                </div>
                {instructor?.data.classes?.length === 0 && <p className='text-center mt-5'>No Class Taken Yet</p>}
            </LayoutSize>
        </div>
    )
}

export default InstructorClasses