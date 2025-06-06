import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import Home from './Home';
import SubCategories from './subCategories/subCategories';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubItems from './subCategories/subItems';
function App() {
  if (true) {
    return (
      <div className="body">
        <div className="container">
          <h1>DA Clothing</h1>
          <p className="maintenance-text">Our website is currently undergoing maintenance.</p>
          <p>We'll be back shortly. Thank you for your patience!</p>
        </div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/contact" element={<Header />} />
          <Route path="/categories/:category" element={<SubCategories />} />
          <Route path="/categories/:category/:subcategory" element={<SubItems />} />
          <Route path="/categories/:category/:subcategory/:item" element={<Item />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
