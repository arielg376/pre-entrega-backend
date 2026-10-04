# Pre-Entrega TechLab - Gestión de Productos

Trabajo de pre-entrega para el curso **Backend Node.js** de TechLab.

Herramienta de línea de comandos que permite gestionar productos de una tienda, consumiendo la API de [DummyJSON](https://dummyjson.com).

> **Nota:** La API original del curso (FakeStore) estaba caída (error 522/523) al momento del desarrollo, por lo que usé DummyJSON como alternativa. El código está preparado para volver a FakeStore cambiando 3 líneas comentadas en `index.js`.

---

## 🚀 Cómo ejecutar

Requiere Node.js v18 o superior (por el uso de `fetch` nativo).

```bash
git clone https://github.com/arielg376/pre-entrega-backend.git
cd pre-entrega-backend
npm install
```

---

## 🎮 Uso

| Comando | Acción |
|---|---|
| `npm run start GET products` | Lista todos los productos |
| `npm run start GET products/<id>` | Muestra un producto específico |
| `npm run start POST products <title> <price> <category>` | Crea un producto |
| `npm run start DELETE products/<id>` | Elimina un producto |
| `npm run start` | Muestra la ayuda |

**Ejemplos:**

```bash
npm run start GET products/15
npm run start POST products T-Shirt-Rex 300 remeras
npm run start DELETE products/7
```

---

## 🏗️ Estructura del proyecto

```
pre-entrega-backend/
├── index.js          # Punto de entrada y lógica principal
├── package.json      # Configuración del proyecto
└── README.md         # Este archivo
```

---

## 🧠 Temas aplicados

- Uso de `process.argv` para capturar comandos desde la terminal.
- Peticiones HTTP con `fetch` (GET, POST, DELETE).
- Asincronismo con `async/await` y manejo de errores con `try/catch`.
- Métodos de arrays y strings (`slice`, `split`, `startsWith`).

---

## 👨‍💻 Autor

**Ariel González** — Curso Backend Node.js — TechLab