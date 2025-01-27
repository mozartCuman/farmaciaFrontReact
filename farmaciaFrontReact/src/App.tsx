import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';


function App() {
    return (
        
        <BrowserRouter>
           <Navbar />
            <Routes>
                <Route path="/deletarcategoria/:id" element={<DeletarCategoria />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastrarcategorias" element={<FormCategoria />} />
                <Route path="/editarcategorias/:id" element={<FormCategoria />} />
                <Route path="/categorias" element={<ListaCategorias />} />
               
            </Routes>
            <Footer/>
        </BrowserRouter>
       
    );
}

export default App;
