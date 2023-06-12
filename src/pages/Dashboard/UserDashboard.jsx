import React from 'react'
import useUserType from '../../hooks/useUserType'
import StudentOverview from './Overview/StudentOverview'
import InstructorOverview from './Overview/InstructorOverview'
import AdminOverview from './Overview/AdminOverview'

const UserDashboard = () => {
  const [userType, refetch] = useUserType()
  if (userType?.type === "admin") {
    return <AdminOverview />
  }
  if (userType?.type === "instructor") {
    return <InstructorOverview />
  }
  return <StudentOverview />

}

export default UserDashboard