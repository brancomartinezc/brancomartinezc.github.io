class ComponenteAbc extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = `
            <p>a</p>
        `;
    }

}

customElements.define("abc", ComponenteAbc)