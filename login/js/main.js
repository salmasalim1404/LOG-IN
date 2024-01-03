var signEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPassword');
var allUsers = [];
allUsers = JSON.parse(localStorage.getItem('allUsers'));
 

function login(){
  if(signEmail.value == "" &&  signPassword.value == ""){
    document.getElementById('message').innerHTML = `<p class="text-center  mt-5 text-danger">All Inputs Is Required</p>`;
  }else{
    chek();
    clear()
  }
  
}
function chek(){
  for( var i = 0 ; i < allUsers.length ; i++){
    if(signEmail.value == allUsers[i].email && signPassword.value == allUsers[i].password){
      var y = allUsers[i].name 
      localStorage.setItem('username' , y);
      location.href = '../home/index.html'
      break;
    }
  }
}

function clear(){
  signEmail.value = "";
  signPassword.value = "";
}