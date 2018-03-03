const txtEmail = document.getElementById('txtEmail');
const Password = document.getElementById('txtPassword');
const btnCreate = document.getElementById('createOfficial');
const btnAdd=document.getElementById('anotherGame');
const btnEnd=document.getElementById('End');

$("#lengthWarning").hide();
$("#showGames").hide();
$("#anotherGame").hide();
$("#End").hide();
$("#createOfficial").hide();
var counterp = 1;
var counter = 1;
var counterj = 1;
var counters = 1;
var counterc = 1;
function onLoadFunctions() {
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
var emaild=document.getElementById("email");
	var email=document.getElementById("options").value;
		
		 
		
  var firebaseHeadingRef = firebase.database().ref().child("Officials/"+email+"/Email");
firebaseHeadingRef.on('value', function(datasnapshot){

emaild.innerHTML = datasnapshot.val();

});
	

		

		 
});
btnEnd.addEventListener('click', e => {
	location.reload();
	
	});
btnCreate.addEventListener('click', e => {
	
if (confirm('Are you sure you want to pick this game? The game will dissapear.')) {
		
		var database = firebase.database();
		
		var grade=document.getElementById("grade").innerText;
	  var depart=document.getElementById("depart").innerText;
	  var game=document.getElementById("game").innerText;	
      var details=document.getElementById("details").innerText;
var losing=document.getElementById("losing").innerText;	
var winning=document.getElementById("winning").innerText;
var schedule=document.getElementById("schedu").innerText;
var venue=document.getElementById("venue").innerText;	
var gender=document.getElementById("gender").innerText;
var gname=document.getElementById("gname").innerText;
var Oname = document.getElementById("options").value;
	
var accName = Oname.toString();
	
	
		
alert("Account created:");

var ref = database.ref().child("RGames/"+accName+counterp);
	
var data= {
	
	
	
Game: game,
Grade: grade,
Details: details,
 Gender : gender,
 Department: depart, 
 Lose : losing,
 Win : winning,
 Schedule: schedule,
 

	
}	

ref.set(data); 


var firebaseRef = firebase.database().ref(depart+"/"+gname);

firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})

 $("#shdata").hide();
 $("#showGames").hide();
 $("#anotherGame").hide();
 $("#createOfficial").hide();
	}
	else{}
});

btnAdd.addEventListener('click', e => {
	var count = counterp+1;
if (confirm('Are you sure you want to pick this game? The game will dissapear.')) {
 $("#showGames").show();	
$("#hideAccs").hide();
$("#createOfficial").hide();
$("#ching").hide();

		var database = firebase.database();
		
		var gname=document.getElementById("name").innerText;
	  var depart=document.getElementById("depart").innerText;
	  var game=document.getElementById("grade").innerText;	
      var details=document.getElementById("details").innerText;
var losing=document.getElementById("losing").innerText;	
var winning=document.getElementById("winning").innerText;
var schedule=document.getElementById("schedu").innerText;
var venue=document.getElementById("venue").innerText;	
var gender=document.getElementById("gender").innerText;

var Oname = document.getElementById("options").value;
	
	var email = document.getElementById("email").innerText;
var accName = Oname.toString();
	
	

var ref = database.ref().child("RGames/"+accName+counterp);
	
var data= {
	
	GameLimit: count,
	Grade: grade,
Game: game,
Details: details,
 Gender : gender,
 Department: depart, 
 Lose : losing,
 Win : winning,
 Schedule: schedule,
 

	
}	
ref.push(data); 

var firebaseRef = firebase.database().ref(depart+"/"+gname);

firebaseRef.remove().then(function() { 
console.log("Remove succeeded.");
}).catch(function (error) {
	console.log("Remove Failed: " + error.message);
})


$("#End").show();

	}
	else{}
});

$("#idnum").hide();
$("#pname").hide();
$("#page").hide();
$("#adata").hide();
$("#sdata").hide();


