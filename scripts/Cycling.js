export default class Cycling {

    constructor() {
        this.form = document.getElementById('form-new-runner');
        this.table = document.getElementById('table-runners');
        this.modal = document.getElementById('modal');
        this.name = document.getElementById('name');
        this.run1 = document.getElementById('run1');
        this.run2 = document.getElementById('run2');
        this.run3 = document.getElementById('run3');
        this.run4 = document.getElementById('run4');
        this.run5 = document.getElementById('run5');
        this.runners = JSON.parse(localStorage.getItem('runners'));
        if (!this.runners || this.runners.length < 1) {
            this.runners = [];
        }
        this.averages = JSON.parse(localStorage.getItem('averages'));
        if (!this.averages || this.averages.length < 1) {
            this.averages = [];
        }
    }

    saveCyclist(e) {
        e.preventDefault();

        //Set the average
        runs = [this.run1.value, this.run2.value, this.run3.value, this.run4.value, this.run5.value]
        average = this.setAverage(runs);
        //Save averages at localstorage as array
        this.averages.push(average);
        localStorage.setItem('averages', JSON.stringify(this.averages));

        const runner = {
            name: this.name.value,
            run1: this.run1.value,
            run2: this.run2.value,
            run3: this.run3.value,
            run4: this.run4.value,
            run5: this.run5.value,
            average: average
        }

        this.runners.push(runner);
        this.form.reset();
        localStorage.setItem('runners', JSON.stringify(this.runners));

        this.renderTable();
        //Close the modal
        document.getElementById('modal-dismiss').click();
    }

    setAverage(runs) {
        for (const time of runs) {
            time += time;
        }
        const average = time/5;
        return average;
    }

    renderTable() {
        for (let i = 0; i < this.runners.length; i++) {
            const item = this.runners[i];
            
            const row = this.table.getElementsByTagName('tbody')[0].insertRow();
            row.innerHTML = `
            <tr>
                <td>${i+1}</td>
                <td>${item.name}</td>
                <td>${item.run1}</td>
                <td>${item.run2}</td>
                <td>${item.run3}</td>
                <td>${item.run4}</td>
                <td>${item.run5}</td>
                <td><a href="#">Ver</a></td>
            </tr>
            `
        }
    }

}