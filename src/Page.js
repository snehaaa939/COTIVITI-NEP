import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Home';
import Contact from './Contact';
import Layout from './Layout';
import NoPage from './NoPage';
import Footer from './footer';
import './App.css';

function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Contact" element={< Contact />}></Route>
          <Route path='*' element={< NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Page;
