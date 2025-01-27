import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Produtos from './pages/produtos/Produtos';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
    return (
        
        <BrowserRouter>
           <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos />} />
               
            </Routes>
            <Footer/>
        </BrowserRouter>
       
    );
}

export default App;
