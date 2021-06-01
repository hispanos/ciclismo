export default class Cycling {

    constructor() {
        this.form = document.getElementById('form-new-runner');
    }

    saveCyclist(e) {
        e.preventDefault();
        console.log('Hola')
    }

}