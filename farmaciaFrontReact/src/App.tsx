import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Produtos from './pages/produtos/Produtos';
import Navbar from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext'

function App() {
    return (
        <AuthProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/editarpostagem/:id" component={EditarFarmacia} />
                <Route path="/deletarpostagem/:id" component={DeletarFarmacia} />
                <Route path="/criarpostagem" component={CriarFarmacia} />
            </Routes>
        </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
