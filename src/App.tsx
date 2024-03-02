import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './global.css'
import { QueryClientProvider, queryClient } from './service/react-query'
import { AppLayout } from './pages/AppLayout'
import { Home } from './pages/Home'
import { Curso } from './pages/Curso'

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
