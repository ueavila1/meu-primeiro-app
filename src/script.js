// Simula uma chamada de API para buscar dados do Banco de Dados
// Em uma aplicação real, este fetch apontaria para um servidor backend

fetch('db.json')
    .then(response => response.json())
    .then(data => {

        // Atualiza o status do banco na tela
        document.getElementById('db-status').innerText = data.status;
        document.getElementById('db-version').innerText = 'Versão: ' + data.versao_do_banco;

        // Renderiza as tarefas vindas do "banco"
        const list = document.getElementById('task-list');
        data.itens.forEach(item => {
            let li = document.createElement('li');
            li.innerText = item.task;
            list.appendChild(li);
        });

    })
    .catch(err => {
        document.getElementById('db-status').innerText = '❌ Erro ao conectar no banco.';
        console.error('Erro:', err);
    });
