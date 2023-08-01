// variáveis
const nome = document.querySelector('#nome');
const telefone = document.querySelector('#telefone');
const form = document.querySelector('form');
const contatosNomes = [];
const contatoTelefones = [];

// funções
const validarForm = () => {
    if((nome.value == '') || (telefone.value == '')) {
        return false;
    } else {
        return true;
    }
}

const limparForm = () => {
    nome.value = '';
    telefone.value = '';
}

const exibirContatos = () => {
    const tabela = document.querySelector('tbody');
    let contato = document.createElement('tr');
    contato.innerHTML = `
        <td>
            ${nome.value}
        </td>
        <td>
            ${telefone.value}
        </td>
    `
    tabela.append(contato);
    limparForm();
}

const salvarContatos = () => {
    if(validarForm()) {
    contatosNomes.push(nome.value);
    contatoTelefones.push(telefone.value);
    exibirContatos();
    } else {
        console.log('n validou');
    }
}

// eventos
form.addEventListener('submit', (e) => {
    e.preventDefault();
    salvarContatos();
    
})