import React from 'react'
import userData from '../../../hooks/userData';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
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
  const payHistory = data?.data;

  return (
    <div>
      <h2 className='mb-2'>Payment History</h2>
      <div className='grid mt-3'>
        {payHistory.length == 0 && <p>No history</p>}
        {payHistory.map((item, idx) => (
          <div className="grid border mb-5" key={idx}>
            <div className="flex gap-2 overflow-hidden rounded-l">
              <div className="flex-1 py-2  bg-green-50 relative px-2">
                <div className="">
                  <h3 className=" text-sm font-semibold">{item.className}</h3>
                  <div className="flex mt-2 justify gap-2 text-primary text-sm">
                    <p>${item.price}</p>
                    <p>Paid: {item.date.split("T")[0]}</p>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentHistory