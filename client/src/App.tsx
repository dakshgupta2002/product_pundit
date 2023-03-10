import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Reviews from "./pages/Reviews";
import SearchPage from "./pages/Search";
import Signup from "./pages/Signup";
import WriteReview from "./pages/WriteReview";

function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/" element={<Reviews />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/review/:id" element={<WriteReview />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
