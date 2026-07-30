const recursos = [];
let proximoIdRecurso = 1;

function cadastrarRecurso(idMateria, tipo, titulo, url) {
    const novoRecurso = {
        id: proximoIdRecurso++,
        idMateria: idMateria,
        tipo: tipo, // Ex: "PDF", "Link", "Vídeo"
        titulo: titulo,
        url: url
    };
    recursos.push(novoRecurso);
    console.log(`[Recursos] Recurso '${titulo}' cadastrado com sucesso.`);
}

function listarRecursos() {
    if (recursos.length === 0) {
        console.log("[Recursos] Nenhum recurso cadastrado.");
        return;
    }
    console.table(recursos);
}

function editarRecurso(id, novasInformacoes) {
    const index = recursos.findIndex(rec => rec.id === id);
    if (index === -1) {
        console.log(`[Recursos] Erro: Recurso com ID ${id} não encontrado.`);
        return;
    }
    
    recursos[index] = { ...recursos[index], ...novasInformacoes };
    console.log(`[Recursos] Recurso ID ${id} atualizado com sucesso.`);
}

function excluirRecurso(id) {
    const index = recursos.findIndex(rec => rec.id === id);
    if (index === -1) {
        console.log(`[Recursos] Erro: Recurso com ID ${id} não encontrado para exclusão.`);
        return;
    }
    recursos.splice(index, 1);
    console.log(`[Recursos] Recurso ID ${id} excluído com sucesso.`);
}

function contarRecursos() {
    console.log(`[Recursos] Total de recursos cadastrados: ${recursos.length}`);
    return recursos.length;
}