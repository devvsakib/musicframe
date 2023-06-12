import { useQuery } from '@tanstack/react-query';
import api from '../../../lib/API';
import userData from '../../../hooks/userData';

const EnrolledClasses = () => {
  const [loggedUser] = userData();
  const { data, isLoading } = useQuery({
    queryKey: 'enrolledClasses',
    queryFn: () =>
      api.get(`enrolledclasses?email=${loggedUser?.email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error fetching enrolled classes</div>;
  }

  const enrolledClasses = data?.data;
  return (
    <div>
      <h2>Enrolled Classes</h2>
      <div className='grid mt-3'>
        {
          enrolledClasses.length == 0 && <p>Select a class now!</p>
        }
        {enrolledClasses.map((item, idx) => (
          <div className="grid border mb-5" key={idx}>
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClasses;
