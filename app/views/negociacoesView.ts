import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento: HTMLElement;
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negocicacao => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negocicacao.data)}</td>
                                <td>${negocicacao.quantidade}</td>
                                <td>${negocicacao.valor}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}