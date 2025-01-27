import CardCategorias from '../cardcategorias/CardCategorias';
import { useEffect, useState } from 'react';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../service/Service';
import { Link } from 'react-router-dom';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('Categoria não encontrada');
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      <div className="flex justify-center w-full my-4 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 py-8">
        <div className="container flex flex-col items-center text-white">
          <div className='flex flex-col gap-4 mb-6 w-full items-center'>
            <Link to='/editarcategorias/:id' className="w-full max-w-xs text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-800 transition duration-300 ease-in-out transform hover:scale-105">
              Editar Categoria por ID
            </Link>
            <Link to='/cadastrarcategorias' className="w-full max-w-xs text-center bg-green-600 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105">
              Cadastrar Categorias
            </Link>
            <Link to='/deletarcategoria/:id' className="w-full max-w-xs text-center bg-red-600 text-white py-3 rounded-lg hover:bg-red-800 transition duration-300 ease-in-out transform hover:scale-105">
              Deletar Categoria por ID
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.length > 0 ? (
              categorias.map((categoria) => (
                <CardCategorias key={categoria.id} categoria={categoria} />
              ))
            ) : (
              <p>Carregando categorias...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
