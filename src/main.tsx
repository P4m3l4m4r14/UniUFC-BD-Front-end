import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './theme/global.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import { Toaster } from './components/ui/sonner'
import { UserProvider } from './contexts/user/user-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      <Toaster richColors />
    </UserProvider>
  </StrictMode>,
)
