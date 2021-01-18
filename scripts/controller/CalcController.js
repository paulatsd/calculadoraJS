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