const menu = document.querySelector('.hide-menu');
const navbar = document.querySelector('.navbar-hidden');
const navContainer = document.querySelector('.nav__container');

/* containerFour.forEach(eachElement => {
  console.log(eachElement);
}); */

menu.addEventListener('click', () => {
  // menu.classList.toggle('hide-menu-hidden');
  console.log('hello');
  navbar.classList.add('hidden-menu');
  navContainer.classList.toggle('navContainer-show');
});
