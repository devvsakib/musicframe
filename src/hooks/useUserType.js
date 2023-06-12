import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import api from "../lib/API";

const useUserType = () => {
    const { user } = useAuth();

    const { data: userType, refetch, isLoading } = useQuery({
        queryKey: ['userType', user?.email],
        queryFn: async () => {
            const res = await api.get(`users/${user?.email}`);
            return res.data.data;
        }
    })
    return [userType, refetch]
}
export default useUserType;