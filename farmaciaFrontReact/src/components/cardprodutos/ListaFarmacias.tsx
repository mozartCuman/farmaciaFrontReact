// components/CardProdutos/ListaFarmacias.tsx
import { useEffect, useState } from 'react';
import { getFarmacias } from './farmaciaService';
import Farmacia from '../../models/Farmacia';
import CardProdutos from './CardProdutos';

function ListaFarmacias() {
  const [farmacias, setFarmacias] = useState<Farmacia[]>([]);

  useEffect(() => {
    getFarmacias().then(response => {
      setFarmacias(response.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {farmacias.map(farmacia => (
        <CardProdutos key={farmacia.id} farmacia={farmacia} />
      ))}
    </div>
  );
}

export default ListaFarmacias;
