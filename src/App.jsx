import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import "./index.scss";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;