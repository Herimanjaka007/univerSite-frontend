import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import "./index.scss";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import Dashboard from "./pages/Dashboard";
import ProfilEdit from "./components/ProfilEdit";
import University from "./pages/University";
import Error from "./pages/Error";
import ProfilView from "./pages/ProfilView";

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
        <Route path="/university" Component={University}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }></Route>
        <Route path="/dashboard/edit" element={
          <PrivateRoute>
            <ProfilEdit></ProfilEdit>
          </PrivateRoute>
        }></Route>
        <Route path="/university/:idUniversity" Component={ProfilView}></Route>
        <Route path="*" Component={Error}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;