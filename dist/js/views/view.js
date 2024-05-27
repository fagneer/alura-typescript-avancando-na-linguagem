export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    dateFormat(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