function showa(){
	
	var emaild=document.getElementById("email");
	var email=document.getElementById("options").value;
		
		 
		
  var firebaseHeadingRef = firebase.database().ref().child("Officials/"+email+"/Email");
firebaseHeadingRef.on('value', function(datasnapshot){
		
emaild.innerHTML = datasnapshot.val();
});
//Elementary

		 $("#ching").hide();
		 
$("#showGames").show();
var rootRef = firebase.database().ref().child("Elementary");

rootRef.on("child_added", snap => {
  var details = snap.child("Details").val();
  var game = snap.child("Game").val();
 var gender = snap.child("Gender").val();  
var lose = snap.child("Lose").val();
var sched = snap.child("Schedule").val();
var venue =  snap.child("Venue").val();
var win =  snap.child("Win").val();
var name = snap.child("Grade").val();
var gname = snap.child("GameName").val();

var btn = document.createElement("button");


var insideTxt= document.createTextNode("Pick Game");
btn.appendChild(insideTxt);
btn.setAttribute('type', 'button');

	btn.setAttribute("id","butt"+counter++);
       $("#displaye").append(btn);
   $("#displaye").append("<li>"+ gname+"</li>" +"<li>"+ name+"</li>" +"<li>"+ game+"</li>" + "<li>"+details+"</li>"+"<li>"+gender+"</li>"+"<li>"+lose+"</li>"+"<li>"+win+"</li>"+"<li>"+sched+"</li>"+"<li>"+venue+"</li>");

$('#list li').attr('id', function(i) {
   return 'li'+(i+1);
});
});
//Junior College
var rootRef = firebase.database().ref().child("Junior Highschool");

rootRef.on("child_added", snap => {
 var details = snap.child("Details").val();
  var game = snap.child("Game").val();
 var gender = snap.child("Gender").val();  
var lose = snap.child("Lose").val();
var sched = snap.child("Schedule").val();
var venue =  snap.child("Venue").val();
var win =  snap.child("Win").val();
var gname = snap.child ("GameName").val();
var name = snap.child("Grade").val();


var btn = document.createElement("button");


var insideTxt= document.createTextNode("Pick Game");
btn.appendChild(insideTxt);
btn.setAttribute('type', 'button');

	btn.setAttribute("id","buttj"+counterj++);
	 $("#displayj").append(btn);
       $("#displayj").append("<li>"+ gname+"</li>" +"<li>"+ name+"</li>" +"<li>"+ game+"</li>" + "<li>"+details+"</li>"+"<li>"+gender+"</li>"+"<li>"+lose+"</li>"+"<li>"+win+"</li>"+"<li>"+sched+"</li>"+"<li>"+venue+"</li>");

$('#listj li').attr('id', function(i) {
   return 'lij'+(i+1);
});
});

//Senior Highschool
var rootRef = firebase.database().ref().child("Senior Highschool");

rootRef.on("child_added", snap => {
var details = snap.child("Details").val();
  var game = snap.child("Game").val();
 var gender = snap.child("Gender").val();  
var lose = snap.child("Lose").val();
var sched = snap.child("Schedule").val();
var venue =  snap.child("Venue").val();
var win =  snap.child("Win").val();
var gname = snap.child("GameName").val();
var name = snap.child("Grade").val();


var btn = document.createElement("button");


var insideTxt= document.createTextNode("Pick Game");
btn.appendChild(insideTxt);
btn.setAttribute('type', 'button');

	btn.setAttribute("id","butts"+counters++);
       $("#displays").append(btn);
   $("#displays").append("<li>"+ gname+"</li>" +"<li>"+ name+"</li>" +"<li>"+ game+"</li>" + "<li>"+details+"</li>"+"<li>"+gender+"</li>"+"<li>"+lose+"</li>"+"<li>"+win+"</li>"+"<li>"+sched+"</li>"+"<li>"+venue+"</li>");

$('#lists li').attr('id', function(i) {
   return 'lis'+(i+1);
});
});
//College
var rootRef = firebase.database().ref().child("College");

rootRef.on("child_added", snap => {
var details = snap.child("Details").val();
  var game = snap.child("Game").val();
 var gender = snap.child("Gender").val();  
var lose = snap.child("Lose").val();
var sched = snap.child("Schedule").val();
var venue =  snap.child("Venue").val();
var win =  snap.child("Win").val();
var name = snap.child("GameName").val();
var name = snap.child("Grade").val();


var btn = document.createElement("button");


var insideTxt= document.createTextNode("Pick Game");
btn.appendChild(insideTxt);
btn.setAttribute('type', 'button');

	btn.setAttribute("id","buttc"+counterc++);
       $("#displayc").append(btn);
   $("#displayc").append("<li>"+ gname+"</li>" +"<li>"+ name+"</li>" +"<li>"+ game+"</li>" + "<li>"+details+"</li>"+"<li>"+gender+"</li>"+"<li>"+lose+"</li>"+"<li>"+win+"</li>"+"<li>"+sched+"</li>"+"<li>"+venue+"</li>");

$('#listc li').attr('id', function(i) {
   return 'lic'+(i+1);
});
});



//Button Elem
}

	var x=document.getElementById("form");

	
   $('#displaye').on('click', '#butt1', function(){
	   $("#ching").show();
	$("#anotherGame").show();

		var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("li1").innerText;
		var grade=document.getElementById("li2").innerText;
    var n=document.getElementById("li3").innerText;
var n1=document.getElementById("li4").innerText;
var n2=document.getElementById("li5").innerText;	
var n3=document.getElementById("li6").innerText;
var n4=document.getElementById("li7").innerText;	
var n5=document.getElementById("li8").innerText;	
var n6=document.getElementById("li9").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;

   

$("#createOfficial").show();




});
$('#displaye').on('click', '#butt2', function(){
	$("#createOfficial").show();
	  $("#ching").show();

 var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("li10").innerText;
		var grade=document.getElementById("li11").innerText;
    var n=document.getElementById("li12").innerText;
var n1=document.getElementById("li13").innerText;
var n2=document.getElementById("li14").innerText;	
var n3=document.getElementById("li15").innerText;
var n4=document.getElementById("li16").innerText;	
var n5=document.getElementById("li17").innerText;	
var n6=document.getElementById("li18").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;

});
$('#displaye').on('click', '#butt3', function(){
	  $("#ching").show();
$("#anotherGame").show();
$("#createOfficial").show();

  var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("li19").innerText;
		var grade=document.getElementById("li20").innerText;
    var n=document.getElementById("li21").innerText;
var n1=document.getElementById("li22").innerText;
var n2=document.getElementById("li23").innerText;	
var n3=document.getElementById("li24").innerText;
var n4=document.getElementById("li25").innerText;	
var n5=document.getElementById("li26").innerText;	
var n6=document.getElementById("li27").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
   
});
$('#displaye').on('click', '#butt4', function(){
	  $("#ching").show();
$("#anotherGame").show();
$("#createOfficial").show();

   var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("li28").innerText;
		var grade=document.getElementById("li29").innerText;
    var n=document.getElementById("li30").innerText;
var n1=document.getElementById("li31").innerText;
var n2=document.getElementById("li32").innerText;	
var n3=document.getElementById("li33").innerText;
var n4=document.getElementById("li34").innerText;	
var n5=document.getElementById("li35").innerText;	
var n6=document.getElementById("li36").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
});
$('#displaye').on('click', '#butt5', function(){
	  $("#ching").show();
	$("#anotherGame").show();
$("#createOfficial").show();

var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("li37").innerText;
		var grade=document.getElementById("li38").innerText;
    var n=document.getElementById("li39").innerText;
var n1=document.getElementById("li40").innerText;
var n2=document.getElementById("li41").innerText;	
var n3=document.getElementById("li42").innerText;
var n4=document.getElementById("li43").innerText;	
var n5=document.getElementById("li44").innerText;	
var n6=document.getElementById("li45").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;

});
//Button JHS

     $('#displayj').on('click', '#buttj1', function(){
		   $("#ching").show();
$("#anotherGame").show();
$("#createOfficial").show();

var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lij").innerText;
		var grade=document.getElementById("lij2").innerText;
    var n=document.getElementById("lij3").innerText;
var n1=document.getElementById("lij4").innerText;
var n2=document.getElementById("lij5").innerText;	
var n3=document.getElementById("lij6").innerText;
var n4=document.getElementById("lij7").innerText;	
var n5=document.getElementById("lij8").innerText;	
var n6=document.getElementById("lij9").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
   

});
$('#displayj').on('click', '#buttj2', function(){
	  $("#ching").show();
$("#anotherGame").show();
$("#createOfficial").show();

var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lij10").innerText;
		var grade=document.getElementById("lij11").innerText;
    var n=document.getElementById("lij12").innerText;
var n1=document.getElementById("lij13").innerText;
var n2=document.getElementById("lij14").innerText;	
var n3=document.getElementById("lij15").innerText;
var n4=document.getElementById("lij16").innerText;	
var n5=document.getElementById("lij17").innerText;	
var n6=document.getElementById("lij18").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
   
});
$('#displayj').on('click', '#buttj3', function(){
	  $("#ching").show();
	$("#anotherGame").show();
	$("#createOfficial").show();

   var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lij19").innerText;
		var grade=document.getElementById("lij20").innerText;
    var n=document.getElementById("lij21").innerText;
var n1=document.getElementById("lij22").innerText;
var n2=document.getElementById("lij23").innerText;	
var n3=document.getElementById("lij24").innerText;
var n4=document.getElementById("lij25").innerText;	
var n5=document.getElementById("lij26").innerText;	
var n6=document.getElementById("lij27").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
   
 
});
$('#displayj').on('click', '#buttj4', function(){
	  $("#ching").show();
	$("#anotherGame").show();
	$("#createOfficial").show();
	
  var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lij28").innerText;
		var grade=document.getElementById("lij29").innerText;
    var n=document.getElementById("lij30").innerText;
var n1=document.getElementById("lij31").innerText;
var n2=document.getElementById("lij32").innerText;	
var n3=document.getElementById("lij33").innerText;
var n4=document.getElementById("lij34").innerText;	
var n5=document.getElementById("lij35").innerText;	
var n6=document.getElementById("lij36").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
  
});
$('#displayj').on('click', '#buttj5', function(){
	  $("#ching").show();
$("#anotherGame").show();
$("#createOfficial").show();

   var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lij37").innerText;
		var grade=document.getElementById("lij38").innerText;
    var n=document.getElementById("lij39").innerText;
var n1=document.getElementById("lij40").innerText;
var n2=document.getElementById("lij41").innerText;	
var n3=document.getElementById("lij42").innerText;
var n4=document.getElementById("lij43").innerText;	
var n5=document.getElementById("lij44").innerText;	
var n6=document.getElementById("lij45").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
  
});

