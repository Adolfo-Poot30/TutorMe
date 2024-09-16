// Arreglo para almacenar los datos
let data = [];

// Índice del registro en edición (-1 si no hay ningún registro en edición)
let editIndex = -1;

// Función para agregar un registro
function addData(name, email) {
    data.push({ name, email });
}

// Función para editar un registro
function editData(index, name, email) {
    data[index] = { name, email };
}

// Función para eliminar un registro por índice
function deleteData(index) {
    data.splice(index, 1);
}

// Función para mostrar los registros en la tabla
function showData() {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell().innerText = item.name;
        row.insertCell().innerText = item.email;
        const editButton = document.createElement('button');
        editButton.innerText = 'Editar';
        editButton.addEventListener('click', () => editRow(index));
        row.insertCell().appendChild(editButton);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.addEventListener('click', () => deleteRow(index));
        row.insertCell().appendChild(deleteButton);
    });
}

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        if (editIndex === -1) {
            // Agregar nuevo registro si no está en edición
            addData(name, email);
        } else {
            // Actualizar registro si está en edición
            editData(editIndex, name, email);
            // Resetear el índice de edición después de actualizar
            editIndex = -1;
        }
        showData();
        document.getElementById('dataForm').reset();
    } else {
        alert('Por favor, ingresa el nombre y el email.');
    }
}

// Función para editar una fila de la tabla
function editRow(index) {
    // Obtener los datos del registro seleccionado
    const selectedData = data[index];
    // Rellenar el formulario con los datos del registro
    document.getElementById('name').value = selectedData.name;
    document.getElementById('email').value = selectedData.email;
    // Establecer el índice de edición
    editIndex = index;
}

// Función para eliminar una fila de la tabla
function deleteRow(index) {
    deleteData(index);
    showData();
}

// Manejar el envío del formulario
document.getElementById('dataForm').addEventListener('submit', handleFormSubmit);

// Mostrar los datos iniciales (opcional)
addData('Jeremy Faulk', 'imkenough@gmail.com');
addData('Raul Donde', 'where@gmail.com');
showData();


