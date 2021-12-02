
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoadProducts from "./pages/LoadProducts";



function App() {
  return (
   <BrowserRouter>

   
        <Routes>
         
          <Route exact path="/" element={<HomePage/>} /> 
          <Route path="/add-products" element={<LoadProducts />} /> 
    </Routes>
   </BrowserRouter>
  );
}

export default App;
