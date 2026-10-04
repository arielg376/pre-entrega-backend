# 🛒 Pre-Entrega TechLab - Gestión de Productos

Herramienta de línea de comandos (CLI) desarrollada en **Node.js** para gestionar productos de una tienda en línea, consumiendo la API REST de [DummyJSON](https://dummyjson.com).

> **Nota:** La API oficial del curso (FakeStore) estaba caída (error 522/523) al momento del desarrollo, por lo que se utilizó **DummyJSON** como API alternativa. El cambio para volver a FakeStore es de 3 líneas en `index.js` (ver comentarios en el código).

---

## 📋 Descripción

Este proyecto forma parte de la **Pre-Entrega del curso Backend Node.js** de TechLab. El programa interpreta comandos ingresados desde la terminal y ejecuta operaciones CRUD contra una API REST externa, devolviendo los resultados formateados en la consola.

---

## 🚀 Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone <URL-DE-TU-REPO>
   ```

2. **Ingresar al directorio del proyecto:**

   ```bash
   cd pre-entrega-backend
   ```

3. **Instalar dependencias:**

   ```bash
   npm install
   ```

   > *Nota: este proyecto no requiere dependencias externas, por lo que `npm install` no instalará nada. Sin embargo, se incluye como buena práctica.*

4. **Verificar que Node.js esté instalado** (se requiere v18 o superior, por el uso de `fetch` nativo):

   ```bash
   node -v
   ```

5. **Listo. Ya podés usar los comandos** de la sección [Uso](#-uso).

---

## 🎮 Uso

Ejecutá los comandos con `npm run start` seguido de la acción:

### 📦 Listar todos los productos

```bash
npm run start GET products
```

### 🔍 Consultar un producto específico

```bash
npm run start GET products/<productId>
```

**Ejemplo:**

```bash
npm run start GET products/15
```

### ➕ Crear un producto nuevo

```bash
npm run start POST products <title> <price> <category>
```

**Ejemplo:**

```bash
npm run start POST products T-Shirt-Rex 300 remeras
```

### ❌ Eliminar un producto

```bash
npm run start DELETE products/<productId>
```

**Ejemplo:**

```bash
npm run start DELETE products/7
```

### ❓ Ver ayuda

```bash
npm run start
```

---

## 🛠️ Tecnologías utilizadas

- **Node.js** — Entorno de ejecución de JavaScript del lado del servidor.
- **ES Modules** — Sistema de módulos moderno (`"type": "module"` en `package.json`).
- **Fetch API** — Para realizar peticiones HTTP.
- **Async/Await** — Manejo de asincronismo.
- **DummyJSON** — API REST pública de prueba.

---

## 🏗️ Estructura del proyecto

```
pre-entrega-backend/
├── index.js          # Punto de entrada y lógica principal
├── package.json      # Configuración del proyecto
└── README.md         # Este archivo
```

---

## 🧠 Conceptos aplicados

- Captura y procesamiento de argumentos con `process.argv` y `.slice()`.
- Manipulación de strings con `.startsWith()` y `.split()`.
- Manejo de peticiones HTTP (GET, POST, DELETE) con `fetch`.
- Programación asíncrona con `async/await` y `try/catch`.
- Estructura modular y validación de comandos.
- Manejo de errores.

---

## 👨‍💻 Autor

**Ariel González**
Pre-Entrega — Curso Backend Node.js — TechLab

---

## 📄 Licencia