//Button SHS


  $('#displays').on('click', '#butts1', function(){
	    $("#ching").show();
	  $("#anotherGame").show();
	  $("#createOfficial").show();
	 
	
var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lis1").innerText;
		var grade=document.getElementById("lis2").innerText;
    var n=document.getElementById("lis3").innerText;
var n1=document.getElementById("lis4").innerText;
var n2=document.getElementById("lis5").innerText;	
var n3=document.getElementById("lis6").innerText;
var n4=document.getElementById("lis7").innerText;	
var n5=document.getElementById("lis8").innerText;	
var n6=document.getElementById("lis9").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
   

});
$('#displays').on('click', '#butts2', function(){
	  $("#ching").show();
	$("#anotherGame").show();
	$("#createOfficial").show();
	
	
var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lis10").innerText;
		var grade=document.getElementById("lis11").innerText;
    var n=document.getElementById("lis12").innerText;
var n1=document.getElementById("lis13").innerText;
var n2=document.getElementById("lis14").innerText;	
var n3=document.getElementById("lis15").innerText;
var n4=document.getElementById("lis16").innerText;	
var n5=document.getElementById("lis17").innerText;	
var n6=document.getElementById("lis18").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
  
});
$('#displays').on('click', '#butts3', function(){
	  $("#ching").show();
	$("#anotherGame").show();
	$("#createOfficial").show();

   	
var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lis19").innerText;
		var grade=document.getElementById("lis20").innerText;
    var n=document.getElementById("lis21").innerText;
var n1=document.getElementById("lis22").innerText;
var n2=document.getElementById("lis23").innerText;	
var n3=document.getElementById("lis24").innerText;
var n4=document.getElementById("lis25").innerText;	
var n5=document.getElementById("lis26").innerText;	
var n6=document.getElementById("lis27").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
});
$('#displays').on('click', '#butts4', function(){
	  $("#ching").show();
$("#anotherGame").show();
$("#createOfficial").show();

   	
var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lis28").innerText;
		var grade=document.getElementById("lis29").innerText;
    var n=document.getElementById("lis30").innerText;
var n1=document.getElementById("lis31").innerText;
var n2=document.getElementById("lis32").innerText;	
var n3=document.getElementById("lis33").innerText;
var n4=document.getElementById("lis34").innerText;	
var n5=document.getElementById("lis35").innerText;	
var n6=document.getElementById("lis36").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
  
});
$('#displays').on('click', '#butts5', function(){
	  $("#ching").show();
$("#anotherGame").show();
$("#createOfficial").show();
$
    	
var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lis37").innerText;
		var grade=document.getElementById("lis38").innerText;
    var n=document.getElementById("lis39").innerText;
var n1=document.getElementById("lis40").innerText;
var n2=document.getElementById("lis41").innerText;	
var n3=document.getElementById("lis42").innerText;
var n4=document.getElementById("lis43").innerText;	
var n5=document.getElementById("lis44").innerText;	
var n6=document.getElementById("lis45").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
 
});

