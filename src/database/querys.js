export const querys = {
  getAllEmpleados: "SELECT * FROM Empleados",
  getAllPedido: "SELECT * FROM Pedido",
  getAllProducto: "SELECT * FROM Producto",
};

const intervalo = 5000; // Intervalo en milisegundos (5 segundos)

function mostrarMensaje() {
  const fechaHoraActual = new Date().toLocaleString();
  console.log('Datos actualizados -', fechaHoraActual);
}

// Ejecutar la función para mostrar el mensaje inicialmente
mostrarMensaje();

// Configurar el intervalo para mostrar el mensaje cada 5 segundos
setInterval(mostrarMensaje, intervalo);
