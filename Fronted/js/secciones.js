// Esperamos a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtenemos el elemento <div> de comentarios
    const comentariosDiv = document.getElementById('comentarios');

    // Obtenemos los elementos <a> que hará el cambio de sección
    const AsignaturasLink = document.getElementById('Asignaturas');
    const PerfilLink = document.getElementById('Perfil');
    // Agregamos un evento de clic al enlace
    AsignaturasLink.addEventListener('click', function (event) {
        // Prevenimos la acción predeterminada del enlace
        event.preventDefault();

        // Borramos los comentarios existentes
        comentariosDiv.innerHTML = '';

        // Creamos nuevos elementos de comentarios y los agregamos al <div>
        comentariosDiv.innerHTML = '<h2>¡Encuentra el tutor ideal para ti!</h2><div class="row mt-4"><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Programación</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Cálculo diferencial</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Algebra</h5></div></div></a></div></div><div class="row mt-4"><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Ingles</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Programación web</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">IOT</h5></div></div></a></div></div><div class="row mt-4"><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Funciones matemática</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Interconexión de redes</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Base de datos</h5></div></div></a></div></div>';
        
    });
    PerfilLink.addEventListener('click', function (event) {
        event.preventDefault();
        comentariosDiv.innerHTML = '<h2>¡Encuentra el tutor ideal para ti!</h2><div class="row mt-4"><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Programación</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Cálculo diferencial</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Algebra</h5></div></div></a></div></div><div class="row mt-4"><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Ingles</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Programación web</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">IOT</h5></div></div></a></div></div><div class="row mt-4"><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Funciones matemática</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Interconexión de redes</h5></div></div></a></div><div class="col-md-4"><a href="tutores.html" class="card-link"><div class="card"><div class="card-body"><h5 class="card-title">Base de datos</h5></div></div></a></div></div><style>.card-body{background-color: #3498db;}</style>';
        comentariosDiv.innerHTML = '<div class="profile-section"><div class="profile-img"><img src="./perfil/img/logo.jpg" width="100" alt="Mi Foto" id="profile-image"></div></div><div class="section"><h2>Información</h2><p>Usuario: </p><p>Nombre: </p><p>Email: </p></div></div>';
        
    });

});
