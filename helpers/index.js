export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);

  const opciones = {
    year: "numeric",
    month: "long",
    date: "2-digit",
  };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
};
