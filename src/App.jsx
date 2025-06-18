import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import Paste from '@/components/Paste'
import ViewPaste from '@/components/ViewPaste'


const Layout = () => (
  <>
    <Navbar />
    <main className="max-w-5xl mx-auto px-4 mt-6">
      <Outlet />
    </main>
  </>
)

const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/pastes", element: <Paste /> },
      { path: "/paste/:id", element: <ViewPaste /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
