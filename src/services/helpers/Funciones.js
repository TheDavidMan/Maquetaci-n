import Swal from "sweetalert2";

export function alerta(titulo, mensaje, icono) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
  });
}

export function generarToken() {
  return "token" + Math.random() * 1000 + Math.random() * 10;
}

export function generarId() {
  return (
    Math.random().toString(36).substring(2) +
    Math.random().toString(36).substring(2)
  );
}