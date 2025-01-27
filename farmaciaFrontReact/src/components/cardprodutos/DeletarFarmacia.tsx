// components/CardProdutos/DeletarFarmacia.tsx
import { useEffect, useState } from 'react';
import { deleteFarmacia, getFarmacias } from '../../service/farmaciaService' ;
import Farmacia from '../../models/Produto';

function DeletarFarmacia() {
  const [farmacias, setFarmacias] = useState<Farmacia[]>([]);

  useEffect(() => {
    getFarmacias().then(response => {
      setFarmacias(response.data);
    });
  }, []);

  const handleDelete = (id: number) => {
    deleteFarmacia(id).then(() => {
      // Sucesso na exclusão
      setFarmacias(farmacias.filter(f => f.id !== id));
    });
  };

  return (
    <div>
      {farmacias.map(farmacia => (
        <div key={farmacia.id}>
          <h3>{farmacia.titulo}</h3>
          <button onClick={() => handleDelete(farmacia.id)}>Deletar</button>
        </div>
      ))}
    </div>
  );
}

export default DeletarFarmacia;
