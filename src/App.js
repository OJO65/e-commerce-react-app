import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Cartpage from "./Pages/Cartpage";
import Homepage from "./Pages/Homepage";
import Checkout from "./Pages/Checkout";
import Signup from "./Components/Signup/Signup";
import Forgotpassword from "./Components/Forgot-password/Forgotpassword";
import NotFound from "./NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Product" element={<Product />}>
            <Route path="productId" element={<Product />} />
          </Route>
          <Route path="/Login" element={<LoginSignup />} />
          <Route path="/Cartpage" element={<Cartpage />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
