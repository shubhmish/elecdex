document.getElementById('main-button').addEventListener('click', () => {
    toggleVisibility('main-list');
    hideElement('sub-list');
    hideElement('subpart-list');
});

const seriesData = {
    'A-series': ['A250', 'A300', 'A350', 'A400', 'A450'],
    'E-series': ['E100', 'E200', 'E300'],
    'TL-series': ['TL50', 'TL100'],
    'P-series': ['P500', 'P600'],
};

const subpartData = {
    'A250': ['Analog', 'Controller', 'Binder', 'Regulator', 'Sensor', 'LCD/BT', 'Others'],
    'A300': ['Analog', 'Controller', 'Binder'],
    'A350': ['Regulator', 'Sensor'],
    'A400': ['LCD/BT', 'Others'],
    'A450': ['Analog', 'Controller', 'Binder', 'Regulator'],
    // Add subparts for other models as needed
};

document.getElementById('main-list').addEventListener('click', (event) => {
    const series = event.target.getAttribute('data-series');
    if (series) {
        populateList('sub-list', seriesData[series], 'data-model');
        showElement('sub-list');
        hideElement('subpart-list');
    }
});

document.getElementById('sub-list').addEventListener('click', (event) => {
    const model = event.target.getAttribute('data-model');
    if (model) {
        populateList('subpart-list', subpartData[model]);
        showElement('subpart-list');
    }
});

function toggleVisibility(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}

function showElement(id) {
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

function hideElement(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}

function populateList(id, items, dataAttribute = '') {
    const list = document.getElementById(id);
    list.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        if (dataAttribute) {
            li.setAttribute(dataAttribute, item);
        }
        list.appendChild(li);
    });
}
