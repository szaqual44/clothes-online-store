import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoadProducts from "./pages/LoadProducts";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";



function App() {
  const user=false;
  
  return (
   <BrowserRouter>

   
        <Routes>
         
          <Route exact path="/" element={<HomePage/>} /> 
          <Route path="/add-products" element={<LoadProducts />} /> 
          <Route path="/products/:id" element={<ProductDetailsPage />} /> 
          <Route path="/register" element={<SignUpPage />} /> 
          <Route path="/login" element={<LoginPage />} /> 
    </Routes>
   </BrowserRouter>
  );
}

export default App;
