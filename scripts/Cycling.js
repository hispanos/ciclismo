export default class Cycling {

    constructor() {
        this.form = document.getElementById('form-new-runner');
        this.table = document.getElementById('table-runners');
        this.tableAverages = document.getElementById('table-averages');
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

        this.runnerGold = document.getElementById('runner-gold');
        this.timeGold = document.getElementById('time-gold');
        this.awardGold = document.getElementById('award-gold');
        this.runnerSilver = document.getElementById('runner-silver');
        this.timeSilver = document.getElementById('time-silver');
        this.awardSilver = document.getElementById('award-silver');
        this.runnerBronze = document.getElementById('runner-bronze');
        this.timeBronze = document.getElementById('time-bronze');
        this.awardBronze = document.getElementById('award-bronze');
    }

    saveCyclist(e) {
        e.preventDefault();

        //Set the average
        const runs = [this.run1.value, this.run2.value, this.run3.value, this.run4.value, this.run5.value]
        const average = this.setAverage(runs);
        //Save averages at localstorage as array
        this.averages.push(average);
        localStorage.setItem('averages', JSON.stringify(this.averages));

        //Set object runner
        const runner = {
            name: this.name.value,
            run1: this.run1.value,
            run2: this.run2.value,
            run3: this.run3.value,
            run4: this.run4.value,
            run5: this.run5.value,
            average: average
        }

        //Save runner at localstorage
        this.runners.push(runner);
        this.form.reset();
        localStorage.setItem('runners', JSON.stringify(this.runners));

        this.renderTable();
        this.renderAverages();
        //Close the modal
        document.getElementById('modal-dismiss').click();
    }

    setAverage(runs) {
        let time = 0;
        runs.forEach((run) => {
            const timeRun = parseInt(run); 
            time += timeRun;
        });

        const average = time/5;
        return average;
    }

    renderTable() {
        this.table.getElementsByTagName('tbody')[0].innerHTML = ``;
        this.runners.forEach((item, i) => {
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
        })

    }

    renderAverages() {
        this.tableAverages.getElementsByTagName('tbody')[0].innerHTML = ``;
        this.runners.forEach((item, i) => {
            const row = this.tableAverages.getElementsByTagName('tbody')[0].insertRow();
            row.innerHTML = `
            <tr>
                <td>${i+1}</td>
                <td>${item.name}</td>
                <td>${item.average}</td>
            </tr>
            `
        })
    }

    getRanking() {
        if (this.runners.length >= 3) {
            const order = this.runners.sort((a, b) => a.average - b.average);
            const top3 = order.slice(0,3)
            return top3;
        }else{
            return false;
        }
        
    }

    renderRanking(ranking) {
        if (ranking !== false && ranking.length >= 3) {
            this.runnerGold.innerText = ranking[0].name.toUpperCase();
            this.timeGold.innerText = ranking[0].average;

            this.runnerSilver.innerText = ranking[1].name.toLowerCase();
            this.timeSilver.innerText = ranking[1].average;

            this.runnerBronze.innerText = this.letterCapital(ranking[2].name);
            this.timeBronze.innerText = ranking[2].average;
        }
    }

    letterCapital(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderAward(ranking) {
        if (ranking !== false && ranking.length >= 3) {
            let awardGold = 0;
            const nameGold = ranking[0].name.length;
            if (nameGold < 15) {
                awardGold = 25000000;
            }else if(nameGold >= 15 && nameGold <= 30) {
                awardGold = 27500000;
            }else {
                awardGold = 30000000;
            }
            if (ranking[0].name === 'PERIQUITO PEREZ') {
                awardGold += awardGold;
            }

            let awardSilver = 0;
            const nameSilver = ranking[1].name.length;
            if (nameSilver < 10) {
                awardSilver = 15000000;
            }else if(nameSilver >= 10 && nameSilver <= 25) {
                awardSilver = 17500000;
            }else {
                awardSilver = 20000000;
            }
            if (ranking[1].name === 'PERIQUITO PEREZ') {
                awardGold += awardGold;
            }

            let awardBronze = 0;
            const nameBronze = ranking[2].name.length;
            if (nameBronze < 13) {
                awardBronze = 7500000;
            }else if(nameBronze >= 13 && nameBronze <= 20) {
                awardBronze = 10000000;
            }else {
                awardBronze = 12500000;
            }
            if (ranking[2].name === 'PERIQUITO PEREZ') {
                awardBronze += awardBronze;
            }

            //Render the awards
            this.awardGold.innerText = `$ ${new Intl.NumberFormat().format(awardGold)}`;
            this.awardSilver.innerText = `$ ${new Intl.NumberFormat().format(awardSilver)}`;
            this.awardBronze.innerText = `$ ${new Intl.NumberFormat().format(awardBronze)}`;
            


        }
    }

}