//Button College

  $('#displayc').on('click', '#buttc1', function(){  
  $("#ching").show();
  $("#createOfficial").show();

	$("#anotherGame").show();
	
var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lic1").innerText;
		var grade=document.getElementById("lic2").innerText;
    var n=document.getElementById("lic3").innerText;
var n1=document.getElementById("lic4").innerText;
var n2=document.getElementById("lic5").innerText;	
var n3=document.getElementById("lic6").innerText;
var n4=document.getElementById("lic7").innerText;	
var n5=document.getElementById("lic8").innerText;	
var n6=document.getElementById("lic9").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;

});
$('#displayc').on('click', '#buttc2', function(){
	  $("#ching").show();
	$("#anotherGame").show();
	$("#createOfficial").show();
	
var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lic10").innerText;
		var grade=document.getElementById("lic11").innerText;
    var n=document.getElementById("lic12").innerText;
var n1=document.getElementById("lic13").innerText;
var n2=document.getElementById("lic14").innerText;	
var n3=document.getElementById("lic15").innerText;
var n4=document.getElementById("lic16").innerText;	
var n5=document.getElementById("lic17").innerText;	
var n6=document.getElementById("lic18").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
   
});
$('#displayc').on('click', '#buttc3', function(){
	  $("#ching").show();
$("#anotherGame").show();
$("#createOfficial").show();

  var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lic19").innerText;
		var grade=document.getElementById("lic20").innerText;
    var n=document.getElementById("lic21").innerText;
var n1=document.getElementById("lic22").innerText;
var n2=document.getElementById("lic23").innerText;	
var n3=document.getElementById("lic24").innerText;
var n4=document.getElementById("lic25").innerText;	
var n5=document.getElementById("lic26").innerText;	
var n6=document.getElementById("lic27").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
   
});
$('#displayc').on('click', '#buttc4', function(){
	  $("#ching").show();
$("#anotherGame").show();
$("#createOfficial").show();

var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lic28").innerText;
		var grade=document.getElementById("lic29").innerText;
    var n=document.getElementById("lic30").innerText;
var n1=document.getElementById("lic31").innerText;
var n2=document.getElementById("lic32").innerText;	
var n3=document.getElementById("lic33").innerText;
var n4=document.getElementById("lic34").innerText;	
var n5=document.getElementById("lic35").innerText;	
var n6=document.getElementById("lic36").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
   
});
$('#displayc').on('click', '#buttc5', function(){
	  $("#ching").show();
	  $("#createOfficial").show();
	$("#anotherGame").show();
	
var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lic37").innerText;
		var grade=document.getElementById("lic38").innerText;
    var n=document.getElementById("lic39").innerText;
var n1=document.getElementById("lic40").innerText;
var n2=document.getElementById("lic41").innerText;	
var n3=document.getElementById("lic42").innerText;
var n4=document.getElementById("lic43").innerText;	
var n5=document.getElementById("lic44").innerText;	
var n6=document.getElementById("lic45").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
  
});

