function reservar(nombre, precio) {
  const url = `reserva.html?paquete=${encodeURIComponent(nombre)}&precio=${precio}`;
  window.location.href = url;
}
