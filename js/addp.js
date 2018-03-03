var counter = 1;
$("#label").hide();

$("#venue").hide();
$("#sched").hide();
$("#badselect").hide();
$("#athletics1").hide();
$("#boardGames").hide();
$("#winp").hide();
$("#losep").hide();
$("#hide").hide();
$("#gelem").show();
$("#gjunior").hide();
$("#gsenior").hide();
$("#warning").hide();

var x=document.getElementById("form");
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




	
	$(document).on('change',"#game", function() { 
	var v1 = x.elements["game"].value;
	if (v1 == "Badminton")
	{$("#badselect").show();
$("#athletics1").hide();
$("#boardGames").hide();
	
}
 else if (v1 == "Athletics")
 {$("#athletics1").show();
$("#boardGames").hide();
$("#badselect").hide();
}
else if (v1 == "Board Games")
{$("#boardGames").show();
$("#badselect").hide();
$("#athletics1").hide();

}
else if (v1 == "Table Tennis")
{$("#badselect").show();
$("#athletics1").hide();
$("#boardGames").hide();
}
else if (v1 == "Lawn Tennis")
{$("#badselect").show();
$("#athletics1").hide();
$("#boardGames").hide();
}
else{
	$("#badselect").hide();
$("#athletics1").hide();
$("#boardGames").hide();
	
}


		

		 
});
   
$(document).on('change',"#department", function() { 
		var v1 = x.elements["department"].value;
     if ( v1== "Elementary")
		 
		 {
			
			$("#gelem").show();
			 $("#gjunior").hide();
            $("#gsenior").hide();
		 }
		 
		 else if (v1=="Junior Highschool")
		 {
			 	$("#gelem").hide();
			 $("#gjunior").show();
            $("#gsenior").hide();
		 }
		 
		 else if (v1 == "Senior Highschool")
			 
			 {
				 	$("#gelem").hide();
			 $("#gjunior").hide();
            $("#gsenior").show();
			 }
		 else 
			 
			 {
				 
$("#gelem").hide();
$("#gjunior").hide();
$("#gsenior").hide();
				 
			 }
		 
});




function goD(){
	
	var gamev = x.elements["game"].value;
	var depav = x.elements["department"].value;
	var gradevsE = x.elements["gelem"].value;
	var gradevsJ = x.elements["gjunior"].value;
	var gradevsS = x.elements["gsenior"].value;
	var genderv = x.elements["gender"].value;
	var detailv1 = x.elements["badselect"].value;
	var detailv2 = x.elements["athletics1"].value;
	var detailv3 = x.elements["boardGames"].value;
	

 
  
  
  

if(depav=="Elementary"){
if (gamev=="Badminton"){

var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  if (game == null)
  {$("#sdata").show();
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  {
	  $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
});
}
else if (gamev=="Athletics"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv2);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
    if (game == null)
  {
	$("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
});
}
else if (gamev=="Board Games"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv3);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
    
  
  if (game == null)
  {
	$("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
     document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
});
}

	
else if (gamev=="Basketball"){

		var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();

 if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	
});
}
else if (gamev=="Volleyball"){
	
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
});
}

else if(gamev=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


    var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }




	
	
	
});
}
else if(gamev=="Table Tennis"){


var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
});
	
}
}
else if(depav=="Junior Highschool"){
if (gamev=="Badminton"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){

  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
  if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}	
else if (gamev=="Athletics"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv2);
firebaseHeadingRef.on('value', function(datasnapshot){

  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
 if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });

}
else if (gamev=="Board Games"){
	var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv3);
firebaseHeadingRef.on('value', function(datasnapshot){


    var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });

}
else if (gamev=="Basketball"){

var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){

  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	$("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
     document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
});
}
else if (gamev=="Volleyball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
});
}

else if(gamev=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
 if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	});
}
else if(gamev=="Table Tennis"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
   if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}
}	
	
