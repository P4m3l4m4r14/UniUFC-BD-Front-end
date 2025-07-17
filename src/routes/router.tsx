import { createBrowserRouter } from 'react-router'
import { Home } from '../pages/app/home'
import { AppLayout } from '../pages/app/app-layout'
import { AuthLayout } from '../pages/auth/auth-layout'
import { SignIn } from '../pages/auth/sign-in'
import { TeacherPage } from '@/pages/app/teacher'
import { StudentPage } from '@/pages/app/student'
import { AdminPage } from '@/pages/app/admin'
import { EmployeePage } from '@/pages/app/employee'
import { AdminStudentPage } from '@/pages/app/admin/subpages/admin-student-page'
import { AdminDepartmentsPage } from '@/pages/app/admin/subpages/admin-departments-page'
import { AdminDepartmentDetailsPage } from '@/pages/app/admin/subpages/admin-department-details-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/teacher',
        element: <TeacherPage />,
      },
      {
        path: '/student',
        element: <StudentPage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
        children: [
          {
            path: '/admin/students',
            element: <AdminStudentPage />,
          },
          {
            path: '/admin/departments',
            element: <AdminDepartmentsPage />,
          },
          {
            path: '/admin/departments/:departmentId',
            element: <AdminDepartmentDetailsPage />,
          },
          {
            path: '/admin/*',
            element: <p>Marcelin</p>,
          },
        ],
      },
      {
        path: '/employee',
        element: <EmployeePage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/entrar',
        element: <SignIn />,
      },
    ],
  },
])
