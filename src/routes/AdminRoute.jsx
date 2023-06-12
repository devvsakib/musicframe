import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useUserType from "../hooks/useUserType";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [userType, refetch] = useUserType()
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && userType?.type === "admin") {
        return children;
    }
    if (user && userType?.type === "instructor") {
        return children;
    }
    if (user && userType?.type === "student") {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;