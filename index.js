// ============================================
// PRE-ENTREGA - TechLab Backend
// ============================================
// Herramienta de gestión de productos desde la terminal.
//
// Comandos disponibles:
//   npm run start GET products
//   npm run start GET products/<id>
//   npm run start POST products <title> <price> <category>
//   npm run start DELETE products/<id>
// ============================================


// ============================================
// CONFIGURACIÓN GLOBAL
// ============================================

// ============================================================
// ⚠️ IMPORTANTE: Cambio de API
// ============================================================
// Para volver a FakeStore (API oficial del curso), hacer 3 cambios:
//   1) Descomentar la URL de FakeStore y comentar la de DummyJSON
//   2) En obtenerProductos(): cambiar "return data.products" por "return data"
//   3) En crearProducto(): cambiar "/products/add" por "/products"
// ============================================================

// 👇 URL oficial (FakeStore - API del curso)
// const BASE_URL = 'https://fakestoreapi.com';

// 👇 URL alternativa (DummyJSON - usada porque FakeStore estaba caída)
const BASE_URL = 'https://dummyjson.com';


// ============================================
// CAPTURA DE ARGUMENTOS DE LA TERMINAL
// ============================================
const args = process.argv.slice(2);

// ============================================
// FUNCIÓN: Obtener todos los productos
// ============================================
async function obtenerProductos() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    // ⚠️ Con DummyJSON: devuelve { products: [...] } → usamos data.products
    // Con FakeStore:  devuelve [...] directo → usar "return data"
    return data.products; 
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
}

// ============================================
// FUNCIÓN: Obtener un producto por ID
// ============================================

async function obtenerProductoPorId(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el producto:', error);
  }
}

// ============================================
// FUNCIÓN: Crear un producto nuevo (POST)
// ============================================
async function crearProducto(producto) {
  try {
    // ⚠️ Con DummyJSON: endpoint es /products/add
    // Con FakeStore:  endpoint es /products
    const response = await fetch(`${BASE_URL}/products/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
  }
}

// ============================================
// FUNCIÓN: Eliminar un producto (DELETE)
// ============================================
async function eliminarProducto(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
  }
}

// ============================================
// LÓGICA PRINCIPAL: interpretar comandos
// ============================================
switch (args[0]) {
  case 'GET':
    
    if (args[1] === 'products') {
      const productos = await obtenerProductos();
      console.log(productos);
    } else if (args[1] && args[1].startsWith('products/')) {
      const id = args[1].split('/')[1]; 
      const producto = await obtenerProductoPorId(id);
      console.log(producto);
    } else {
      console.log('Comando GET incorrecto. Uso: GET products  |  GET products/<id>');
    }
    break;

  case 'POST':
    
    if (args[1] === 'products' && args[2] && args[3] && args[4]) {
      const nuevoProducto = await crearProducto({
        title: args[2],
        price: Number(args[3]), 
        category: args[4] 
      });
      console.log(nuevoProducto);
    } else {
      console.log('Comando POST incorrecto. Uso: POST products <title> <price> <category>');
    }
    break;

  case 'DELETE':
    
    if (args[1] && args[1].startsWith('products/')) {
      const id = args[1].split('/')[1];
      const eliminado = await eliminarProducto(id);
      console.log(eliminado);
    } else {
      console.log('Comando DELETE incorrecto. Uso: DELETE products/<id>');
    }
    break;

  default:
    console.log('❌ Comando no reconocido.\n');
    console.log('Comandos disponibles:');
    console.log('  GET products                              → listar todos');
    console.log('  GET products/<id>                         → ver uno');
    console.log('  POST products <title> <price> <category>  → crear');
    console.log('  DELETE products/<id>                      → eliminar');
    break;
}
