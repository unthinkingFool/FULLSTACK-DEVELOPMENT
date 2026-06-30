import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product.jsx"
import Men from "./pages/Men.jsx"
import Women from "./pages/Women.jsx"
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className="h-screen w-full gap-10 flex flex-col ">
        <Navbar/>
       <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/product' element={<Product/>}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    
  );
}

export default App;