
import './App.css'
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import ProductEdit from "./pages/ProductEdit.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import ProductCreate from "./pages/ProductCreate.jsx";
import Products from "./pages/Products.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/new" element={<ProductCreate />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/:id/edit" element={<ProductEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