$('#displayc').on('click', '#buttc6', function(){
	  $("#ching").show();
	$("#anotherGame").show();
	$("#createOfficial").show();
	
var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lic46").innerText;
		var grade=document.getElementById("lic47").innerText;
    var n=document.getElementById("lic48").innerText;
var n1=document.getElementById("lic49").innerText;
var n2=document.getElementById("lic50").innerText;	
var n3=document.getElementById("lic51").innerText;
var n4=document.getElementById("lic52").innerText;	
var n5=document.getElementById("lic53").innerText;	
var n6=document.getElementById("lic54").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
  
});

$('#displayc').on('click', '#buttc7', function(){
	  $("#ching").show();
	$("#anotherGame").show();
	$("#createOfficial").show();
	
  var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lic55").innerText;
		var grade=document.getElementById("lic56").innerText;
    var n=document.getElementById("lic57").innerText;
var n1=document.getElementById("lic58").innerText;
var n2=document.getElementById("lic59").innerText;	
var n3=document.getElementById("lic60").innerText;
var n4=document.getElementById("lic61").innerText;	
var n5=document.getElementById("lic62").innerText;	
var n6=document.getElementById("lic63").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
 
});

$('#displayc').on('click', '#buttc8', function(){
	  $("#ching").show();
$("#anotherGame").show();
$("#listwa").hide();
$("#createOfficial").show();
  var tit=document.getElementById("depae").innerText;
		var name = document.getElementById("lic64").innerText;
		var grade=document.getElementById("lic65").innerText;
    var n=document.getElementById("lic66").innerText;
var n1=document.getElementById("lic67").innerText;
var n2=document.getElementById("lic68").innerText;	
var n3=document.getElementById("lic69").innerText;
var n4=document.getElementById("lic70").innerText;	
var n5=document.getElementById("lic71").innerText;	
var n6=document.getElementById("lic72").innerText;	

		
var accs=document.getElementById("options").value;

  document.getElementById("grade").innerHTML=grade;
      document.getElementById("gname").innerHTML=name;
     document.getElementById("accounts").innerHTML=accs;
	    document.getElementById("depart").innerHTML=tit;
	document.getElementById("game").innerHTML=n;
	document.getElementById("details").innerHTML=n1;
	document.getElementById("gender").innerHTML=n2;
	document.getElementById("losing").innerHTML=n3;
   document.getElementById("winning").innerHTML=n4;
   document.getElementById("schedu").innerHTML=n5;
   document.getElementById("venue").innerHTML=n6;
  
});
