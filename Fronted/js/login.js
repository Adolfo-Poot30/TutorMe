
const form = document.getElementById('register-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    console.log('Formulario enviado');
    // Obtiene los datos del formulario
    const formData = {
        nombre_completo: document.getElementById('name').value,
        nombre_usuario: document.getElementById('user').value,
        correo: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        // Envía los datos al servidor mediante una petición POST
        const response = await fetch('http://localhost:3000/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        // Verifica la respuesta del servidor
        if (response.ok) {
            const result = await response.text();
            alert(result); // Muestra el mensaje de éxito
                window.location.href = './TutorME.html';
        } else {
            const errorText = await response.text();
            alert(`Error al crear el usuario: ${errorText}`);
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Error al enviar el formulario');
    }
});
