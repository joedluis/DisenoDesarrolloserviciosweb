// Importa el framework Express
const express = require("express");

// Importa la librería dotenv para leer las variables del archivo .env
require("dotenv").config();

// Crea la aplicación de Express
const app = express();

// Permite que el servidor reciba datos en formato JSON
app.use(express.json());

// Define el puerto donde se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Ruta de prueba para verificar que el servidor funciona
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API de Registro e Inicio de Sesión"
    });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});