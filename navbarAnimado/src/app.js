const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click' , (e) => {

  menu.classList.contains('hidden') ?
  menu.classList.remove('hidden') :
  menu.classList.toggle('hidden')


})