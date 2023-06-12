import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from '../components/Layouts/MainLayout'
import DashboardLayout from '../components/Layouts/DashboardLayout'
import NotFound from "../pages/NotFound";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import AdminRoute from "./AdminRoute";
import {
    AllClasses,
    ManageUsers,
    PaidClasses,
    PaymentHistory,
    EnrolledClasses,
    SelectedClasses,
    AddClass,
    MyAllClasses
} from "../pages/Dashboard";
import InstructorClasses from "../pages/InstructorClasses";
import Pay from "../pages/Dashboard/Student/Pay";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'classes',
                element: <Classes />,
            },
            {
                path: 'instructors',
                element: <Instructors />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'instructor/classes/:id',
                element: <InstructorClasses />
            }
        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <UserDashboard />,
            },
            {
                path: '/dashboard/myallclasses',
                element: <AdminRoute><MyAllClasses /></AdminRoute>,
            },
            {
                path: '/dashboard/addclass',
                element: <AdminRoute><AddClass /></AdminRoute>,
            },
            {
                path: '/dashboard/manageusers',
                element: <AdminRoute><ManageUsers /></AdminRoute>,
            },
            {
                path: '/dashboard/paidclasses',
                element: <AdminRoute><PaidClasses /></AdminRoute>,
            },
            {
                path: '/dashboard/allclasses',
                element: <AdminRoute><AllClasses /></AdminRoute>,
            },
            {
                path: '/dashboard/paymenthistory',
                element: <AdminRoute><PaymentHistory /></AdminRoute>,
            },
            {
                path: 'payment/:id',
                element: <AdminRoute><Pay /></AdminRoute>,
            },
            {
                path: '/dashboard/enrolledclasses',
                element: <AdminRoute><EnrolledClasses /></AdminRoute>,
            },
            {
                path: '/dashboard/selectedclasses',
                element: <AdminRoute><SelectedClasses /></AdminRoute>,
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;