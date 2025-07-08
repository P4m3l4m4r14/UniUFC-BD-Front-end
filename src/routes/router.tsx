import { createBrowserRouter } from 'react-router'
import { Home } from '../pages/app/home'
import { AppLayout } from '../pages/app/app-layout'
import { AuthLayout } from '../pages/auth/auth-layout'
import { SignIn } from '../pages/auth/sign-in'
import { SignUpLayout } from '@/pages/auth/sign-up/sign-up-layout'
import { HomeSignUp } from '@/pages/auth/sign-up/home-sign-up'
import { StudentSignUp } from '@/pages/auth/sign-up/student-sign-up'

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
      {
        path: '/registro',
        element: <SignUpLayout />,
        children: [
          {
            index: true,
            element: <HomeSignUp />,
          },
          {
            path: '/registro/estudante',
            element: <StudentSignUp />,
          },
        ],
      },
    ],
  },
])
