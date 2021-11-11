const getEmail = document.getElementById('email');
const getForm = document.getElementById('form');
const getValidateMessage = document.getElementById('validate-message');

getForm.addEventListener('submit', (e) => {
  if (getEmail.value !== getEmail.value.toLowerCase()) {
    e.preventDefault();
    getValidateMessage.textContent = 'Kindly input email in lowercase!';
  } else {
    getValidateMessage.textContent = '';
  }
});