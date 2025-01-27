import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between font-quicksand">
      <header className="py-2 px-6 bg-gray-800 text-gray-100 font-semibold text-2xl">
        Categoria
      </header>
      <p className="p-8 text-3xl bg-gray-200 h-full">{categoria.descricao}</p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-gray-100 bg-gray-500 hover:bg-gray-700
                        flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-slate-100 bg-red-700 hover:bg-red-900 w-full 
                    flex items-center justify-center">
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;