let form = document.querySelector('form');
let ownerInput = document.querySelector('#owner');
let carInput = document.querySelector('#car');
let vehicleClass = document.querySelector('#class');
let licenseInput = document.querySelector('#license');
let entryInput = document.querySelector('#entry');
let addCar = document.querySelector('#add-car')
let carParkSedan = document.querySelector('.car-log-sedan');
let carParkSuv = document.querySelector('.car-log-suv')

// Input validation
let owner;
let car;
let license;
let entry;
let tableRow;
let rowLengthSedan = [];
let rowLengthSuv = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!ownerInput.value || !carInput.value || !vehicleClass.value || !licenseInput.value || !entryInput.value) {
        alert('fill all blanks');
        if (!ownerInput.value) {
            ownerInput.classList.add('errorClass');
        }
        if (!carInput.value) {
            carInput.classList.add('errorClass');
        }
        if (!licenseInput.value) {
            licenseInput.classList.add('errorClass');
        }
        if (!entryInput.value) {
            entryInput.classList.add('errorClass');
        }
        return
    }

    else {
        if (vehicleClass.value === 'sedan') {
            tableRow = document.createElement('tr');
            carParkSedan.appendChild(tableRow);
            rowLengthSedan.push(1)
            if (rowLengthSedan.length >= 10) {
                alert('car park is filled up')
                return
            }
        } else {
            tableRow = document.createElement('tr')
            carParkSuv.appendChild(tableRow)
            rowLengthSuv.push(1)
            if (rowLengthSuv.length >= 10) {
                alert('car park is filled up')
                return
            }

        }

        //table data for owner name display
        const onwerDisplay = document.createElement('td')
        onwerDisplay.innerText = ownerInput.value
        tableRow.appendChild(onwerDisplay);

        //table data for car name display
        const carDisplay = document.createElement('td')
        carDisplay.innerText = carInput.value;
        tableRow.appendChild(carDisplay)

        //table data for license display
        const licenseDisplay = document.createElement('td')
        licenseDisplay.innerText = licenseInput.value;
        tableRow.appendChild(licenseDisplay)

        //table data for car entry time display
        const entryDisplay = document.createElement('td')
        entryDisplay.innerText = entryInput.value;
        tableRow.appendChild(entryDisplay)

        //table data for exit time
        const exitInput = document.createElement('input')
        exitInput.setAttribute('type', 'time')
        tableRow.appendChild(exitInput)

        //create a 'leave' button for vehicles leaving the park.
        const leaveSec = document.createElement('td')
        const leaveButton = document.createElement('button')
        leaveButton.innerText = 'Exit';
        tableRow.appendChild(leaveSec);
        leaveSec.appendChild(leaveButton)

        ownerInput.classList.add('cleanClass');
        carInput.classList.add('cleanClass');
        licenseInput.classList.add('cleanClass');
        entryInput.classList.add('cleanClass');
    }

    ownerInput.value = '';
    carInput.value = '';
    licenseInput.value = '';
    entryInput.value = '';

})