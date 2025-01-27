// components/CardProdutos/CriarFarmacia.tsx
import { useState } from 'react';
import { createFarmacia} from '../../service/farmaciaService' ;
import Farmacia from '../../models/Produto';


function CriarFarmacia() {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');

  const handleSubmit = () => {
    const novaFarmacia: Farmacia = { id: 0, titulo, texto: new Date().toISOString() };
    createFarmacia(novaFarmacia).then(() => {
      // Sucesso na criação
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" />
      <textarea value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Texto" />
      <button type="submit">Criar</button>
    </form>
  );
}

export default CriarFarmacia;
