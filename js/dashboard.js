
var score1=document.getElementById("teamA");
var score2=document.getElementById("teamB");
var tots = document.getElementById("totalGames");
var A = document.getElementById("Aname");
var B = document.getElementById("Bname");
var Games = document.getElementById("Games");
var database = firebase.database();
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


  


/* LOGIN PROCESS */

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

var firebaseHeadingRef = firebase.database().ref().child("Team A:");
firebaseHeadingRef.on('value', function(datasnapshot){
score1.innerHTML = datasnapshot.val();

});
var firebaseHeadingRef = firebase.database().ref().child("Team B:");
firebaseHeadingRef.on('value', function(datasnapshot){
score2.innerHTML = datasnapshot.val();

});

var firebaseHeadingRef = firebase.database().ref().child("TotalGames:");
firebaseHeadingRef.on('value', function(datasnapshot){
tots.innerHTML = datasnapshot.val();

});
var firebaseHeadingRef = firebase.database().ref().child("TeamName/Name_A");
firebaseHeadingRef.on('value', function(datasnapshot){
A.innerHTML = datasnapshot.val();

});
var firebaseHeadingRef = firebase.database().ref().child("TeamName/Name_B");
firebaseHeadingRef.on('value', function(datasnapshot){
B.innerHTML = datasnapshot.val();

});
var firebaseHeadingRef = firebase.database().ref().child("GamesPlayed:");
firebaseHeadingRef.on('value', function(datasnapshot){
Games.innerHTML = datasnapshot.val();

});