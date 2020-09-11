let contenedor = document.getElementById('input-alerta');
let btn = document.getElementById('btn');

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

btn.addEventListener('click', validarInput);

function validarInput() {
  let input = document.getElementById('input').value;
  if (input.match(pattern)) {
    contenedor.classList.add('valido');
    contenedor.classList.remove('invalido');
    document.getElementById('input').value = ''
  } else {
    contenedor.classList.add('invalido');
    contenedor.classList.remove('valido');
  }
}