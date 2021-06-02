import Cycling from './Cycling.js';

const cycling = new Cycling();
const form = document.getElementById('form-new-runner');
const filter = document.getElementById('filter-input');

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => { newRunnerSubmit(e) });
    filter.addEventListener('keyup', filterRunner );
    renderTableRunners();
    renderTableAverages();
    renderRanking();
});

const newRunnerSubmit = (e) => {
    cycling.saveCyclist(e);
}

const renderTableRunners = () => {
    cycling.renderTable();
}

const renderTableAverages = () => {
    cycling.renderAverages();
}

const renderRanking = () => {
    cycling.setRanking();
    cycling.renderRanking();
    cycling.renderAward();
}

const filterRunner = () => {
    const value = filter.value;
    cycling.filterRunner(value);
}