import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBars from './components/NavBars/NavBars';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBars/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/detail" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
