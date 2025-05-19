import './App.css';
import Land from './pages/Land';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaQuestionCircle,FaPhoneAlt } from 'react-icons/fa';


function App() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/help" element={<Faqs/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Bottom Navigation */}
      {location.pathname !== '/' && (
        <nav className="bottom-nav">
  <Link to="/home" className={isActive('/home') ? 'nav-item active' : 'nav-item'}>
    <FaHome size={22} />
    <span className="nav-text">Home</span>
  </Link>
  <Link to="/cart" className={isActive('/cart') ? 'nav-item active' : 'nav-item'}>
    <FaShoppingCart size={22} />
    <span className="nav-text">Cart</span>
  </Link>
  <Link to="/help" className={isActive('/help') ? 'nav-item active' : 'nav-item'}>
    <FaQuestionCircle size={22} />
    <span className="nav-text">Help</span>
  </Link>
  <Link to="/contact" className={isActive('/contact') ? 'nav-item active' : 'nav-item'}>
    <FaPhoneAlt size={22} />
    <span className="nav-text">Contact</span>
  </Link>
</nav>



      )}
    </div>
  );
}

export default App;
