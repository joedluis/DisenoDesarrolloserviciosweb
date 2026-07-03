// Importa la librería bcrypt para encriptar las contraseñas
const bcrypt = require("bcryptjs");

// Importa la librería jsonwebtoken para generar el token
const jwt = require("jsonwebtoken");

// Importa la función para generar identificadores únicos
const { v4: uuidv4 } = require("uuid");

// Importa el arreglo donde se almacenan los usuarios
const users = require("../models/userModel");

/**
 * Función para registrar un nuevo usuario
 */
const register = async (req, res) => {

    // Obtiene el usuario y la contraseña enviados desde el cliente
    const { username, password } = req.body;

    // Verifica que los datos fueron enviados
    if (!username || !password) {
        return res.status(400).json({
            message: "Debe ingresar usuario y contraseña"
        });
    }

    // Verifica si el usuario ya existe
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        return res.status(400).json({
            message: "El usuario ya está registrado"
        });
    }

    // Encripta la contraseña
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Crea el nuevo usuario
    const newUser = {
        id: uuidv4(),
        username,
        password: encryptedPassword
    };

    // Guarda el usuario en memoria
    users.push(newUser);

    // Respuesta exitosa
    res.status(201).json({
        message: "Usuario registrado correctamente"
    });

};

/**
 * Función para iniciar sesión
 */
const login = async (req, res) => {

    // Obtiene el usuario y contraseña enviados
    const { username, password } = req.body;

    // Busca el usuario
    const user = users.find(user => user.username === username);

    // Si no existe
    if (!user) {
        return res.status(401).json({
            message: "Error en la autenticación"
        });
    }

    // Compara la contraseña enviada con la almacenada
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.status(401).json({
            message: "Error en la autenticación"
        });
    }

    // Genera el token JWT
    const token = jwt.sign(

        {
            id: user.id,
            username: user.username
        },

        process.env.JWT_SECRET,

        {
            expiresIn: "1h"
        }

    );

    // Respuesta exitosa
    res.status(200).json({
        message: "Autenticación satisfactoria",
        token
    });

};

// Exporta las funciones
module.exports = {
    register,
    login
};