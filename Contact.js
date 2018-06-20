function validatecontact() 
{
document.getElementById("validlogin6").innerHTML="";
document.getElementById("validlogin7").innerHTML="";
document.getElementById("validlogin8").innerHTML="";
document.getElementById("validlogin9").innerHTML="";

var flag=0;

var f = document.getElementById('uname').value

if(f.length < 3 || f.length > 20)
{
flag=1;
document.getElementById("validlogin6").innerHTML="contact name not valid";
}

var g = document.getElementById('ename').value

var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

if (!filter.test(g))
{
flag=1;
document.getElementById("validlogin7").innerHTML="Email not valid";
}

var h = document.getElementById('pno').value

if(h.length > 10 || h.length < 1 )
{
flag=1;
document.getElementById("validlogin8").innerHTML="Phone Number not valid";
}

var i = document.getElementById('qn').value

if(i.length > 100 || i.length < 1)
{
flag=1;
document.getElementById("validlogin9").innerHTML="question not valid";
}

if(flag==0)
{  
sendApi(f,g,h,i)
}


}

const sendApi = (name,email,phone,question)=>{
                                   const params = {
                                   name:name,
                                   email:email,
                                   phone:phone,
                                   question:question
                                   }
                                   var http = new XMLHttpRequest()
                                   http.open('POST','http://demo6835492.mockable.io/sendEmail');
                                   http.setRequestHeader('Content-type', 'application/json')
                                   http.send(JSON.stringify(params))
                                   //document.getElementById("responds").innerHTML=(http.responseText);

                                   http.onload = function() {
       
                                       document.getElementById("reply").innerHTML=http.responseText;
                                   }
                               }






