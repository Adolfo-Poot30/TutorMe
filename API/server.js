const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(express.json()); // Middleware para interpretar cuerpos de solicitud JSON

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'G&5!YADqnft@.57',
    database: 'tutor-me'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos', err.stack);
        return;
    }
    console.log('Conexión exitosa');
});

// Endpoint GET
app.get('/usuario', (req, res) => {
    connection.query('SELECT * FROM usuario', (error, results) => {
        if (error) {
            console.error('Error al realizar la consulta', error.stack);
            res.status(500).send('Error al consultar los usuario');
            return;
        }
        res.json(results);
    });
});


// Endpoint POST
app.post('/usuario', async (req, res) => {
    const {nombre_completo, nombre_usuario, correo, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO usuario (nombre_completo, nombre_usuario, correo, password) VALUES (?, ?, ?, ?)';
    connection.query(query, [nombre_completo, nombre_usuario, correo, hashedPassword], (error, results) => {
        if (error) {
            console.error('Error al crear cuenta', error.stack);
            res.status(500).send('Error');
            return;
        }
        res.status(201).send(`Usuario creado, ID: ${results.insertId}`);
    });
});


// Endpoint PUT para actualizar usuario
app.put('/usuario/:id', (req, res) => {
    const { id } = req.params;
    const { nombre_completo, nombre_usuario, id_usuario, correo, password } = req.body;
    const query = 'UPDATE usuario SET nombre_completo = ?, nombre_usuario = ?, id_usuario = ?, correo = ?, password = ? WHERE id_usuario = ?';
    connection.query(query, [nombre_completo, nombre_usuario, id_usuario, correo, password], (error, results) => {
        if (error) {
            console.error('Error al actualizar datos', error.stack);
            res.status(500).send('Error al actualizar datos');
            return;
        }
        res.send(`Usuario con ID: ${id} actualizado`);
    });
});


// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const { nombre_usuario, password } = req.body;

    const query = 'SELECT * FROM usuario WHERE nombre_usuario = ?';
    connection.query(query, [nombre_usuario], async (error, results) => {
        if (error) {
            console.error('Error al buscar usuario', error.stack);
            res.status(500).send('Error');
            return;
        }

        if (results.length === 0) {
            return res.status(401).send('Usuario no encontrado');
        }

        const user = results[0];

        /*console.log('Hash from DB:', user.password); // Debugging line
        console.log('Password provided:', password);*/

        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        const match = await bcrypt.compare(password, user.password);
        console.log('¿sesion iniciada?', match);
        if (!match) {
            return res.status(401).send('Contraseña incorrecta');
        }

        // Generar un token JWT
        const token = jwt.sign({ id: user.id_usuario, nombre_usuario: user.nombre_usuario }, 'your_jwt_secret', { expiresIn: '1h' });
        //console.log(token);
        res.json({ token });
    });
});

// Middleware para proteger rutas con JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    //console.log('Token recibido:', token);
    if (token == null) return res.sendStatus(401);
    
    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) console.error('Error al verificar el token:', err); return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Ruta protegida, funcion para obtener datos del usuario
app.get('/user-profile', authenticateToken, (req, res) => {
    res.json({ nombre_completo: req.user.nombre_completo, nombre_usuario: req.user.nombre_usuario, correo: req.user.correo });
});


//Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

process.on('SIGINT', () => {
    connection.end((err) => {
        if (err) {
            console.error('Error al cerrar la conexión', err.stack);
        }
        console.log('Conexión cerrada');
        process.exit();
    });
});
