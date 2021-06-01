export default class Cycling {

    constructor() {
        this.form = document.getElementById('form-new-runner');
        this.name = document.getElementById('name');
        this.run1 = document.getElementById('run1');
        this.run2 = document.getElementById('run2');
        this.run3 = document.getElementById('run3');
        this.run4 = document.getElementById('run4');
        this.run5 = document.getElementById('run5');
        this.runners = [];
    }

    saveCyclist(e) {
        e.preventDefault();

        const runner = {
            name: this.name.value,
            run1: this.run1.value,
            run2: this.run2.value,
            run3: this.run3.value,
            run4: this.run4.value,
            run5: this.run5.value,
        }

        this.runners.push(runner);
        e.reset();

        console.log(this.runners);
    }

}