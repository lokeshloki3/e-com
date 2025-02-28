import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from './components/Banner'
import Signup from './pages/Signup'
import Login from './pages/Login'
import VerifyEmail from "./pages/VerifyEmail"
import PrivateRoute from "./pages/PrivateRoute"
import ProtectedPage from "./pages/ProtectedPage"
import InterestsPage from "./pages/InterestPage"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        <Route
          path="/protected"
          element={
            <PrivateRoute>
              <ProtectedPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/interests"
          element={
            <PrivateRoute>
              <InterestsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
