function fetchData() {
    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('table-body');
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${item.id}</td><td>${item.nombre}</td><td>${item.valor}</td>`;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function addRow(event) {
    event.preventDefault();

    const id = document.getElementById('id-input').value;
    const nombre = document.getElementById('name-input').value;
    const valor = document.getElementById('value-input').value;

    const newRow = { id, nombre, valor };
    const tableBody = document.getElementById('table-body');
    
    const row = document.createElement('tr');
    row.innerHTML = `<td>${newRow.id}</td><td>${newRow.nombre}</td><td>${newRow.valor}</td>`;
    tableBody.appendChild(row);

    saveData(newRow);
}

function saveData(newRow) {
    fetch('./data/data.json')
        .then(response => response.json())
        .then(data => {
            data.push(newRow);
            return fetch('./data/data.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        })
        .catch(error => console.error('Error saving data:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    document.getElementById('data-form').addEventListener('submit', addRow);
});