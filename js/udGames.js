

const btnupdate = document.getElementById('UpGame');

const btndelete = document.getElementById('DelGame');
var database = firebase.database();

$("#label").hide();
$("#UpGame").hide();
$("#DelGame").hide();

$("#badselect").hide();
$("#athletics1").hide();
$("#boardGames").hide();


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
	var rootRef = firebase.database().ref().child("Officials");

rootRef.on("child_added", snap => {
  var name = snap.child("Name").val();

var o = new Option(name, name);

$(o).html(name);
$("#options").append(o);




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
		 else if (v1 == "College")
			 
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
   

	    
  if (official == null)
  {
	 $("#label").hide();
	  $("#warning").show();
	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {  
    $("#UpGame").show();
$("#DelGame").show();
   $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}
else if (gamev=="Athletics"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv2);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
  
	   
  
    if (official == null)
  {
	$("#label").hide();
	  $("#warning").show();
	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
  {  $("#UpGame").show();
$("#DelGame").show();
	  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv2+'/'+official);
firebaseHeadingRefs.on('value', function(datasnapshot){
    var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
  });
  }
});
}
else if (gamev=="Board Games"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv3);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();
   
	    
    
  
  if (official == null)
  {
	$("#label").hide();
	  $("#warning").show();
	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else

  {  $("#UpGame").show();
$("#DelGame").show();
	  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRef = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv3+'/'+official);
firebaseHeadingRef.on('value', function(datasnapshot){

      var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
});
  }
});
}

	
else if (gamev=="Basketball"){

		var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();


 if (official == null)
  {
$("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
  {   $("#UpGame").show();
$("#DelGame").show();
	  $("#warning").hide();
	  $("#label").show();
	  var firebaseHeadingRef = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+official);
firebaseHeadingRef.on('value', function(datasnapshot){
       var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
			
});
  }
	
});
}
else if (gamev=="Volleyball"){
	
		var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();


 if (official == null)
  {
$("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
  {   $("#UpGame").show();
$("#DelGame").show();
	  $("#warning").hide();
	  $("#label").show();
	  var firebaseHeadingRef = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+official);
firebaseHeadingRef.on('value', function(datasnapshot){
       var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
			
});
  }
	
});
}

else if(gamev=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv1);

var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
$("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}
else if(gamev=="Table Tennis"){



var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	$("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsE+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
	
}
}
else if(depav=="Junior Highschool"){
if (gamev=="Badminton"){

var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  	  $("#UpGame").hide();
$("#DelGame").hide();
$("#label").hide();
	  $("#warning").show();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}	
else if (gamev=="Athletics"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv2);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  	  $("#UpGame").hide();
$("#DelGame").hide();
	  $("#label").hide();
	  $("#warning").show();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv2+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});

}
else if (gamev=="Board Games"){
	var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv3);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  	  $("#UpGame").hide();
$("#DelGame").hide();
	  $("#label").hide();
	  $("#warning").show();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv3+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});

}
else if (gamev=="Basketball"){

	var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();


 if (official == null)
  {
$("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
  {   $("#UpGame").show();
$("#DelGame").show();
	  $("#warning").hide();
	  $("#label").show();
	  var firebaseHeadingRef = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+official);
firebaseHeadingRef.on('value', function(datasnapshot){
       var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
			
});
  }
	
});
}
else if (gamev=="Volleyball"){
	var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();


 if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
  {   $("#UpGame").show();
$("#DelGame").show();
	  $("#warning").hide();
	  $("#label").show();
	  var firebaseHeadingRef = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+official);
firebaseHeadingRef.on('value', function(datasnapshot){
       var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
			
});
  }
	
});
}

else if(gamev=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	 $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
  
}
else if(gamev=="Table Tennis"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	 $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsJ+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}
}	
	
else if(depav=="Senior Highschool"){
if (gamev=="Badminton"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {  
    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}	
else if (gamev=="Athletics"){

var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv2);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	 $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {  
    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv2+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}
else if (gamev=="Board Games"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv3);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	$("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {  
    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv3+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
 
}
else if (gamev=="Basketball"){
	var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();


 if (official == null)
  {
	$("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
  {   $("#UpGame").show();
$("#DelGame").show();
	  $("#warning").hide();
	  $("#label").show();
	  var firebaseHeadingRef = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+official);
firebaseHeadingRef.on('value', function(datasnapshot){
       var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
			
});
  }
	
});
}
else if (gamev=="Volleyball"){
	var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();


 if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
  {   $("#UpGame").show();
$("#DelGame").show();
	  $("#warning").hide();
	  $("#label").show();
	  var firebaseHeadingRef = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+official);
firebaseHeadingRef.on('value', function(datasnapshot){
       var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
			
});
  }
	
});
	
}
else if(gamev=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	 $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
	
	
}
else if(gamev=="Table Tennis"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+gradevsS+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}
	}   
  
