const txtEmail = document.getElementById('txtEmail');
const Password = document.getElementById('txtPassword');
const cName = document.getElementById('Oname');
const btnCreate = document.getElementById('createOfficial');
const btnDelete = document.getElementById('Delete');

$("#Delete").hide();
$("#lengthWarning").hide();
$("#createOfficial").hide();
	function onLoadFunctions() {
		var firebaseHeadingRef = firebase.database().ref().child("Admin");
firebaseHeadingRef.on('value', function(datasnapshot){
 
	
   var stat = datasnapshot.child("Status").val();
  
  if(stat =="Login"){
	     $("#cover").hide();
  }
  else
  {
	     $("#cover").show();
		   var dialog = document.querySelector('#loginDialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
  }
});

		$('#use').click(function() {
   if($('#Admin').is(':checked')) { $("#options").hide();	
	document.getElementById("options").options.length = 0;
	  
  $("#Delete").show();
$("#createOfficial").show();
 var firebaseHeadingRef = firebase.database().ref().child("Admin");
firebaseHeadingRef.on('value', function(datasnapshot){
$("#Delete").hide();
   var name = datasnapshot.child("Name").val();
  var email = datasnapshot.child("Email").val();
  var pass = datasnapshot.child("Password").val();
  
  
  document.getElementById("Oname").value = name;
   document.getElementById("txtEmail").value = email;
    document.getElementById("txtPassword").value = pass;
  
  
  
//var o = new Option(name, name);

//$(o).html(name);
//$("#options").append(o); 
});
		
		
		}
	
			
  else if($('#Official').is(':checked')) { $("#options").show();	
  $("#Delete").show();
  	document.getElementById('txtEmail').value = "";
	 document.getElementById('txtPassword').value = "";
	document.getElementById('Oname').value = "";
var rootRef = firebase.database().ref().child("Officials");

$("#createOfficial").show();
rootRef.on("child_added", snap => {
  var name = snap.child("Name").val();

var o = new Option(name, name);

$(o).html(name);
$("#options").append(o);



});	

 var firebaseHeadingRef = firebase.database().ref().child("Official");
firebaseHeadingRef.on('value', function(datasnapshot){

   var name = datasnapshot.child("Name").val();
  var email = datasnapshot.child("Email").val();
  var pass = datasnapshot.child("Password").val();
  
  
  document.getElementById("Oname").value = name;
   document.getElementById("txtEmail").value = email;
    document.getElementById("txtPassword").value = pass;
  

});
			
		
		}
			
});

				

				
				}
window.onload = onLoadFunctions;

$("#loginBtn").click(
  function(){

 
  
  var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();

    if(email != "" && password != ""){
		var firebaseHeadingRef = firebase.database().ref().child("Admin");
firebaseHeadingRef.on('value', function(datasnapshot){
 
	
   var names = datasnapshot.child("Name").val();
  var emails = datasnapshot.child("Email").val();
  var passs = datasnapshot.child("Password").val();
  


     if (email == names && password == passs)
	 {
	   var ref = database.ref();

	  ref.child("Admin").update({
Status: "Login",

	
  });
  
   $("#cover").hide();

 var dialogos = document.querySelector('#loginDialog');
   
    dialogos.close();

        
    
}
     else
	 {alert("Wrong password or email!")
		 
	 }
     });
    }
  else
  {
	  alert("Empty Fields")
  }
});


/* LOGOUT PROCESS */

$("#signout").click(
  function(){

  var ref = database.ref();

	  ref.child("Admin").update({
Status: "Logout",

	
  });
  
   });
   
$(document).on('change',"#options", function() {
		
var options = document.getElementById("options").value;

 var firebaseHeadingRef = firebase.database().ref().child("Officials/"+options);
firebaseHeadingRef.on('value', function(datasnapshot){

   var name = datasnapshot.child("Name").val();
  var email = datasnapshot.child("Email").val();
  var pass = datasnapshot.child("Password").val();
  
  
  document.getElementById("Oname").value = name;
   document.getElementById("txtEmail").value = email;
    document.getElementById("txtPassword").value = pass;
  
  
  
});
		
});

btnCreate.addEventListener('click', e => {
	if(Password.value.length < 6)
	{
		$("#lengthWarning").show();
		
		
		
	}
	else 
	{
				
var options = document.getElementById("options").value;
	

		
		var database = firebase.database();
		var x=document.getElementById("use");
		
var Oname = document.getElementById("Oname").value;

var Email = document.getElementById("txtEmail").value;
var Pass = document.getElementById("txtPassword").value;
var User = x.elements["User"].value;	

var database = firebase.database();
if (User=="Official")
{

if (options == Oname) 	{
var ref = database.ref();
	
ref.child("Officials/"+Oname).update({
  Email: Email,
  Name: Oname,
  Password: Pass
	
	});
}
	else{
	
	
var ref = database.ref();
	
ref.child("Officials/"+Oname).update({
  Email: Email,
  Name: Oname,
  Password: Pass
	
	});
	

		var firebaseRef = firebase.database().ref("Officials/"+options);

firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
	
}
alert("Official was successfully updated");
}
	

	


	
else if (User=="Admin")
{
	var ref = database.ref();
	
ref.child("Admin").update({
  Email: Email,
  Name: Oname,
  Password: Pass
});

alert("Admin was successfully updated");
	
}
	
	
		
		


location.reload();

	
	}
});

btnDelete.addEventListener('click', e => {
	var options = document.getElementById("options").value;
	var firebaseRef = firebase.database().ref("Officials/"+options);

firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Official "+options+" was removed");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})

alert('Official Deleteed!')
location.reload();
});

$("#signout").click(
  function(){

  var ref = database.ref();

	  ref.child("Admin").update({
Status: "Logout",

	
  });
  
  }


);


