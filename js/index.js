$("#pdata").hide();
$("#gdata").hide();
$("#sdata").hide();
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
$("#offi").hide();

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
$(document).on('change',"#options", function() { 

	var email=document.getElementById("options").value;
		
		 
		
  var firebaseHeadingRef = firebase.database().ref().child("Officials/"+email+"/Email");
firebaseHeadingRef.on('value', function(datasnapshot){



});
	

		

		 
});
	
	$(document).on('change',"#depart", function() { 
		var v1 = x.elements["depart"].value;
     if (v1== "Elementary")
		 
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
	
function depData(){
var x=document.getElementById("form");
var v6 = x.elements["game"].value;


if (v6=="Athletics")
{
	
	$("#athletics1").show();
	
}
else if(v6=="Board Games")
{
	$("#boardGames").show();
}
else if(v6=="Basketball")
{
	
}
else if(v6=="Volleyball")
{
	
}
else 
{
	$("#badselect").show();
}
$("#sdata").show();
$("#ddata").hide();
$("#venue").show();
$("#sched").show();
$("#winp").show();
$("#losep").show();
$("#hide").show();
$("#offi").show();
}



function confirmData(){
	var x=document.getElementById("form");



var database = firebase.database();

var v1 = x.elements["depart"].value;
	var v2 = x.elements["gender"].value;
	var v3 = x.elements["game"].value;
	var v4 = x.elements["venue"].value;
	var v5 = x.elements["sched"].value;
	var v6 = x.elements["time"].value;
	var y1= x.elements["winp"].value;
	var y2= x.elements["losep"].value;
	var x1=x.elements["badselect"].value;
	var x2=x.elements["athletics1"].value;
	var x3=x.elements["boardGames"].value;
	var grE=x.elements["gelem"].value;
	var grJ=x.elements["gjunior"].value;
	var grS=x.elements["gsenior"].value;
var Oname = document.getElementById("options").value;
	
var accName = Oname.toString();

if(v1=="Elementary"){
	var firebaseRef = firebase.database().ref();
	var firebaseHeadingRef = firebase.database().ref().child("TotalGamesE:");
firebaseHeadingRef.once('value', function(datasnapshot){
var y = datasnapshot.val();
var a = parseInt(y)	;



var ans=a+1;

var n = ans.toString();

firebaseRef.child("TotalGamesE:").set(n);
});

if (v3=="Badminton"){
	

	var dref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
		dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
	  var ref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+accName);
var data= {
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
}	
ref.set(data); 

 
var refs = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
var data= {
	Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1

}	
refs.set(data); 
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
	Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
	Day: v5,
	Time: v6
	

}	
time.set(data); 
 }

});

		}
else if (v3=="Athletics"){
	

var dref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2);
		dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
	var ref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2+'/'+accName);
var data= {
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
}	
ref.set(data); 

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x2

}	
refs.set(data);

var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x2,
	Day: v5,
	Time: v6
	
}	
time.set(data);  

  }

});
}

else if (v3=="Board Games"){
	

var dref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3)
	dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
		var ref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3+'/'+accName);
var data= {
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
}	
ref.set(data); 

var refs = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x3

}	
refs.set(data);
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x3+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x3,
	Day: v5,
	Time: v6
	

}	
time.set(data); 
  }
});
}

	
else if (v3=="Basketball"){


	var dref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2);
	
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
		var ref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+accName);
var data= {
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
}	
ref.set(data); 

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None"

}	
refs.set(data);
 
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+v5);
var data= {
		Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : "None",
	Day: v5,
	Time: v6
	

}	
time.set(data);
  }
	});
}
else if (v3=="Volleyball"){
	
var dref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
		var ref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+accName);
var data= {
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
}	
ref.set(data); 

		var refs = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2

}	
refs.set(data);
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
	Day: v5,
	Time: v6
	

}	
time.set(data); 
  }
	});
}

else if(v3=="Lawn Tennis") {


	
var dref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
		var ref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+accName);
var data= {
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
}	
ref.set(data); 

var refs = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1

}	
refs.set(data);
 
