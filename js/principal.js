console.log("INICIANDO TESTES ------------------------------------\n");

console.log(">>> MATÉRIAS <<<");

// Operações CRUD: Create, read, update, delete

// CREATE
cadastrarMateria("OAC", "2024.2", "Professor A");
cadastrarMateria("Cálculo 3", "2024.2", "Professor B");
cadastrarMateria("Tecnologias", "2024.2", "Professor C");
cadastrarMateria("Estrutura de dados", "2025.1", "Professor D");

// READ
console.log("\nRead das matérias:");
listarMaterias();
contarMaterias();

// UPDATE
console.log("\nUpdate numa matéria:");
editarMateria(2, { professor: "Professor B substituto", turma: "2024.2 - Especial"});

// DELETE
console.log("\nExcluindo uma matéria:");
excluirMateria(4); // Removendo Estrutura de Dados

// READ FINAL
console.log("\nRead final das matérias:");
listarMaterias();
contarMaterias();
console.log("--------------------------------------------------\n\n\n\n\n\n\n\n\n\n\n");



console.log(">>> AVALIAÇÕES <<<");

cadastrarAvaliacao(1, "Prova", "QUA 23/07", 4);
cadastrarAvaliacao(2, "Reposição", "QUI 24/07", 5);
cadastrarAvaliacao(3, "Projeto", "SEX 25/07", 6);
cadastrarAvaliacao(1, "Trabalho valendo ponto extra", "SEG 28/07", 9);

console.log("\nRead das avaliações:");
listarAvaliacoes();
contarAvaliacoes();

console.log("\nUpdate numa avaliação");
editarAvaliacao(1, { data: "QUI 24/07", diasRestantes: 5, status: "Adiada" });

console.log("\nExcluindo uma avaliação:");
excluirAvaliacao(4);

console.log("\nRead final das avaliações:");
listarAvaliacoes();
contarAvaliacoes();
console.log("--------------------------------------------------\n\n\n\n\n\n\n\n\n\n\n");

console.log(">>> RECURSOS <<<");
cadastrarRecurso(2, "PDF", "Lista de integrais duplas", "/pdfs/lista1.pdf");
cadastrarRecurso(2, "Link", "Vídeo de resolução", "https://youtube.com/exemplo");
cadastrarRecurso(1, "Link", "Simulador assembly", "https://exemplo.com/simulador");
cadastrarRecurso(3, "Arquivo", "Template p/ projeto", "/docs/template.docx");

// READ
console.log("\nRead dos recursos:");
listarRecursos();
contarRecursos();

// UPDATE
console.log("\nUpdate num recurso:");
// Corrigindo o link e o título do recurso 2
editarRecurso(2, { titulo: "Vídeo resolução (atualizado)", url: "https://youtube.com/novo-link" });

// DELETE
console.log("\nExcluindo um recurso:");
// Removendo o template obsoleto
excluirRecurso(4);

// READ FINAL
console.log("\nRead final nos recursos:");
listarRecursos();
contarRecursos();
console.log("--------------------------------------------------\n\n\n\n\n\n\n\n\n\n\n");