# Pokédex API

API REST creada con **Node.js**, **Express** y **PostgreSQL** para gestionar una Pokédex personal.  
Permite realizar operaciones **CRUD** sobre los pokemons y sigue una arquitectura **MVC** clara y modular.  
La base de datos está alojada en **Neon** y la API está desplegada en **Vercel**.

---

## 🚀 Funcionalidades

- Obtener todos los pokemons registrados  
- Obtener un pokemon por ID  
- Crear un nuevo pokemon  
- Alternar su estado de “capturado”  
- Eliminar un pokemon  
- Integración con base de datos PostgreSQL  
- Arquitectura MVC modular

---

## 📦 Tecnologías utilizadas

- Node.js  
- Express  
- PostgreSQL (Neon)  
- Vercel  
- ES Modules  
- Arquitectura MVC

---

## 📁 Estructura del proyecto

```
src/
 ├── controllers/
 │    └── pokedex.controller.js
 ├── services/
 │    └── pokedex.services.js
 ├── routes/
 │    └── pokedex.routes.js
 ├── database/
 │    └── db.js
 └── server.js
```

---

## 🔗 Endpoints principales

### Obtener todos los pokemons  
`GET /pokedex`

### Obtener un pokemon por ID  
`GET /pokedex/:id`

### Crear un pokemon  
`POST /pokedex`  
Ejemplo:
```json
{
  "nombre": "pikachu"
}
```

### Alternar estado “capturado”  
`PUT /pokedex/:id`

### Eliminar un pokemon  
`DELETE /pokedex/:id`

---

## 🛠 Instalación y uso

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear archivo `.env` con la variable de entorno:
```env
DATABASE_URL=tu-url-de-neon
```

4. Ejecutar en local:
```bash
npm run dev
```

---

## 🌐 Deploy

La API está desplegada en **Vercel** y conectada a una base de datos **Neon PostgreSQL**.
