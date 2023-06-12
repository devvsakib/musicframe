import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import api from "../lib/API";

const userData = () => {
    const { user } = useAuth();

    const { data: loggedUser, isLoading } = useQuery({
        queryKey: ['userType', user?.email],
        queryFn: async () => {
            const res = await api.get(`users/${user?.email}`);
            return res.data.data;
        }
    })
    return [loggedUser, isLoading]

}
export default userData;