const loginLink = document.getElementById('login-link')
const registerLink = document.getElementById('register-link')
const loginForm = document.querySelector('.form-box.login')
const registerForm = document.querySelector('.form-box.register')
const wrapper = document.querySelector('.wrapper')
const btnPopup = document.querySelector('.btn-login-popup')
const iconClose = document.querySelector('.icon-close')

loginLink.addEventListener('click', () => {
  // Show the login form and hide the register form
  wrapper.classList.remove('active')
  registerForm.style.transform = 'translateX(400px)'
  loginForm.style.transform = 'translateX(0)'
})

registerLink.addEventListener('click', () => {
  // Show the register form and hide the login form
  wrapper.classList.add('active')
  loginForm.style.transform = 'translateX(-400px)'
  registerForm.style.transform = 'translateX(0)'
})

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup')
})

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup')
})


// Adicionando funcionalidade ao menu hambúrguer
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');

  menuToggle.addEventListener('click', function() {
    navigation.classList.toggle('active');
  });
});