else if(depav=="College"){
	if (gamev=="Badminton"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}	
else if (gamev=="Athletics"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv2);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+genderv+'/'+detailv2+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}
else if (gamev=="Board Games"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv3);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
	  
  }
  else
	  
  {  
    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+genderv+'/'+detailv3+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}
else if (gamev=="Basketball"){
	var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();


 if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
  { 
  $("#UpGame").show();
$("#DelGame").show();
	  $("#warning").hide();
	  $("#label").show();
	  var firebaseHeadingRef = firebase.database().ref().child(gamev+'/'+depav+'/'+genderv+'/'+official);
firebaseHeadingRef.on('value', function(datasnapshot){
       var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
			
});
  }
	
});
}
else if (gamev=="Volleyball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv);
firebaseHeadingRef.on('value', function(datasnapshot){


  var  official= datasnapshot.child("Official").val();


 if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
  { 
  $("#UpGame").show();
$("#DelGame").show();
	  $("#warning").hide();
	  $("#label").show();
	  var firebaseHeadingRef = firebase.database().ref().child(gamev+'/'+depav+'/'+genderv+'/'+official);
firebaseHeadingRef.on('value', function(datasnapshot){
       var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
			
});
  }
	
});
	
}
else if(gamev=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {  
    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}
else if(gamev=="Table Tennis"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+gamev+'/'+depav+'/'+genderv+'/'+detailv1);
firebaseHeadingRef.on('value', function(datasnapshot){


   var  official= datasnapshot.child("Official").val();
   

	    
  if (official == null)
  {
	  $("#label").hide();
	  $("#warning").show();
	  	  $("#UpGame").hide();
$("#DelGame").hide();
  }
  else
	  
  {  
    $("#UpGame").show();
$("#DelGame").show();
  $("#label").show();
	  $("#warning").hide();
	  var firebaseHeadingRefs = firebase.database().ref().child(gamev+'/'+depav+'/'+genderv+'/'+detailv1+'/'+official);
  
   firebaseHeadingRefs.on('value', function(datasnapshot){

	 
	  
	   var venue = datasnapshot.child("Venue").val();
	    var day = datasnapshot.child("Day").val();
		 var time = datasnapshot.child("Time").val();
		  var win = datasnapshot.child("Win").val();
		   var lose = datasnapshot.child("Lose").val();
	  

    document.getElementById("options").value = official;
	    document.getElementById("venue").value = venue;
		 document.getElementById("sched").value = day;
		  document.getElementById("time").value = time;
		   document.getElementById("winp").value = win;
		    document.getElementById("losep").value = lose;
	   
	   });
  }
});
}
	} 
$("#UpGame").show();
$("#DelGame").show();
}

btnupdate.addEventListener('click', e => {
	var ref = database.ref();
var v1 = x.elements["department"].value;
	var v2 = x.elements["gender"].value;
	var v3 = x.elements["game"].value;
	var v4 = document.getElementById("venue").value;
	var v5 = document.getElementById("sched").value;
	var v6 = document.getElementById("time").value;
	var y1= document.getElementById("winp").value;
	var y2= document.getElementById("losep").value;
	var x1=x.elements["badselect"].value;
	var x2=x.elements["athletics1"].value;
	var x3=x.elements["boardGames"].value;
	var grE=x.elements["gelem"].value;
	var grJ=x.elements["gjunior"].value;
	var grS=x.elements["gsenior"].value;
var accName = document.getElementById("options").value;

if(v1=="Elementary"){
if (v3=="Badminton"){
	var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Athletics"){
		var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Board Games"){
		var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
	
}

	
else if (v3=="Basketball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Volleyball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}

else if(v3=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if(v3=="Table Tennis"){

var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});

	
}
}
else if(v3=="Junior Highschool"){
if (gamev=="Badminton"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Athletics"){
	var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Board Games"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});

}
else if (v3=="Basketball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Volleyball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}

else if(v3=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if(v3=="Table Tennis"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
}	
	
else if(v1=="Senior Highschool"){
	if (v3 == "Badminton"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1	+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}	
else if (v3=="Athletics"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});

}
else if (v3=="Board Games"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
 
}
else if (v3=="Basketball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Volleyball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
	


}
else if(v3=="Lawn Tennis") {

var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
	
}
else if(v3=="Table Tennis"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
 });
  }

	});
	
}
	}   
	
  
