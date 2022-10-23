let form = document.querySelector('form');
let ownerInput = document.querySelector('#owner');
let carInput = document.querySelector('#car');
let licenseInput = document.querySelector('#license');
let entryInput = document.querySelector('#entry');
let addCar = document.querySelector('#add-car')

let owner;
let car;
let license;
let entry;
let tableRow;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!ownerInput.value) {
        alert('fill owner')
    } else {
        const carPark = document.querySelector('.car-log');
        tableRow = document.createElement('tr');
        carPark.appendChild(tableRow)
        const onwerDisplay = document.createElement('td');
        onwerDisplay.innerText = ownerInput.value;
        tableRow.appendChild(onwerDisplay);
        owner = true;
    }

    if (!carInput.value) {
        alert('fill car');
    } else {
        const carDisplay = document.createElement('td');
        carDisplay.innerText = carInput.value
        tableRow.appendChild(carDisplay)
        car = true;
    }

    if (!licenseInput) {
        alert('fill license');
    } else {
        const licenseDisplay = document.createElement('td')
        licenseDisplay.innerText = licenseInput.value;
        tableRow.appendChild(licenseDisplay)
        license = true
    }

    if (!entryInput) {
        alert('fill entry time');
    } else {
        const entryDisplay = document.createElement('td');
        const exitAction = document.createElement('td');
        const exit = document.createElement('input');
        exit.setAttribute('type', 'time');
        const action = document.createElement('input');
        action.setAttribute('type', 'button');
        action.value = 'exit'
        entryDisplay.innerText = entryInput.value;
        tableRow.appendChild(entryDisplay);
        tableRow.appendChild(exitAction);
        exitAction.appendChild(exit);
        exitAction.appendChild(action);
        exit.classList.add('exit');
        action.classList.add('exit');
        // exit.style.width = '3.5rem';
        // action.style.width = '3.5rem';
    }




    ownerInput.value = '';
    carInput.value = '';
    licenseInput.value = '';
    entryInput.value = '';


})