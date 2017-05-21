
var oBtn=document.getElementById("btn1");
var oClear1=document.getElementById("clear1");
var oBtn2=document.getElementById("con9_btn2");
var oClear2=document.getElementById("clear2");
var oBtn3=document.getElementById("con9_btn3");
var oClear3=document.getElementById("clear3");
var oBtn4=document.getElementById("con9_btn4");
var oClear4=document.getElementById("clear4");
var oBtn5=document.getElementById("con9_btn5");
var oClear5=document.getElementById("clear5");
var oBtn6=document.getElementById("con9_btn6");
var oClear6=document.getElementById("clear6");


oBtn.onclick=function(){
	var oMile=document.getElementById("mile");
	var oKm=document.getElementById("km");
	oKm.value=parseFloat(oMile.value*1.609344).toFixed(2);
}
oClear1.onclick=function(){
	var oMile=document.getElementById("mile");
 	var oKm=document.getElementById("km");
 	console.log(oKm);
	oMile.value="";
	oKm.value="";
}
oBtn2.onclick=function(){
	var oInch=document.getElementById("inch");
	var oCm=document.getElementById("cm");
	oCm.value=parseFloat(oInch.value*2.54).toFixed(2);
}
oClear2.onclick=function(){
	var oInch=document.getElementById("inch");
	var oCm=document.getElementById("cm");
	oInch.value="";
	oCm.value="";
}
oBtn3.onclick=function(){
	var oFoot=document.getElementById("foot");
	var oCm2=document.getElementById("cm2");
	oCm2.value=parseFloat(oFoot.value*30.48).toFixed(2);
}
oClear3.onclick=function(){
	var oFoot=document.getElementById("foot");
	var oCm2=document.getElementById("cm2");
	oFoot.value="";
	oCm2.value="";
}
oBtn4.onclick=function(){
	var oPound=document.getElementById("pound");
	var oKg=document.getElementById("kg");
	oKg.value=parseFloat(oPound.value*0.4536).toFixed(2);
}
oClear4.onclick=function(){
	var oPound=document.getElementById("pound");
	var oKg=document.getElementById("kg");
	oPound.value="";
	oKg.value="";
}
oBtn5.onclick=function(){
	var oOunce=document.getElementById("ounce");
	var oGram=document.getElementById("gram");
	oGram.value=parseFloat(oOunce.value*28.3495231).toFixed(2);
}
oClear5.onclick=function(){
	var oOunce=document.getElementById("ounce");
	var oGram=document.getElementById("gram");
	oOunce.value="";
	oGram.value="";
}
oBtn6.onclick=function(){
	var oGallon=document.getElementById("gallon");
	var oGram=document.getElementById("liter");
	oGram.value=parseFloat(oGallon.value*3.7854118).toFixed(2);
}
oClear6.onclick=function(){
	var oGallon=document.getElementById("gallon");
	var oGram=document.getElementById("liter");
	oGallon.value="";
	oGram.value="";
}


