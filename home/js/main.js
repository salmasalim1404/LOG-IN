document.getElementById('username').innerHTML = localStorage.getItem('username');

function logout(){
  localStorage.removeItem('username');
}