const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5b0b47964msh987bb4418cbba0ep1c96e6jsneb5083e86212',
		'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
	}
};

fetch('https://cricket-live-data.p.rapidapi.com/series', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    alert("Enter the two batsman names and give any one batsman strike\n and keep on run moving by clicing the run buttons");


 //srrings variables#############################
 var d="*";
 var f="";
 var j="out";
 // To store all the strike#################
 //##################################################
 //##################################################
 //##################################################
 var skone=document.getElementById("skone").checked;
 var sktwo=document.getElementById("sktwo").checked;
 var OnStrike=[skone,sktwo];
 //to store batsman name############################
 //##################################################
 //##################################################
 //##################################################
 var fnb=document.getElementById("fnb");
 var snb=document.getElementById("snb");
 var noofbatsman=[fnb,snb];
 //To store runs of batsman####################################
 //##################################################
 //##################################################
 var runf=document.getElementById("runf");
 var runs=document.getElementById("runs");
 var RunBat=[runf,runs];
 //##################################################
 //##################################################
 //##################################################
 //To store ball played by batsmen###################################
 
 var ballo=document.getElementById("nobp_first");
 var balls=document.getElementById("nobp_second");
 var ballsp=[ballo,balls];
 //##################################################
 //##################################################
 //##################################################
 //##################################################
 var nameo=document.getElementById("nameo");
 var namet=document.getElementById("namet");
 var nameth=document.getElementById("nameth");
 var namefo=document.getElementById("namefo");
 var namefi=document.getElementById("namefi");
 var namesi=document.getElementById("namesi");
 var namese=document.getElementById("namese");
 var namee=document.getElementById("namee");
 var namen=document.getElementById("namee");
 var namete=document.getElementById("namen");
 var nameel=document.getElementById("nameel");
//##################################################
 //##################################################
 //##################################################
 //##################################################
var runo=document.getElementById("runo");          
var runt=document.getElementById("runt");
var runth=document.getElementById("runth");
var runfo=document.getElementById("runfo");
var runfi=document.getElementById("runfi");
var runsi=document.getElementById("runsi");
var runse=document.getElementById("runse");
var rune=document.getElementById("rune");
var runn=document.getElementById("runn");
var runte=document.getElementById("runtr");
var runel=document.getElementById("runel");  
  //##################################################
  //##################################################
  //##################################################
  //##################################################
var ballon=document.getElementById("ballon");  
var ballt=document.getElementById("ballt");
var ballth=document.getElementById("ballth");
var ballfo=document.getElementById("ballfo");
var ballfi=document.getElementById("ballfi");
var ballsi=document.getElementById("ballsi");
var ballse=document.getElementById("ballse");
var balle=document.getElementById("balle");
var balln=document.getElementById("balln");
var ballte=document.getElementById("ballte");
var ballel=document.getElementById("ballel");
  //##################################################
  //##################################################
  //##################################################
  //##################################################
  
  
  
  
  
function start(){
var start=document.getElementById("first").value;
var openb=document.getElementById("fnb");
openb.innerHTML=start;
var second=document.getElementById("second").value;
var secondb=document.getElementById("snb");
secondb.innerHTML=second;
}


var i=0;
var ia=0;
var ib=0;
var b=0;
var ba=0;
var bb=0;
var c=0;
var e=0;
var g=0;
var h=0;
var k=0;
var n=0;
var p=0;
var q=1;




function ballp(){
b+=1;
var ball_one=document.getElementById("balls").innerHTML=b;
if(document.getElementById("skone").checked == true){
ba+=1;
document.getElementById("nobp_first").innerHTML=ba;
}
if(document.getElementById("sktwo").checked == true){
bb+=1;
document.getElementById("nobp_second").innerHTML=bb;
}
}


function change_strike(){
if(document.getElementById("skone").checked == true){
document.getElementById("sktwo").checked=true;
}
else if(document.getElementById("sktwo").checked == true){
document.getElementById("skone").checked=true;
}
}






function increase(){
i+=1;
var y=document.getElementById("score").innerHTML=i;
ballp();
if(document.getElementById("skone").checked == true){
ia+=1;
runf.innerHTML=ia;
}
if(document.getElementById("sktwo").checked == true){
ib+=1;
runs.innerHTML=ib;
}
}


function increase_two(){
i+=2;
var z=document.getElementById("score").innerHTML=i;
ballp();
if(document.getElementById("skone").checked == true){
ia+=2;
runf.innerHTML=ia;
}
if(document.getElementById("sktwo").checked == true){
ib+=2;
runs.innerHTML=ib;
}
}

function increase_dot(){
ballp();
}

function increase_four(){
i+=4;
var four=document.getElementById("score").innerHTML=i;
ballp();
if(document.getElementById("skone").checked == true){
ia+=4;
runf.innerHTML=ia;
}
if(document.getElementById("sktwo").checked == true){
ib+=4;
runs.innerHTML=ib;
}
}

function increase_six(){
i+=6;
var six=document.getElementById("score").innerHTML=i;
ballp();
if(document.getElementById("skone").checked == true){
ia+=6;
runf.innerHTML=ia;
}
if(document.getElementById("sktwo").checked == true){
ib+=6;
runs.innerHTML=ib;
}
}

function increase_wide(){
i+=1;
var six=document.getElementById("score").innerHTML=i;
}

function increase_no(){
i+=1;
var six=document.getElementById("score").innerHTML=i;
}

function increase_out(){
c+=1;
k+=1;
n+=1;
var six=document.getElementById("wkt").innerHTML=c;

ballp();
if(c==10){
document.getElementById("out").onclick="";
document.getElementById("outout").onclick="";
document.getElementById("dot").onclick="";
document.getElementById("single").onclick="";
document.getElementById("double").onclick="";
document.getElementById("four").onclick="";
document.getElementById("six").onclick="";
document.getElementById("overover").onclick="";
document.getElementById("noball").onclick="";
document.getElementById("wide").onclick="";
}
}

function out_one(){
var m=prompt("ENTER THE NEXT BATSMAN NAME");
switch(k){
case 1:nameo.innerHTML=fnb.innerHTML;noofbatsman[0].innerHTML=m;
runo.innerHTML=runf.innerHTML;ballon.innerHTML=ballo.innerHTML;
break;
case 2:namet.innerHTML=fnb.innerHTML;noofbatsman[0].innerHTML=m;
runt.innerHTML=runf.innerHTML;ballt.innerHTML=ballo.innerHTML;
break;
case 3:nameth.innerHTML=fnb.innerHTML;noofbatsman[0].innerHTML=m;
runth.innerHTML=runf.innerHTML;ballth.innerHTML=ballo.innerHTML;
break;
case 4:namefo.innerHTML=fnb.innerHTML;noofbatsman[0].innerHTML=m;
runfo.innerHTML=runf.innerHTML;ballfo.innerHTML=ballo.innerHTML;
break;
case 5:namefi.innerHTML=fnb.innerHTML;noofbatsman[0].innerHTML=m;
runfi.innerHTML=runf.innerHTML;ballfi.innerHTML=ballo.innerHTML;
break;
case 6:namesi.innerHTML=fnb.innerHTML;noofbatsman[0].innerHTML=m;
runsi.innerHTML=runf.innerHTML;ballsi.innerHTML=ballo.innerHTML;
break;
case 7:namese.innerHTML=fnb.innerHTML;noofbatsman[0].innerHTML=m;
runse.innerHTML=runf.innerHTML;ballse.innerHTML=ballo.innerHTML;
break;
case 8:namee.innerHTML=fnb.innerHTML;noofbatsman[0].innerHTML=m;
rune.innerHTML=runf.innerHTML;balle.innerHTML=ballo.innerHTML;
break;
case 9:namete.innerHTML=fnb.innerHTML;noofbatsman[0].innerHTML=m;
runn.innerHTML=runf.innerHTML;balln.innerHTML=ballo.innerHTML;
break;
case 10:nameel.innerHTML=fnb.innerHTML;alert("ALL OUT");
runtr.innerHTML=runf.innerHTML;ballte.innerHTML=ballo.innerHTML;
break;
}
return ba=0,ia=0;

}
function out_two(){
var m=prompt("ENTER THE NEXT BATSMAN NAME");
switch(k){
case 1:nameo.innerHTML=snb.innerHTML;noofbatsman[1].innerHTML=m;
runo.innerHTML=runs.innerHTML;ballon.innerHTML=balls.innerHTML;
break;
case 2:namet.innerHTML=snb.innerHTML;noofbatsman[1].innerHTML=m;
runt.innerHTML=runs.innerHTML;ballt.innerHTML=balls.innerHTML;
break;
case 3:nameth.innerHTML=snb.innerHTML;noofbatsman[1].innerHTML=m;
runth.innerHTML=runs.innerHTML;ballth.innerHTML=balls.innerHTML;
break;
case 4:namefo.innerHTML=snb.innerHTML;noofbatsman[1].innerHTML=m;
runfo.innerHTML=runs.innerHTML;ballfo.innerHTML=balls.innerHTML;
break;
case 5:namefi.innerHTML=snb.innerHTML;noofbatsman[1].innerHTML=m;
runfi.innerHTML=runs.innerHTML;ballfi.innerHTML=balls.innerHTML;
break;
case 6:namesi.innerHTML=snb.innerHTML;noofbatsman[1].innerHTML=m;
runsi.innerHTML=runs.innerHTML;ballsi.innerHTML=balls.innerHTML;
break;
case 7:namese.innerHTML=snb.innerHTML;noofbatsman[1].innerHTML=m;
runse.innerHTML=runs.innerHTML;ballse.innerHTML=balls.innerHTML;
break;
case 8:namee.innerHTML=snb.innerHTML;noofbatsman[1].innerHTML=m;
rune.innerHTML=runs.innerHTML;balle.innerHTML=balls.innerHTML;
break;
case 9:namete.innerHTML=snb.innerHTML;noofbatsman[1].innerHTML=m;
runn.innerHTML=runs.innerHTML;balln.innerHTML=balls.innerHTML;
break;
case 10:nameel.innerHTML=snb.innerHTML;alert("ALL OUT");
runtr.innerHTML=runs.innerHTML;ballte.innerHTML=balls.innerHTML;
break;
}
return bb=0,ib=0;

}
function increase_over(){
g+=1;
n+=1;
var over=document.getElementById("overplay").innerHTML=g;
}

function appear(){
p+=1;
if(p%2!=0){
document.getElementById("AllScore").style.display="block";}
if(p%2==0){
document.getElementById("AllScore").style.display="none";}
}

function appear_two(){
document.getElementById("all").style.display="block";
}

function team1()
{
var totalovr = document.getElementById("overs").value;
var  ovr = document.getElementById("overplay").innerHTML;
document.getElementById("t1overs").innerHTML=ovr;
var wicket = document.getElementById("wkt").innerHTML;
document.getElementById("t1wickets").innerHTML=wicket;
var runs = document.getElementById("score").innerHTML;
document.getElementById("t1runs").innerHTML=runs;
}

function innings1()
{
   b=0;
   i=0;
   document.getElementById("overplay").innerHTML=0;
   document.getElementById("wkt").innerHTML=0;
   document.getElementById("score").innerHTML=0;
   document.getElementById("balls").innerHTML=0;
   document.getElementById("st1").disabled = true;

}

function team2()
{
  var totalovr = document.getElementById("overs").value;
var  ovr = document.getElementById("overplay").innerHTML;
document.getElementById("t2overs").innerHTML=ovr;
var wicket = document.getElementById("wkt").innerHTML;
document.getElementById("t2wickets").innerHTML=wicket;
var runs = document.getElementById("score").innerHTML;
document.getElementById("t2runs").innerHTML=runs;
}
function innings2()
{
   b=0;
   i=0;
   document.getElementById("overplay").innerHTML=0;
   document.getElementById("wkt").innerHTML=0;
   document.getElementById("score").innerHTML=0;
   document.getElementById("balls").innerHTML=0;
   document.getElementById("st2").disabled = true;
}