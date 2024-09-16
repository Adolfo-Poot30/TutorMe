//mostrar datos del perfil
document.addEventListener('DOMContentLoaded', async() => {

    const comentariosDiv = document.getElementById('comentarios');
    const AsignaturasLink = document.getElementById('Asignaturas');
    const PerfilLink = document.getElementById('Perfil');

    //obtener token guardado en local
    const token = localStorage.getItem('authToken');
	//alert(token);
    try {
        const response = await fetch('http://localhost:3000/user-profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}` // Envía el token en los encabezados
            }
        });

        if (response.ok) {
            const userData = response.json();
            //console.log('Datos del usuario:', userData);
            alert("datos obtenidos correctamente");
            // Mostrar los datos del usuario en el HTML
            
        } else {
            const errorText = response.text();
            alert(`Error: ${errorText}`);
        }
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        alert('Error al obtener los datos del usuario');
    }

    AsignaturasLink.addEventListener('click', function (event) {
        event.preventDefault();

        comentariosDiv.innerHTML = '';

        comentariosDiv.innerHTML = '<h2>¡Encuentra el tutor ideal para ti!</h2><div class="row mt-4"><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Programación</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Cálculo diferencial</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Algebra</h5></div></div></a></div></div><div class="row mt-4"><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Ingles</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Programación web</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">IOT</h5></div></div></a></div></div><div class="row mt-4"><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Funciones matemática</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Interconexión de redes</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Base de datos</h5></div></div></a></div></div>';
        
    });

	PerfilLink.addEventListener('click', function (event) {
        event.preventDefault();
        comentariosDiv.innerHTML = '<div class="profile-section"><div class="profile-img"><img src="./perfil/img/logo.jpg" width="100" alt="Mi Foto" id="profile-image"></div></div><div class="section"><h2>Información</h2><p>Usuario: </p><p>Nombre: </p><p>Email: </p></div></div>';
        
    });

});
