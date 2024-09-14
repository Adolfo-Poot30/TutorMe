$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

const form = document.getElementById('register-form');
function generarIdAleatorio(min = 1, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
const id_usuario = generarIdAleatorio();  
  
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que el formulario recargue la página

  // Obtiene los datos del formulario
  const formData = {
    nombre_completo: document.getElementById('name').value,
    nombre_usuario: document.getElementById('user').value,
    id_usuario: id_usuario,
    correo: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  try {
    // Envía los datos al servidor mediante una petición POST
    const response = await fetch('/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    // Verifica la respuesta del servidor
    if (response.ok) {
      const result = await response.text();
      alert(result); // Muestra el mensaje de éxito
      window.location.href = '/TutorME.html';
    } else {
      alert('Error al crear el usuario');
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    alert('Error al enviar el formulario');
  }
});