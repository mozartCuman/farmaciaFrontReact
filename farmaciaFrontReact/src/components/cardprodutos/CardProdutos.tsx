import { Link } from 'react-router-dom';

import { ReactNode } from 'react';
import Farmacia from '../../models/Produto';

interface CardProdutosProps {
    farmacia: Farmacia;
}

function CardProdutos({ farmacia }: CardProdutosProps) {
    let componente: ReactNode;
    const foto = farmacia.remedio?.foto;

    if (foto?.trim() !== "") {
        componente = (
            <img
                src={foto}
                className="h-24 w-24 object-cover rounded-full mx-auto"
                alt={farmacia.remedio?.nome}
            />
        );
    } else {
        componente = (
            <img
                src="https://i.imgur.com/oAa6ekW.png"
                className="h-24 w-24 object-cover rounded-full mx-auto"
                alt={farmacia.remedio?.nome}
            />
        );
    }

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-indigo-600 p-4 flex items-center justify-center">
                {componente}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-center mb-4">{farmacia.remedio?.nome}</h3>
                <h4 className="text-lg font-bold mb-2">{farmacia.titulo}</h4>
                <p className="text-gray-700 mb-2">{farmacia.texto}</p>
                <p className="text-gray-500 mb-2">Tema: {farmacia.tema?.descricao}</p>
                <p className="text-gray-500">Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                }).format(new Date(farmacia.data))}</p>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${farmacia.id}`} className="flex-1 text-center py-3 bg-indigo-500 text-white hover:bg-indigo-700">
                    Editar
                </Link>
                <Link to={`/deletarpostagem/${farmacia.id}`} className="flex-1 text-center py-3 bg-red-500 text-white hover:bg-red-700">
                    Deletar
                </Link>
            </div>
        </div>
    );
}

export default CardProdutos;
