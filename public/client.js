var logWindow = document.getElementById('logWindow');

document.getElementById('login-header').addEventListener('click',function(){
  logWindow.style.display = 'block';
  document.getElementById('blur').style.filter = 'blur(5px)';
});

document.getElementById('logIn-close').addEventListener('click',function(){
  logWindow.style.display = 'none';
  document.getElementById('blur').style.filter = 'blur(0px)';
});
