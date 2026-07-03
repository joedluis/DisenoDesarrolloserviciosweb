// Importa Express
const express = require("express");

// Crea un enrutador de Express
const router = express.Router();

// Importa las funciones del controlador
const {
    register,
    login
} = require("../controllers/authController");

// Ruta para registrar un usuario
router.post("/register", register);

// Ruta para iniciar sesión
router.post("/login", login);

// Exporta el enrutador
module.exports = router;