import Cycling from './Cycling.js';

const cycling = new Cycling();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-new-runner');
    form.addEventListener('submit', (e) => { newRunnerSubmit(e) })
    renderTableRunners();
});

const newRunnerSubmit = (e) => {
    cycling.saveCyclist(e);
}

const renderTableRunners = () => {
    cycling.renderTable();
}