// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FeaturedProducts from "./components/FeaturedProducts";
import CategoriesSection from "./components/CategoriesSection";
import Newsletter from "./components/Newsletter";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import About from "./pages/About";
import Dev from "./pages/Dev";
// import Register from "./pages/Register"; // You can uncomment this later if needed

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <NavBar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <FeaturedProducts />
                <CategoriesSection />
                <Newsletter />
              </>
            }
          />

          {/* Shop Page */}
          <Route path="/shop" element={<Shop />} />

          {/* Product Detail Page */}
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/about" element={<About />} />
          
          <Route path="/dev" element={<Dev />} />

          {/* Auth Page */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
