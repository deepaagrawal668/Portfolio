 function thanks(){
   var name1 = document.getElementById('name').value;
   if(name1!="")
   {
    window.alert("Thank you "+name1+ " !");
    return;
   }
   
 }

 document.getElementById('form-submit').onclick = function(){thanks();};