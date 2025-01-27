import { useEffect, useState } from 'react';
import Farmacia from '../../models/Produto';
import CardProdutos from '../../components/cardprodutos/CardProdutos';
import { getFarmacias } from '../../service/farmaciaService';
function ListaFarmacias() {
  const [farmacias, setFarmacias] = useState<Farmacia[]>([]);

  useEffect(() => {
    getFarmacias().then(response => {
      setFarmacias(response.data);
    });
  }, []);

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {farmacias.map(farmacia => (
        <CardProdutos  key={farmacia.id} farmacia={farmacia}/>
      ))}
    </div>
    </>
  );
}

export default ListaFarmacias;
