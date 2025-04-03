// Ejemplo en App.tsx usando react-router-dom v6
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./ui/pages/Dashboard/Home"; // Ensure the file exists at this path or adjust the path accordingly
import SignIn from "./ui/pages/AuthPages/SignIn";
import SignUp from "./ui/pages/AuthPages/SignUp";
import RequireAuth from "./ui/components/common/RequireAuth";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Rutas protegidas */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}