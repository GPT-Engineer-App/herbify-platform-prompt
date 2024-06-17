import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Herbs from "./pages/Herbs.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Signup from "./pages/Signup.jsx";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <>
      <Router>
        {user && <Navbar />}
        <Routes>
          <Route exact path="/" element={user ? <Index /> : <Navigate to="/login" />} />
          <Route exact path="/about" element={user ? <About /> : <Navigate to="/login" />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/herbs" element={<Herbs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;