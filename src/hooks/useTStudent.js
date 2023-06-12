import { useQuery } from "@tanstack/react-query";
import api from "../lib/API";

const useTStudent = ({ email }) => {
    const { data: numberofStudent, refetch } = useQuery(
        {
            queryKey: 'instructor-tstudents',
            queryFn: () => api.get(`classes/instructor/${email}/students`)
        }
    )
    console.log(numberofStudent, email)
    return [numberofStudent, refetch]
}
export default useTStudent;
