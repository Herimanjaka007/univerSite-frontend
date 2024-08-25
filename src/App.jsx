import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import "./index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;