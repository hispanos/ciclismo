import Cycling from './Cycling.js';

const cycling = new Cycling();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-new-runner');
    form.addEventListener('submit', (e) => { newRunnerSubmit(e) })
});

const newRunnerSubmit = (e) => {
    cycling.saveCyclist(e);
}