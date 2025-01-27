export default interface Remedio {
    nome: string;
    foto: string;
}

export default interface Tema {
    descricao: string;
}

export default interface Farmacia {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    remedio?: Remedio;
    tema?: Tema;
}
