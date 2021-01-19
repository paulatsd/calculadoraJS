class CalcController {

    constructor(){

        //O underline é para sinalizar o atributo privado
        this._locate = "pt-BR";
        //Pega os elementos HTML com os quais deseja trabalhar
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize(); //inicializa alguns procedimentos na instancia do objetivo
        this.initButtonsEvents();
    }

    //Contém as informação que devem funcionar assim que o objeto desta classe for instanciado
    initialize(){

        //Exibe a data e hora imediatamente
        this.setDisplayDateTime();

        //Repete a exibição da data após o tempo passado em milisegundos (1s)
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    //Aplica diversos eventos em um mesmo elemento
    addEventListenerAll(element, events, fn){
        events.split(' ').forEach( event => {
            element.addEventListener(event, fn, false);
        }); 
    }

    initButtonsEvents(){

        //Pega todos os filhos 'g' de buttons e parts - retorno uma lista de nodes
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        //Para cada botão captura o evento de clique do botão
        buttons.forEach( (btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                //Pega o nome da classe do botão clicado e remove o nome 'btn-' da frente
                console.log(btn.className.baseVal.replace("btn-", ""));
            });

            //Adiciona evento de estilo ao ponteiro do mouse
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = "pointer";
            });
        });
    }

    setDisplayDateTime(){

        //Pega a data, personaliza sua exibição e atribui à seu elemento HTML
        this.displayDate = this.currentDate.toLocaleDateString(this._locate, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        //Exibe a hora
        this.displayTime = this.currentDate.toLocaleTimeString(this._locate);
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    //Escreve no elemento HTML associado à variável
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    //Retorna a data e hora atual
    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}