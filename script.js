const btn = document.getElementById('menu-btn');

function navTonggle() {
  btn.classList.toggle('open');
}

btn.addEventListener('click', navTonggle);
