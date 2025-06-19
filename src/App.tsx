import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { login } from "./store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  const validAuthentication = () => {
    dispatch(login());
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={validAuthentication} />} />
      <Route path="/login" element={<Login onLogin={validAuthentication} />} />
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
  );
}

export default App;
