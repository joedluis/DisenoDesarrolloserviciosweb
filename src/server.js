// Importa el framework Express
const express = require("express");

// Importa dotenv para leer el archivo .env
require("dotenv").config();

// Crea la aplicación
const app = express();

// Importa las rutas de autenticación
const authRoutes = require("./routes/authRoutes");

// Middleware para recibir datos JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Registro e Inicio de Sesión"
    });
});

// Registra las rutas de autenticación
app.use("/api", authRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});