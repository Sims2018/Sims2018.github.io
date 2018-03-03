

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

	var firebaseHeadingRef = firebase.database().ref().child("TeamName");
firebaseHeadingRef.on('value', function(datasnapshot){


   var  nteamA= datasnapshot.child("Name_A").val();
   var nteamB = datasnapshot.child("Name_B").val();

	  
	


    document.getElementById("tnameA").value = nteamA;
   document.getElementById("tnameB").value = nteamB;
  
 
});
}
window.onload = onLoadFunctions;
function uploadFile(){
	
	var database = firebase.database();

var x=document.getElementById("teamp");



	var v1 = x.elements["tnameA"].value;

	var v2 = x.elements["tnameB"].value;


var ref = database.ref("TeamName");
	
var data= {
	
	Name_A: v1,
    Name_B: v2
   

	
}	
ref.set(data);





}

$("#signout").click(
  function(){

  var ref = database.ref();

	  ref.child("Admin").update({
Status: "Logout",

	
  });
  
  }


);

