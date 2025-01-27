// components/CardProdutos/EditarFarmacia.tsx
import { useState, useEffect } from 'react';
import { getFarmaciaById, updateFarmacia } from '../../service/farmaciaService' ;
import { useParams } from 'react-router-dom';
import Farmacia from '../../models/Produto';

function EditarFarmacia() {
  const { id } = useParams<{ id: string }>();
  const [farmacia, setFarmacia] = useState<Farmacia | null>(null);

  useEffect(() => {
    getFarmaciaById(Number(id)).then(response => {
      setFarmacia(response.data);
    });
  }, [id]);

  const handleSubmit = () => {
    if (farmacia) {
      updateFarmacia(farmacia.id, farmacia).then(() => {
        // Sucesso na edição
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={farmacia?.titulo} onChange={(e) => setFarmacia({ ...farmacia, titulo: e.target.value })} placeholder="Título" />
      <textarea value={farmacia?.texto} onChange={(e) => setFarmacia({ ...farmacia, texto: e.target.value })} placeholder="Texto" />
      <button type="submit">Editar</button>
    </form>
  );
}

export default EditarFarmacia;
