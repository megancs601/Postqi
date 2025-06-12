import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import Dashboard from "./pages/DashBoard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { login } from "./store/authSlice";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const dispatch = useDispatch();

  const validAuthentication = () => {
    dispatch(login());
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