var time = database.ref("Schedule/"+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
	Day: v5,
	Time: v6
	

}	
time.set(data);
  }
	
	});
	
}
else if(v3=="Table Tennis"){


	var dref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
	var ref = database.ref(v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+accName);
var data= {
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
}	
ref.set(data); 

var refs = database.ref("Players/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1

}	
refs.set(data);
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grE+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grE,
  Gender : v2,
  Details : x1,
	Day: v5,
	Time: v6
	

}	
time.set(data); 
  }
});
}
	
	
}
else if(v1=="Junior Highschool"){
	var firebaseRef = firebase.database().ref();
	var firebaseHeadingRef = firebase.database().ref().child("TotalGamesJ:");
firebaseHeadingRef.once('value', function(datasnapshot){
var y = datasnapshot.val();
var a = parseInt(y)	;



var ans=a+1;

var n = ans.toString();

firebaseRef.child("TotalGamesJ:").set(n);
});
if (v3=="Badminton"){
	
var dref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {

		var ref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+accName);
var data= {
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
}	
ref.set(data); 


		var refs = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1
}	
refs.set(data); 

	var time = database.ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
   Day: v5,
 Time: v6
}	
time.set(data);
  }
 });
}	
else if (v3=="Athletics"){
	
		var dref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
		var ref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2+'/'+accName);
var data= {
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
}	
ref.set(data); 


		var refs = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x2
}	
refs.set(data); 
	var time = database.ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x2,
   Day: v5,
 Time: v6
  }
  time.set(data)
  }
  
  });
}
else if (v3=="Board Games"){
	

	var dref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {

		var ref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3+'/'+accName);
var data= {
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
}	
ref.set(data); 

var refs = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3
}	
refs.set(data);
	var time = database.ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x3+'/'+v5);
var data= {
		Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x3,
 Venue: v4
}
time.set(data);
  }
});
}
else if (v3=="Basketball"){

var dref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2);
	
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
		var ref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+accName);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
}	
ref.set(data);  

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : "None"
}	
refs.set(data);  
var time = database.ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data);  
  }
});
}
else if (v3=="Volleyball"){


	
	var dref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
		var ref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+accName);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
}	
ref.set(data); 

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : "None"
}	
refs.set(data); 

var time = database.ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 
	
  }
	});
}

else if(v3=="Lawn Tennis") {


		var dref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {

		var ref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+accName);
var data= {
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
}	
ref.set(data);  


		var refs = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1
}	
refs.set(data);  

var time = database.ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 
  }
	
	});
}
else if(v3=="Table Tennis"){


var dref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
		var ref = database.ref(v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+accName);
var data= {
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
}	
ref.set(data); 

var refs = database.ref("Players/"+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1
}	
refs.set(data);
var time = database.ref('Schedule/'+v3+'/'+v1+'/'+grJ+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grJ,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data);  
  }
  });
}
}	
	
else if(v1=="Senior Highschool"){
	var firebaseRef = firebase.database().ref();
	var firebaseHeadingRef = firebase.database().ref().child("TotalGamesS:");
firebaseHeadingRef.once('value', function(datasnapshot){
var y = datasnapshot.val();
var a = parseInt(y)	;



var ans=a+1;

var n = ans.toString();

firebaseRef.child("TotalGamesS:").set(n);
});
if (v3=="Badminton"){


var dref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
		var ref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+accName);
var data= {
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
}	
ref.set(data); 

		var refs = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1
}	
refs.set(data); 
var time = database.ref('Schedule/'+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 

  }
  });
}	
else if (v3=="Athletics"){


	var dref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2);
	dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {

		var ref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2+'/'+accName);
var data= {
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
}	
ref.set(data); 

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2
}	
refs.set(data);

var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 
  }
  });
}

else if (v3=="Board Games"){
	

var dref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3);
	dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
	var ref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3+'/'+accName);
var data= {
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
}	
ref.set(data); 

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3
}	
refs.set(data);
var time = database.ref('Schedule/'+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x3+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data);  
  }
 });
}
else if (v3=="Basketball"){


var dref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2);
	dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
var ref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+accName);
var data= {
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
}	
ref.set(data);  

var refs = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None"
}	
refs.set(data);
  
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data);
  }
  });
}
else if (v3=="Volleyball"){
	
	var dref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2);
		dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {

	var ref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+accName);
var data= {
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
}	
ref.set(data); 

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None"
}	
refs.set(data); 
	var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 
  }
	});
}
else if(v3=="Lawn Tennis") {


var dref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
		dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
	var ref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+accName);
var data= {
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
}	
ref.set(data); 

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1
}	
refs.set(data);
 
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 

  }
	
	});
}
else if(v3=="Table Tennis"){

var dref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
		dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {

	var ref = database.ref(v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+accName);
var data= {
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
}	
ref.set(data); 

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1
}	
refs.set(data); 
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+grS+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : grS,
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 
  }
});
}

	}   
  
