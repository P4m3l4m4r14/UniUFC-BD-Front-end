import { createBrowserRouter } from 'react-router'
import { Home } from '../pages/app/home'
import { AppLayout } from '../pages/app/app-layout'
import { AuthLayout } from '../pages/auth/auth-layout'
import { SignIn } from '../pages/auth/sign-in'
import { SignUp } from '../pages/auth/sign-up'

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
        index: true,
        element: <SignIn />,
      },
      {
        path: '/registrar',
        index: true,
        element: <SignUp />,
      },
    ],
  },
])
