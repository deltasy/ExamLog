const avaliacoes = [];
let proximoIdAvaliacao = 1;

function cadastrarAvaliacao(idMateria, tipo, data, diasRestantes) {
    const novaAvaliacao = {
        id: proximoIdAvaliacao++,
        idMateria: idMateria,
        tipo: tipo,
        data: data,
        diasRestantes: diasRestantes,
        status: "Pendente"
    };
    avaliacoes.push(novaAvaliacao);
    console.log(`[Avaliações] Avaliação do tipo '${tipo}' cadastrada com sucesso.`);
}

function listarAvaliacoes() {
    if (avaliacoes.length === 0) {
        console.log("[Avaliações] Nenhuma avaliação cadastrada.");
        return;
    }
    console.table(avaliacoes);
}

function editarAvaliacao(id, novasInformacoes) {
    const index = avaliacoes.findIndex(av => av.id === id);
    if (index === -1) {
        console.log(`[Avaliações] Erro: Avaliação com ID ${id} não encontrada.`);
        return;
    }
    
    avaliacoes[index] = { ...avaliacoes[index], ...novasInformacoes };
    console.log(`[Avaliações] Avaliação ID ${id} atualizada com sucesso.`);
}

function excluirAvaliacao(id) {
    const index = avaliacoes.findIndex(av => av.id === id);
    if (index === -1) {
        console.log(`[Avaliações] Erro: Avaliação com ID ${id} não encontrada para exclusão.`);
        return;
    }
    avaliacoes.splice(index, 1);
    console.log(`[Avaliações] Avaliação ID ${id} excluída com sucesso.`);
}

function contarAvaliacoes() {
    console.log(`[Avaliações] Total de avaliações cadastradas: ${avaliacoes.length}`);
    return avaliacoes.length;
}