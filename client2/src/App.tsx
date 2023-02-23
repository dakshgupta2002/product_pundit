import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
import WriteReview from "./pages/WriteReview";

function App() {
  return (
    <div className="h-screen w-screen">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Reviews />} />
          <Route path="/review" element={<WriteReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
