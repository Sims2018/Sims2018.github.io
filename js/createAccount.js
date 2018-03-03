const txtEmail = document.getElementById('txtEmail');
const Password = document.getElementById('txtPassword');

const btnCreate = document.getElementById('createOfficial');
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
}

window.onload = onLoadFunctions;

$("#lengthWarning").hide();


var database = firebase.database();

btnCreate.addEventListener('click', e => {
	if(Password.value.length < 6)
	{
		$("#lengthWarning").show();
		
		
		
	}
	else
	{
		  var database = firebase.database();
		var x=document.getElementById("use");
		
var Oname = document.getElementById("Oname").value;
var Email = document.getElementById("txtEmail").value;
var Pass = document.getElementById("txtPassword").value;
var User = x.elements["User"].value;

		
var usersRef = firebase.database().ref().child("Officials");

		usersRef.once('value', function(snapshot) {
  if (snapshot.hasChild(Oname)) {
	  
    alert('The official Already exists');
	
	
  }
  
  else
  {
			

var database = firebase.database();

var ref = database.ref("Officials/"+Oname);
	
var data= {
	Name: Oname,
    Email: Email,
    Password: Pass,

	
}	
ref.set(data);


	alert("Official created!");
	}
	
	
	

	

		
		 
		

 

	document.getElementById('txtEmail').value = "";
	 document.getElementById('txtPassword').value = "";
	document.getElementById('Oname').value = "";
	

	
});
	
	}
});


	
$("#signout").click(
  function(){

  var ref = database.ref();

	  ref.child("Admin").update({
Status: "Logout",

	
  });
  
  }


);
	
	


