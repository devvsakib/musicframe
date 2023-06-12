import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="min-h-screen grid place-content-center"><svg
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
                stroke="#0EB7BE"
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
        </svg></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;