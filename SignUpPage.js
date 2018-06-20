function validatesignup()

{

document.getElementById("validlogin3").innerHTML="";
document.getElementById("validlogin4").innerHTML="";
document.getElementById("validlogin5").innerHTML="";


var d = document.getElementById('uname').value

if(d.length < 1 || d.length > 20)
{
document.getElementById("validlogin3").innerHTML="username not valid";
}

var e = document.getElementById('ename').value 

var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(e))
{
document.getElementById("validlogin4").innerHTML="Email not valid";
}

var f = document.getElementById('password').value 

if(f.length < 6 || ef.length > 15)
{
document.getElementById("validlogin5").innerHTML="password not valid";
}





}
