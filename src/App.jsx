import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from './pages/ProfilePage'


const router = createBrowserRouter([
  {
    path: "/frontend",
    element: <LandingPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "signUp", element: <SignUpPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
