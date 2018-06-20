function validatelogin()
{
document.getElementById("validlogin1").innerHTML="";
document.getElementById("validlogin2").innerHTML="";

var b = document.getElementById('name').value
var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(b))
{
document.getElementById("validlogin1").innerHTML="username not valid";
}
var c = document.getElementById('password').value
if(c.length < 6 || c.length > 15)
{
document.getElementById("validlogin2").innerHTML="password not valid";
}

}

