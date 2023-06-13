import { useQuery } from '@tanstack/react-query'
import api from '../../../lib/API'
import { MdAdminPanelSettings } from 'react-icons/md'
import { GiTeacher } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import Swal from 'sweetalert2'

const ManageUsers = () => {
  const { data, isLoading, refetch } = useQuery(
    {
      queryKey: 'allUsers',
      queryFn: () => api.get(`users`)
    }
  )

  const handleRole = async (role, email) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to make him/her ${role}!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FA4A6F',
      cancelButtonColor: '#0EB7BE',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          api.patch(`updaterole/${email}`, { type: role })
            .then(res => {
              Swal.fire(
                'Updated!',
                `User is now ${role}!`,
                'success'
              )
              
              refetch();
            })
        } catch (error) {
          console.log(error);
        }
      }
    })

  }

  return (
    <div className='w-[85vw] md:w-full mx-auto   overflow-x-scroll mb-10'>

      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th colSpan={2} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.data?.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.type}</td>
              <td>
                <div className="gap-2 flex justify-start mt-2 ">
                  <button
                    onClick={() => handleRole("admin", user.email)}

                    className="flex flex-col md:flex-row items-center gap-2 bg-green-500 text-white px-2 text-[10px] md:text-sm  sm:px-5 py-2 md:py-1 rounded-md">
                    <MdAdminPanelSettings /> Make Admin
                  </button>
                  <button
                    disabled={user.type === "instructor"}
                    onClick={() => handleRole("instructor", user.email)}
                    style={{ cursor: user.type === "instructor" ? "not-allowed" : "pointer", opacity: user.type === "instructor" ? "0.5" : "1" }}
                    className="flex flex-col md:flex-row items-center gap-2 bg-primary/30 relative text-black px-2 text-[10px] md:text-sm  sm:px-5 py-2 md:py-1 rounded-md">
                    <GiTeacher /> Make Instructor
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ManageUsers