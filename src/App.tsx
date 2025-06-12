import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={validAuthentication} />} />
        <Route
          path="/login"
          element={<Login onLogin={validAuthentication} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/*"
          element={<NotFound isAuthenticated={isAuthenticated} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
