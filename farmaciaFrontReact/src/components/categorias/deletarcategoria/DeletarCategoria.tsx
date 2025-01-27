import { useEffect, useState } from 'react';
import Categoria from '../../../models/Categoria';
import { useNavigate, useParams } from 'react-router';
import { buscar, deletar } from '../../../service/Service';

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('Categoria não encontrada');
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria apagada com sucesso');
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('Erro ao deletar a categoria.');
      }
    }
  }

  function retornar() {
    navigate('/categorias');
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="container bg-gray-700 text-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
        <p className="text-center font-semibold mb-4">
          Você tem certeza de que deseja apagar a categoria a seguir?
        </p>
        <div className="border border-gray-600 flex flex-col rounded-2xl overflow-hidden justify-between">
          <header className="py-2 px-6 bg-gray-900 text-white font-bold text-2xl">Categoria</header>
          <p className="p-8 text-3xl bg-gray-600 h-full">{categoria.descricao}</p>
          <div className="flex">
            <button className="w-full text-white bg-red-700 hover:bg-red-900 py-2" onClick={retornar}>
              Não
            </button>
            <button
              className="w-full text-white bg-gray-500 hover:bg-gray-700 flex items-center justify-center py-2"
              onClick={deletarCategoria}>
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
