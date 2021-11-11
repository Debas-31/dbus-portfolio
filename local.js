const email = document.getElementById('email');
const userName = document.getElementById('userName');
const textMessage = document.getElementById('textMessage');
const form = document.getElementById('form');
form.addEventListener('input', () => {
  const localStorageObject = {
    name: userName.value,
    email: email.value,
    message: textMessage.value,
  };
  localStorage.setItem('templateFormData', JSON.stringify(localStorageObject));
});
const getData = JSON.parse(localStorage.getItem('templateFormData'));
function preloaded() {
  if (getData) {
    userName.value = getData.name;
    email.value = getData.email;
    textMessage.value = getData.message;
    return getData;
  }
  return '';
}
preloaded();