else if(depav=="Senior Highschool"){
if (gamev=="Badminton"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
 if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
});
}	
else if (gamev=="Athletics"){

var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv2);
firebaseHeadingRef.on('value', function(datasnapshot){


      var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	$("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}
else if (gamev=="Board Games"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv3);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
 
}
else if (gamev=="Basketball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


      var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}
else if (gamev=="Volleyball"){
	
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


    var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
	
}
else if(gamev=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
	
	
}
else if(gamev=="Table Tennis"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
     document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}
	}   
  
else if(depav=="College"){
	if (gamev=="Badminton"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


    var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
 if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
     document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}	
else if (gamev=="Athletics"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv2);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
  if (game == null)
  {
	  $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}
else if (gamev=="Board Games"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv3);
firebaseHeadingRef.on('value', function(datasnapshot){


     var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}
else if (gamev=="Basketball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){

  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}
else if (gamev=="Volleyball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
  
 if (game == null)
  {
	$("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
    document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
	
}
else if(gamev=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
 if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  { $("#label").show();
	  $("#warning").hide();
      document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}
else if(gamev=="Table Tennis"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


    var  official= datasnapshot.child("Official").val();
   var game = datasnapshot.child("Game").val();
  var department = datasnapshot.child("Department").val();
  var grade = datasnapshot.child("Grade").val();
    var genders = datasnapshot.child("Gender").val();
	  var detail = datasnapshot.child("Details").val();
	    
  
   if (game == null)
  {
	 $("#label").hide();
	  $("#warning").show();
  }
  else
  {  $("#label").show();
	  $("#warning").hide();
      document.getElementById("offi").innerHTML = official;
   document.getElementById("games").innerHTML = game;
    document.getElementById("depart").innerHTML = department;
	 document.getElementById("grade").innerHTML = grade;
	  document.getElementById("detail").innerHTML = detail;
	   document.getElementById("genders").innerHTML = genders;
  }
	   });
}
	} 

}

function confirmDatas(){
	  $("#warning").hide();
$("#label").hide();
	var v1 = x.elements["department"].value;
	var v2 = x.elements["gender"].value;
	var v3 = x.elements["game"].value;

	var x1=x.elements["badselect"].value;
	var x2=x.elements["athletics1"].value;
	var x3=x.elements["boardGames"].value;
	var grE=x.elements["gelem"].value;
	var grJ=x.elements["gjunior"].value;
	var grS=x.elements["gsenior"].value;
	var accName = document.getElementById("offi").innerHTML

 var vteamA = document.getElementById("pteamA").value
 var vteamB = document.getElementById("pteamB").value

  
	var database = firebase.database();
var ref = database.ref();

if(v1=="Elementary"){
if (v3=="Badminton"){
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}
else if (v3=="Athletics"){
			var dref = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	
ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x2,
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
			});
}
else if (v3=="Board Games"){
		var dref = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	
ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x3,
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
			});
	
}

	
else if (v3=="Basketball"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	

ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
  });
}
else if (v3=="Volleyball"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	

ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
  });
}

else if(v3=="Lawn Tennis") {
	
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}
else if(v3=="Table Tennis"){

	var dref = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});

	
}
}
else if(v3=="Junior Highschool"){
	if (v3=="Badminton"){
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}	
else if (v3=="Athletics"){

var dref = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	
ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x2,
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
			});
}
else if (v3=="Board Games"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	
ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x3,
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
			});

}
else if (v3=="Basketball"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	

ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : "None",
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
  });

}
else if (v3=="Volleyball"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	

ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : "None",
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
  });
}

else if(v3=="Lawn Tennis") {
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}
else if(v3=="Table Tennis"){
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}
}	
	
else if(v1=="Senior Highschool"){
if (v3=="Badminton"){
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}	
else if (v3=="Athletics"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	
ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
			});

}
else if (v3=="Board Games"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	
ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
			});
 
}
else if (v3=="Basketball"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	

ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
  });
}
else if (v3=="Volleyball"){
	
var dref = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	

ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
  });
	
}
else if(v3=="Lawn Tennis") {

		var dref = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
	
}
else if(v3=="Table Tennis"){
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}
	}   
  
else if(v1=="College"){
	if (v3=="Badminton"){
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}	
else if (v3=="Athletics"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	
ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x2,
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
			});
}
else if (v3=="Board Games"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x3);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	
ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x3).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x3,
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
			});
}
else if (v3=="Basketball"){
var dref = database.ref("Players/"+v3+'/'+v1+'/'+v2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	

ref.child("Players/"+v3+'/'+v1+'/'+v2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
  });
}
else if (v3=="Volleyball"){

var dref = database.ref("Players/"+v3+'/'+v1+'/'+v2);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {	

ref.child("Players/"+v3+'/'+v1+'/'+v2).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
  TeamA: vteamA,
  TeamB: vteamB
	
	});
  }
  });
}
else if(v3=="Lawn Tennis") {
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}
else if(v3=="Table Tennis"){
	var dref = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x1);
			dref.once('value', function(snapshot) {
  if (snapshot.hasChild("TeamA")) {
	  
    alert('This game already has players!');
	
	
  }
  
  else
  {
ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x1).update({
 Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
  TeamA: vteamA,
  TeamB: vteamB
	
  });
  }
  	});
}
location.reload();
	} 	







$("#signout").click(
  function(){

  var ref = database.ref();

	  ref.child("Admin").update({
Status: "Logout",

	
  });
  
  }


);


}