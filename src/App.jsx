import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <BrowserRouter>
      <div className="backgroundColor">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<SinglePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
