import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import LayoutSize from "./LayoutSize";
import { FaBars, FaHistory, FaHome, FaList, FaPlus, FaUsers } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import useUserType from "../../hooks/useUserType";
import MFButton from "../Common/MFButton";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeProvider";
const DashboardLayout = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    navigate("/")
  };
  const instructorMenu = [
    { name: "Dashboard", icon: <FaHome />, link: "/dashboard" },
    { name: "My Classes", icon: <FaList />, link: "/dashboard/myallclasses" },
    { name: "Add Class", icon: <FaPlus />, link: "/dashboard/addclass" },
  ]
  const studentMenu = [
    { name: "Dashboard", icon: <FaHome />, link: "/dashboard" },
    { name: "Selected Classes", icon: <FaList />, link: "/dashboard/selectedclasses" },
    { name: "Enrolled Classes", icon: <FaPlus />, link: "/dashboard/enrolledclasses" },
    { name: "Payment History", icon: <FaPlus />, link: "/dashboard/paymenthistory" },
  ]
  const adminMenu = [
    { name: "Dashboard", icon: <FaHome />, link: "/dashboard" },
    { name: "Manage Classes", icon: <FaList />, link: "/dashboard/allclasses" },
    { name: "Manage Users", icon: <FaUsers />, link: "/dashboard/manageusers" }
  ]
  const [userType, refetch] = useUserType()
  useEffect(() => {
    refetch()
  }, [])


  const location = useLocation();
  return (
    <div className="drawer max-w-[1400px] lg:drawer-open mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <div className="flex justify-between items-center w-full px-4 py-2 bg-secondary lg:hidden">
          <label htmlFor="my-drawer-2" className="py-2 text-lg cursor-pointer  rounded-sm text-primary  drawer-button lg:hidden"><FaBars /></label>
          <span className="text-tertiary font-semibold">
            {
              userType?.type === "instructor" && "Instructor Dashboard"
            }
            {
              userType?.type === "student" && "Student Dashboard"
            }
            {
              userType?.type === "admin" && "Admin Dashboard"
            }
          </span>
        </div>
        <main className={`mt-10 w-full px-5 flex flex-col ${theme && "text-tertiary"}`}>
          <Outlet />
        </main>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-76 h-full text-white bg-secondary">
          <div className="m-10">
            <div className="w-24 border-4 border-white rounded-full overflow-hidden mx-auto mask-squire">
              <img src={user?.photoURL} alt={user?.displayName} />
            </div>
            <div className="relative text-center">
              <h1 className="text-xl mt-3 flex items-center gap-1 font-bold text-center">{user?.displayName} <span className={`w-3 h-3 rounded ${userType?.status === "active" && userType?.type === "admin" ? "bg-primary" : userType?.status === "active" && userType?.type === "instructor" ? "bg-tertiary" : "bg-green-300"}`}></span></h1>
              <div className="grid justify-items-center -mt-1">
                <span className="text-[10px] mb-1">{user?.email}</span>
                <span className="badge text-[10px] font-semibold uppercase">{userType?.type}</span>
              </div>
            </div>
          </div>
          {
            userType?.type === "instructor" && instructorMenu.map((item, index) => (
              <li key={index} className={`${location.pathname === item.link ? 'mb-[16px] bg-quinary border-l-2 border-primary' : 'hover:bg-quinary hover:border-l-2 border-l-2 border-transparent mb-[16px] transition-all duration-200 ease-linear hover:border-primary'}`}
              >
                <Link to={item.link}>{item.icon}{item.name}</Link>
              </li>
            ))
          }
          {
            userType?.type === "student" && studentMenu.map((item, index) => (
              <li key={index} className={`${location.pathname === item.link ? 'mb-[16px] bg-quinary border-l-2 border-primary' : 'hover:bg-quinary hover:border-l-2 border-l-2 border-transparent mb-[16px] transition-all duration-200 ease-linear hover:border-primary'}`}
              >
                <Link to={item.link}>{item.icon}{item.name}</Link>
              </li>
            ))
          }
          {
            userType?.type === "admin" && adminMenu.map((item, index) => (
              <li key={index} className={`${location.pathname === item.link ? 'mb-[16px] bg-quinary border-l-2 border-primary text-white active:text-white' : 'hover:bg-quinary hover:border-l-2 border-l-2 border-transparent mb-[16px] transition-all duration-200 ease-linear hover:border-primary'}`}
              >
                <Link to={item.link}>{item.icon}{item.name}</Link>
              </li>
            ))
          }
          <div className="text-center flex flex-col gap-2 justify-center mt-10">
            <MFButton text={"Home"} path={"/"} />
            <MFButton text={"Logout"} path={"#"} fnc={handleLogOut} />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default DashboardLayout