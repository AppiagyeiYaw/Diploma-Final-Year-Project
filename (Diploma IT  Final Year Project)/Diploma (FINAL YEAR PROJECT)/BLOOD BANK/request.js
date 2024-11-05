const stockData = {
    'Sunyani Teaching Hospital': { 'A+': 10, 'A-': 5, 'B+': 8, 'B-': 4, 'O+': 12, 'O-': 3, 'AB+': 6, 'AB-': 2 },
    'Sunyani Municipal Hospital': { 'A+': 15, 'A-': 7, 'B+': 5, 'B-': 6, 'O+': 10, 'O-': 4, 'AB+': 3, 'AB-': 1 },
    'Sunyani SDA Hospital': { 'A+': 8, 'A-': 6, 'B+': 9, 'B-': 3, 'O+': 14, 'O-': 5, 'AB+': 7, 'AB-': 4 }
};

function populateBloodDropdowns() {
    const hospitals = ['sun-teach-hosp', 'sun-muni-hosp', 'sun-sda-hosp'];
    hospitals.forEach(hospitalId => {
        const select = document.getElementById(hospitalId);
        Object.keys(stockData['Sunyani Teaching Hospital']).forEach(bloodType => {
            const option = document.createElement('option');
            option.value = bloodType;
            option.textContent = bloodType;
            select.appendChild(option);
        });
    });
}

function updateStockDisplay() {
    const hospitals = [
        { id: 'sun-teach-hosp', name: 'Sunyani Teaching Hospital' },
        { id: 'sun-muni-hosp', name: 'Sunyani Municipal Hospital' },
        { id: 'sun-sda-hosp', name: 'Sunyani SDA Hospital' }
    ];
    hospitals.forEach(hospital => {
        const dropdown = document.getElementById(hospital.id);
        const stockDisplay = document.getElementById(`stock-${hospital.id}`);
        dropdown.addEventListener('change', function () {
            const selectedBlood = dropdown.value;
            if (selectedBlood !== 'select') {
                stockDisplay.textContent = stockData[hospital.name][selectedBlood] + ' pints';
            } else {
                stockDisplay.textContent = '--';
            }
        });
    });
}

function handleFormSubmit() {
    const form = document.getElementById('requestForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const hospital = document.getElementById('hospital').value;
        const bloodType = document.getElementById('bloodType').value;
        const quantity = parseInt(document.getElementById('quantity').value);

        if (stockData[hospital][bloodType] >= quantity) {
            stockData[hospital][bloodType] -= quantity;
            alert(`Request successful! ${quantity} pints of ${bloodType} blood will be sent to ${hospital}.`);
        } else {
            alert(`Insufficient stock for ${bloodType} at ${hospital}.`);
        }

        // Re-update the stock display
        updateStockDisplay();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    populateBloodDropdowns();
    updateStockDisplay();
    handleFormSubmit();
});
