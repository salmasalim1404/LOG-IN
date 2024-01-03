var saignName =document.getElementById('signName');
var saignEmail =document.getElementById('signEmail');
var saignPassword =document.getElementById('signPassword');

if(localStorage.getItem('allUsers') != null){
 allUsers = JSON.parse(localStorage.getItem('allUsers'))
}else{
  allUsers = [];
}

var allUsers =[];

function signUp(){
  if(saignName.value == '' && saignEmail.value == '' && saignPassword.value == ''){
     document.getElementById('message').innerHTML = `<p class="text-center  mt-5 text-danger">All Inputs Is Required</p>`;
  }else{
    var obj = {
    name : saignName.value,
    email : saignEmail.value,
    password : saignPassword.value,

  }
  allUsers.push(obj);
  location.href = '../login/index.html' ;
  localStorage.setItem('allUsers' , JSON.stringify(allUsers));
  clear();
  }
}

function clear(){
  saignName.value ="";
  saignEmail.value = "";
  saignPassword.value = "";
}