import { useQuery } from '@tanstack/react-query'
import userData from './userData';
const useSClass = () => {
    const [loggedUser] = userData()

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['selectedClasses', loggedUser?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedclass?email=${loggedUser?.email}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
              })
            return res.json();
        },
    })
    return [classes, refetch]

}
export default useSClass;