import React, { useEffect, useState } from 'react';
import Produto from './Produto';

const ProdutoList: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        fetch('http://localhost:5173/produtos')
            .then(response => response.json())
            .then(data => setProdutos(data))
            .catch(error => console.error('Erro ao buscar produtos:', error));
    }, []);

    const deleteProduto = (id: string) => {
        fetch(`http://localhost:5173/produtos/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setProdutos(produtos.filter(produto => produto.id !== id));
        })
        .catch(error => console.error('Erro ao deletar produto:', error));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map(produto => (
                <div key={produto.id} className="p-4 border border-gray-200 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">{produto.nome}</h2>
                    <p className="text-gray-600">{produto.descricao}</p>
                    <p className="text-gray-800 font-bold">R$ {produto.preco.toFixed(2)}</p>
                    <button
                        onClick={() => deleteProduto(produto.id)}
                        className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                    >
                        Deletar
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProdutoList;
