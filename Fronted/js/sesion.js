const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//autenticacion
document.getElementById('login-form').addEventListener('submit', async (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const passwordForm = document.getElementById('passwordInput').value;
	/*console.log(username);
	console.log(passwordForm);*/
	try {
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ nombre_usuario: username, password: passwordForm })
		});

		if (response.ok) {
			const data = await response.json();
			const token = data.token;

			// Guarda el token en el almacenamiento local o en una cookie
			localStorage.setItem('authToken', token);

			alert('Inicio de sesión exitoso');
			setTimeout(() => {
				window.location.href = './TutorME.html';
			}, 1000);
		
		} else {
			const errorText = await response.text();
			alert(`Error: ${errorText}`);
		}
	} catch (error) {
		console.error('Error al enviar la solicitud:', error);
		alert('Error al enviar la solicitud');
	}
});

