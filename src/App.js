import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddProducts from "./pages/AddProducts";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import UpdateProducts from "./pages/UpdateProducts";
import { useSelector } from "react-redux";
import ProductList from "./pages/ProductList";


function App() {
  
  const user=useSelector(state=>state.user.currentUser);
  
  return (
   <BrowserRouter>
      <Routes>         
          <Route exact path="/" element={<HomePage/>} /> 
          <Route path="/add-products" element={<AddProducts />} /> 
          <Route path="/update-products" element={<UpdateProducts />} /> 
          {/* <Route path="/products" element={< ProductList/>} />  */}
          <Route path="/products/:id" element={<ProductDetailsPage />} /> 
          <Route path="/register" element={<SignUpPage />} /> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/cart" element={<CartPage />} /> 
    </Routes>
   </BrowserRouter>
  );
}

export default App;
