import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import "./index.scss";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('access') !== null;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignupForm}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute>

          </PrivateRoute>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;