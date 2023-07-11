import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Services from './pages/services/Services';
import Gallery from './pages/Galery/Gallery.jsx';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Footer from './components/footer/Footer';
import PageContainer from './containers/PageContainer';
import ServiceVariant from './pages/servicevariant/ServiceVariant';

function App() {
  return (
    <Router>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="services/" element={<Services />} />
          <Route path="gallery/" element={<Gallery />} />
          <Route path="blog/" element={<Blog />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="servicevariant/" element={<ServiceVariant />} />
        </Routes>
      </PageContainer>
      <Footer />
    </Router>
  );
}

export default App;
