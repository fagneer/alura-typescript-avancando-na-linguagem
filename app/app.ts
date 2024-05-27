import { NegociacaoController } from "./controllers/NegociacaoController.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}else{
    throw Error('Não foi possivel inicializar a aplicação, verifique se o formulário existe');
}

