import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoadProducts from "./pages/LoadProducts";
import ProductDetailsPage from "./pages/ProductDetailsPage";



function App() {
  const user=false;
  
  return (
   <BrowserRouter>

   
        <Routes>
         
          <Route exact path="/" element={<HomePage/>} /> 
          <Route path="/add-products" element={<LoadProducts />} /> 
          <Route path="/api/products/:id" element={<ProductDetailsPage />} /> 
    </Routes>
   </BrowserRouter>
  );
}

export default App;