else if(v1=="College"){
	var firebaseRef = firebase.database().ref();
	var firebaseHeadingRef = firebase.database().ref().child("TotalGamesC:");
firebaseHeadingRef.once('value', function(datasnapshot){
var y = datasnapshot.val();
var a = parseInt(y)	;



var ans=a+1;

var n = ans.toString();

firebaseRef.child("TotalGamesC:").set(n);
});
	if (v3=="Badminton"){


		var dref = database.ref(v3+'/'+v1+'/'+v2+'/'+x1);
		dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
	var ref = database.ref(v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
}	
ref.set(data);  

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x1
}	
refs.set(data); 
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data);   
  }
});
}	
else if (v3=="Athletics"){

var dref = database.ref(v3+'/'+v1+'/'+v2+'/'+x2);
		dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {

var ref = database.ref(v3+'/'+v1+'/'+v2+'/'+x2+'/'+accName);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
}	
ref.set(data); 

var refs = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x2
}	
refs.set(data);
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x2,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data);  
  }
  });
}
else if (v3=="Board Games"){
var dref = database.ref(v3+'/'+v1+'/'+v2+'/'+x3);
		dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
	var ref = database.ref(v3+'/'+v1+'/'+v2+'/'+x3+'/'+accName);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
}	
ref.set(data); 

var refs = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x3);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x3
}	
refs.set(data); 

var time = database.ref("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x3+'/'+accName);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x3,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 

  }
  });
}
else if (v3=="Basketball"){
	

		var dref = database.ref(v3+'/'+v1+'/'+v2);
		dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
	var ref = database.ref(v3+'/'+v1+'/'+v2+'/'+accName);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
}	
ref.set(data); 

	var refs = database.ref("Players/"+v3+'/'+v1+'/'+v2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : "None"
}	
refs.set(data);

var time = database.ref("Schedule/"+v3+'/'+v1+'/'+v2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 
  }

	});
}
else if (v3=="Volleyball"){
		var dref = database.ref(v3+'/'+v1+'/'+v2);
	dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
	var ref = database.ref(v3+'/'+v1+'/'+v2+'/'+accName);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
}	
ref.set(data); 


	var refs = database.ref("Players/"+v3+'/'+v1+'/'+v2);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : "None"
}	
refs.set(data);
 
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+v2+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
Department: v1,
   Grade : "None",
  Gender : v2,
  Details : "None",
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data);
  }
  });
}
else if(v3=="Lawn Tennis") {


	var dref = database.ref(v3+'/'+v1+'/'+v2+'/'+x1);
	dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {

	var ref = database.ref(v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName);
var data= {
	Official: accName,
		Game: v3,
 Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
}	
refs.set(data); 

var ref = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x1);
var data= {
	Official: accName,
		Game: v3,
 Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x1
}	
refs.set(data); 
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x1+'/'+v5);
var data= {
	Official: accName,
		Game: v3,
 Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 
  }
	
	});
	
}
else if(v3=="Table Tennis"){



	
var dref = database.ref(v3+'/'+v1+'/'+v2+'/'+x1);
dref.once('value', function(snapshot) {
  if (snapshot.hasChild(accName)) {
	  
    alert('The Game already exists');
	
	
  }
  
  else
  {
var ref = database.ref(v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName);
var data= {
Official: accName,
	Game: v3,
	Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6,
 Win:y1,
 Lose: y2
}	
ref.set(data); 

var refs = database.ref("Players/"+v3+'/'+v1+'/'+v2+'/'+x1);
var data= {
Official: accName,
	Game: v3,
	Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x1,
 Lose: y2
 
}	
refs.set(data);
var time = database.ref("Schedule/"+v3+'/'+v1+'/'+v2+'/'+x1+'/'+accName);
var data= {
Official: accName,
	Game: v3,
	Department: v1,
   Grade : "None",
  Gender : v2,
  Details : x1,
 Venue: v4, 
 Day: v5,
 Time: v6
}	
time.set(data); 
  }
  });
}
	} 
	
var firebaseRef = firebase.database().ref();
	var firebaseHeadingRef = firebase.database().ref().child("TotalGames:");
firebaseHeadingRef.once('value', function(datasnapshot){
var y = datasnapshot.val();
var a = parseInt(y)	;



var ans=a+1;

var n = ans.toString();

firebaseRef.child("TotalGames:").set(n);

});
$("#ddata").show();
$("#sdata").hide();
$("#badselect").hide();
$("#athletics1").hide();
$("#boardGames").hide();
$("#hide").hide();
$("#offi").hide();
} 


$("#signout").click(
  function(){

  var ref = database.ref();

	  ref.child("Admin").update({
Status: "Logout",

	
  });
  
  }


);