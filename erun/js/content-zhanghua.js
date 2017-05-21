window.onload =function(){
	//BMI体重指数
	var oBmiCal =document.getElementById("bmi-cal");
	var oBmiReset =document.getElementById("bmi-reset");
	var oBmiHeight =document.getElementById("bmi-height");
	var oBmiWight =document.getElementById("bmi-wight");
	oBmiCal.onclick=function(){
		var vl1=(oBmiWight.value/((oBmiHeight.value/100)*(oBmiHeight.value/100))).toFixed(2);
		var vl2;
		if(vl1<=18.5){vl2="偏轻"}
		else if(vl1<=29.9){vl2="偏重"}
		else{vl2="肥胖"}
//		下两行测试代码
//		document.getElementById("bmi-value").innerHTML="您的体重指数为"+(oBmiWight.value/((oBmiHeight.value/100)*(oBmiHeight.value/100))).toFixed(2) +" 属于：偏轻";
//			alert("xx");
	document.getElementById("bmi-value").innerHTML="您的体重指数为"+vl1 +" 属于："+vl2;
	}
	oBmiReset.onclick=function(){
//		alert('xx');	
		oBmiHeight.value="";
		oBmiWight.value="";
	}
	//马拉松配速
	var mpHour = document.getElementById("mp-hour");
	var mpMinute = document.getElementById("mp-minute");
	var mpSecond = document.getElementById("mp-second");
	var mpInput1 =document.getElementById("mp-input1");
	var mpInput2 =document.getElementById("mp-input2");
	var mpR1 = document.getElementById("md-r1");
	var mpR2 = document.getElementById("md-r2");
	var mpR3 = document.getElementById("md-r3");
	var mpR4 = document.getElementById("md-r4");
	var mpR5 = document.getElementById("md-r5");
	var mpR6 = document.getElementById("md-r6");
	var mpR7 = document.getElementById("md-r7");
	var mpR8 = document.getElementById("md-r8");
	var mpR9 = document.getElementById("md-r9");
	var mpR10 = document.getElementById("md-r10");
	var mpCal = document.getElementById("mp-cal");
	var mpReset = document.getElementById("mp-reset");
	var mdTable = document.getElementById("md-table");
	
	
	for(var i=0;i<13;i++){
		var opt12 = document.createElement("option");
		opt12.value = i;
		opt12.innerHTML=i;
		mpHour.appendChild(opt12);
	}
	for(var i=0;i<61;i++){
		var opt12 = document.createElement("option");
		opt12.value= i;
		opt12.innerHTML=i;
		mpMinute.appendChild(opt12);
	}
	for(var i=0;i<61;i++){
		var opt12 = document.createElement("option");
		opt12.value= i;
		opt12.innerHTML=i;
		mpSecond.appendChild(opt12);
	}
	mpCal.onclick = function(){
		mdTable.style.display="block";
		if(mpHour.value.length>0&&mpSecond.value.length>0&&mpMinute.value.length>0){
			var sum = parseInt(mpHour.value)*3600 + parseInt(mpSecond.value)*60 + parseInt(mpMinute.value);
			var mp_a = 42/sum;
			var mp_b =1;
			var mp_c = mp_b/mp_a;
			mpR1.innerHTML = parseInt(mp_c/3600)+ "时"+	parseInt(mp_c%3600/60) +"分"+parseInt(mp_c%3600%60)+"秒"; 	
			var mp_b =20;
			mp_c = mp_b/mp_a;
			mpR2.innerHTML = parseInt(mp_c/3600)+ "时"+	parseInt(mp_c%3600/60) +"分"+parseInt(mp_c%3600%60)+"秒"; 	
			var mp_b =2;
			var mp_c = mp_b/mp_a;
			mpR3.innerHTML = parseInt(mp_c/3600)+ "时"+	parseInt(mp_c%3600/60) +"分"+parseInt(mp_c%3600%60)+"秒"; 	
			var mp_b =21;
			mp_c = mp_b/mp_a;
			mpR4.innerHTML = parseInt(mp_c/3600)+ "时"+	parseInt(mp_c%3600/60) +"分"+parseInt(mp_c%3600%60)+"秒"; 
			var mp_b =5;
			var mp_c = mp_b/mp_a;
			mpR5.innerHTML = parseInt(mp_c/3600)+ "时"+	parseInt(mp_c%3600/60) +"分"+parseInt(mp_c%3600%60)+"秒"; 	
			var mp_b =30;
			mp_c = mp_b/mp_a;
			mpR6.innerHTML = parseInt(mp_c/3600)+ "时"+	parseInt(mp_c%3600/60) +"分"+parseInt(mp_c%3600%60)+"秒"; 	
			var mp_b =10;
			var mp_c = mp_b/mp_a;
			mpR7.innerHTML = parseInt(mp_c/3600)+ "时"+	parseInt(mp_c%3600/60) +"分"+parseInt(mp_c%3600%60)+"秒"; 	
			var mp_b =42;
			mp_c = mp_b/mp_a;
			mpR8.innerHTML = parseInt(mp_c/3600)+ "时"+	parseInt(mp_c%3600/60) +"分"+parseInt(mp_c%3600%60)+"秒"; 
			var mp_b =54;
			mp_c = mp_b/mp_a;
			mpR9.innerHTML = parseInt(mp_c/3600)+ "时"+	parseInt(mp_c%3600/60) +"分"+parseInt(mp_c%3600%60)+"秒"; 
		}
	}
	mpReset.onclick = function(){
		mdTable.style.display="none";
	}
	//Age-Graded
	var agMan =document.getElementById("Ag-man");
	var agWoman =document.getElementById("Ag-woman");
	var agAge =document.getElementById("Ag-age");
	var agDistance =document.getElementById("Ag-distance");
	var agHour =document.getElementById("Ag-hour");
	var agMinute =document.getElementById("Ag-minute");
	var agSecond =document.getElementById("Ag-second");
	var agCal =document.getElementById("Ag-cal");
	var agReset =document.getElementById("Ag-reset");
	var agOutput =document.getElementById("Ag-output");
	for (var i=0;i<=24;i++) {
		var opt2=document.createElement("option");
		opt2.value=i;
		opt2.innerText=i;
		agHour.appendChild(opt2);
	}
	for (var i=0;i<=59;i++) {
		var opt2=document.createElement("option");
		opt2.value=i;
		opt2.innerText=i;
		agMinute.appendChild(opt2);
		agSecond.appendChild(opt2);
		
	}
	agCal.onclick = function(){
//		alert("aa");
//		agOutput.style.display="block";
//		function Sex(){
//	      	var oSex='';
//	      	if(agMan.checked){
//	      		oSex='男子';
//	      	}
//	      	else{
//	      		oSex='女子';
//	      	}
//	      	return oSex;
//	    }
		var num = agDistance.selectedIndex;
		var agDis = agDistance.options[num].value;
		var agD = parseInt(agDis/360);
		var agx =  parseInt(agDis%60);
		 var xx = (agD+"分"+agx+"秒");
//		alert(xx);
//		document.getElementById("Ag-output").innerHTML="该年龄("+agAge.value+"周岁)的等级用时是：0分1秒";
      			document.getElementById("Ag-output").innerHTML="该年龄("+agAge.value+"周岁)的等级用时是："+xx+"<br/>您的年龄等级得分是：6186.70 % 属于：世界纪录水平<br />要实现世界记录(100%)，需用时：1分1秒 配速：22.09 Km/h(2分3秒/公里)";
	}
	agReset.onclick = function(){
		agOutput.style.display="none";
	}
}