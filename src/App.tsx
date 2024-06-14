import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './global.css'
import { AppLayout } from './pages/AppLayout'
import { Curso } from './pages/Curso'
import { Home } from './pages/Home'
import { TermPrivacy } from './pages/TermPrivacy'
import { TermUsage } from './pages/TermUsage'
import { QueryClientProvider, queryClient } from './service/react-query'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/curso/:id',
        element: <Curso />,
      },
      {
        path: '/termos',
        element: <TermUsage />,
      },
      {
        path: '/privacidade',
        element: <TermPrivacy />,
      }
    ],
  },
])
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
