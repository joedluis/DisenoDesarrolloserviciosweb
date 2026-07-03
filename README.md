# Login API

## Descripción

Login API es un servicio web desarrollado con Node.js y Express que permite el registro y la autenticación de usuarios. El proyecto fue desarrollado como evidencia para la actividad **Diseño y Desarrollo de Servicios Web**.

La aplicación permite:

- Registrar nuevos usuarios.
- Iniciar sesión mediante usuario y contraseña.
- Encriptar las contraseñas utilizando bcryptjs.
- Generar un token JWT cuando la autenticación es correcta.
- Responder con mensajes de éxito o error según el resultado de la autenticación.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- bcryptjs
- JSON Web Token (JWT)
- dotenv
- UUID
- Git
- GitHub
- Bruno (para pruebas de la API)

---

## Estructura del proyecto

```
login-api
│
├── src
│   ├── controllers
│   │   └── authController.js
│   ├── models
│   │   └── userModel.js
│   ├── routes
│   │   └── authRoutes.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/joedluis/DisenoDesarrolloserviciosweb.git
```

2. Ingresar a la carpeta del proyecto:

```bash
cd login-api
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear el archivo `.env` con el siguiente contenido:

```env
PORT=3000
JWT_SECRET=mi_clave_super_segura
```

5. Ejecutar el proyecto:

```bash
npm start
```

---

## Endpoints disponibles

### Registrar usuario

**Método**

```
POST
```

**URL**

```
http://localhost:3000/api/register
```

**Body**

```json
{
    "username": "jorge",
    "password": "123456"
}
```

**Respuesta**

```json
{
    "message": "Usuario registrado correctamente"
}
```

---

### Iniciar sesión

**Método**

```
POST
```

**URL**

```
http://localhost:3000/api/login
```

**Body**

```json
{
    "username": "jorge",
    "password": "123456"
}
```

**Respuesta**

```json
{
    "message": "Autenticación satisfactoria",
    "token": "TOKEN_GENERADO"
}
```

---

### Error de autenticación

```json
{
    "message": "Error en la autenticación"
}
```

---

## Pruebas

Las pruebas del servicio web se realizaron utilizando **Bruno**, verificando:

- Registro exitoso de usuarios.
- Validación de usuario ya registrado.
- Inicio de sesión exitoso.
- Error al ingresar credenciales incorrectas.
- Generación correcta del token JWT.

---

## Autor

**Jorge Mercado**

Proyecto desarrollado como evidencia de aprendizaje para el programa **Análisis y Desarrollo de Software**.