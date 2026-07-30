const materias = [];
let proximoIdMateria = 1;

function cadastrarMateria(nome, turma, professor) {
    const novaMateria = {
        id: proximoIdMateria++,
        nome: nome,
        turma: turma,
        professor: professor
    };
    materias.push(novaMateria);
    console.log(`[Matérias] Matéria '${nome}' cadastrada com sucesso.`);
}

function listarMaterias() {
    if (materias.length === 0) {
        console.log("[Matérias] Nenhuma matéria cadastrada.");
        return;
    }
    console.table(materias);
}

function editarMateria(id, novasInformacoes) {
    const index = materias.findIndex(mat => mat.id === id);
    if (index === -1) {
        console.log(`[Matérias] Erro: Matéria com ID ${id} não encontrada.`);
        return;
    }
    
    materias[index] = { ...materias[index], ...novasInformacoes };
    console.log(`[Matérias] Matéria ID ${id} atualizada com sucesso.`);
}

function excluirMateria(id) {
    const index = materias.findIndex(mat => mat.id === id);
    if (index === -1) {
        console.log(`[Matérias] Erro: Matéria com ID ${id} não encontrada para exclusão.`);
        return;
    }
    materias.splice(index, 1);
    console.log(`[Matérias] Matéria ID ${id} excluída com sucesso.`);
}

function contarMaterias() {
    console.log(`[Matérias] Total de matérias cadastradas: ${materias.length}`);
    return materias.length;
}