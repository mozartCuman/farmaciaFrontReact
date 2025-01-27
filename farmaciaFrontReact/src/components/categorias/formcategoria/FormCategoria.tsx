import { ChangeEvent, useEffect, useState } from 'react';
import Categoria from '../../../models/Categoria';
import { useParams } from 'react-router';
import { atualizar, buscar, cadastrar } from '../../../service/Service';

function FormCategoria() {
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert('A categoria foi atualizada com sucesso!');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('Erro ao atualizar a categoria');
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert('A categoria foi cadastrada com sucesso!');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('Erro ao cadastrar a categoria.');
        }
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="container flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h1 className="text-4xl text-center mb-8 text-gray-800">
          {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
        </h1>
        <form className="w-full flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="text-lg font-semibold text-gray-700">Descrição da Categoria</label>
            <input
              type="text"
              placeholder="Descreva aqui sua categoria"
              name="descricao"
              className="border-2 border-slate-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button
            className="rounded text-white bg-blue-500 hover:bg-blue-700 py-2 w-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            type="submit">
            {id === undefined ? 'Cadastrar' : 'Atualizar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
