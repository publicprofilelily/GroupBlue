import './App.css';
import Layout from './Layout';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import ProfilePage from './pages/ProfilePage';
import ShoppingCart from './pages/ShoppingCart';



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/shoppingcart" element={<ShoppingCart/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