else if(v1=="College"){
	if (v3=="Badminton"){var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}	
else if (v3=="Athletics"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+v2+'/'+x2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+v2+'/'+x2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+x2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+v2+'/'+x2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Board Games"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+v2+'/'+x3);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+v2+'/'+x3+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x3+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+x3+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x3).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+v2+'/'+x3+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x3+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Basketball"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+v2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+v2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if (v3=="Volleyball"){

	var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+v2);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details :"None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+v2).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+v2+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if(v3=="Lawn Tennis") {
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
else if(v3=="Table Tennis"){
var firebaseHeadingRef = firebase.database().ref().child("Players/"+v3+'/'+v1+'/'+v2+'/'+x1);
firebaseHeadingRef.on('value', function(datasnapshot){
	
	 var  official= datasnapshot.child("Official").val();
	
  if (official == accName) {
	  
  
	ref.child(v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
	 ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
 
  }
  
  else
	  {
		var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
 ref.child("Players/"+v3+'/'+v1+'/'+v2+'/'+x1).update({
Official: accName,

	
  });
ref.child(v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  ref.child("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5).update({
Official: accName,
	Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
	
  });
  }

	});
}
	} 	





$("#label").hide();


$("#badselect").hide();
$("#athletics1").hide();
$("#boardGames").hide();


$("#gelem").show();
$("#gjunior").hide();
$("#gsenior").hide();
$("#warning").hide();
	});
	


btndelete.addEventListener('click', e => {

var ref = database.ref();
var v1 = x.elements["department"].value;
	var v2 = x.elements["gender"].value;
	var v3 = x.elements["game"].value;
	var v4 = document.getElementById("venue").value;
	var v5 = document.getElementById("sched").value;
	var v6 = document.getElementById("time").value;
	var y1= document.getElementById("winp").value;
	var y2= document.getElementById("losep").value;
	var x1=x.elements["badselect"].value;
	var x2=x.elements["athletics1"].value;
	var x3=x.elements["boardGames"].value;
	var grE=x.elements["gelem"].value;
	var grJ=x.elements["gjunior"].value;
	var grS=x.elements["gsenior"].value;
var accName = document.getElementById("options").value;
	
	if (v1 == "Elementary"){
		if (v3 == "Badminton")
		{
			var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		
		else if (v3 == "Athletics")
		{	
	var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");
}).catch(function (error) {
	
	alert("Failed!");
})

	var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
			
		}
		else if (v3 == "Board Games")
		{	var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
			var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
		
		})
			
		}
	
		else if (v3 == "Basketball")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grE+'/'+v2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Volleyball")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grE+'/'+v2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Lawn Tennis")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Table Tennis")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})

		}
	}
	
else if (v1 == "Junior Highschool")
	{if (v3 == "Badminton")
		{
			var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		
		else if (v3 == "Athletics")
		{	var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
			var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Board Games")
		{	var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
			
		}
		else if (v3 == "Basketball")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Volleyball")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Lawn Tennis")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Table Tennis")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})

		}
		
	}
	
else if (v1 == "Senior Highschool")
	{if (v3 == "Badminton")
		{
			var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		
		else if (v3 == "Athletics")
		{	var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
			var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Board Games")
		{	var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
			var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Basketball")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grS+'/'+v2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Volleyball")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grS+'/'+v2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Lawn Tennis")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})

var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Table Tennis")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		
	}
	
	else if (v1 == "College")
	{if (v3 == "Badminton")
		{
			var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		
		else if (v3 == "Athletics")
		{	var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+x2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
			var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+v2+'/'+x2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		
		else if (v3 == "Board Games")
		{	var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
			var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+v2+'/'+x3+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		
		}
		else if (v3 == "Basketball")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+v2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		
		else if (v3 == "Volleyball")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+v2+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		else if (v3 == "Lawn Tennis")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
alert("Game Deleted");

}).catch(function (error) {
	
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
		
		else if (v3 == "Table Tennis")
		{
				var firebaseRef = firebase.database().ref(v3+'/'+v1+'/'+v2+'/'+x1+'/'+official);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
alert("Game Deleted");

}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
	alert("Failed!");
})
var firebaseRef = firebase.database().ref('Schedule/'+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5);
	  firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})
		}
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

