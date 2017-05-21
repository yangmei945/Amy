/*write by duxia*/
//window.onload=function(){
	var oHigh=document.getElementById("high");
	var oWeight=document.getElementById("weight");
	var oOld=document.getElementById("old");
	var oCon10_but1=document.getElementsByClassName("con10_but1")[0];
	var oCon10_but2=document.getElementsByClassName("con10_but2")[0];
    var oAnwserk=document.getElementsByClassName("anwserk")[0];
    var oMnn=document.getElementsByName("sex");
	var sex='';
	for(var i=0;i<oMnn.length;i++){
		oMnn[i].onclick=function(){
			console.log(this.value);
			sex=this.value;
		}
	}
		
   	oCon10_but1.onclick=function(){
		var oCon10_line1=document.getElementById("con10_line1");
		var oCon10_line2=document.getElementById("con10_line2");
		var oCon10_line3=document.getElementById("con10_line3");
		var oCon10_line4=document.getElementById("con10_line4");
		var oCon10_line5=document.getElementById("con10_line5");
		var oAnwserk_1=document.getElementById("anwserk_1");
		var oAnwserk_2=document.getElementById("anwserk_2");
		var BMR_oMnn=parseFloat(66+13.7*oWeight.value+5.0*oHigh.value-6.8*oOld.value).toFixed(2);
		var BMR_onv=parseFloat(655+9.6*oWeight.value+1.7*oHigh.value-4.7*oOld.value).toFixed(2);
		oAnwserk_1.innerHTML="BMR:"+BMR_oMnn;  //男
		var right1=document.getElementsByClassName('right1')[0];
		var aInput=right1.getElementsByTagName('input');
		if(sex=='nan'){
			for(var i=0;i<aInput.length;i++){
				if(aInput[0].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_oMnn*1.5).toFixed(2);
				}else if(aInput[1].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_oMnn*1.3).toFixed(2);
				}else if(aInput[2].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_oMnn*1.5).toFixed(2);
				}else if(aInput[3].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_oMnn*1.7).toFixed(2);
				}else if(aInput[4].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_oMnn*1.9).toFixed(2);
				}
			}
		}else{
			console.log("我是女生……");
			//只是测试 计算方式需根据实际修改
			for(var i=0;i<aInput.length;i++){
				
				if(aInput[0].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_onv*1.2).toFixed(2);
				}else if(aInput[1].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_onv*1.3).toFixed(2);
				}else if(aInput[2].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_onv*1.5).toFixed(2);
				}else if(aInput[3].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_onv*1.7).toFixed(2);
				}else if(aInput[4].checked==true){
						oAnwserk_2.innerHTML="一日所需能量："+(BMR_onv*1.9).toFixed(2);
				}
			}
		}
 //  }
    
    
    /*var BMR_oOnn=parseFloat(655+9.6*oWeight.value+1.7*oHigh.value-4.7*oOld.value).toFixed(2);
    oAnwserk_1.innerHTML="BMR:"+BMR_Onn;//女
    	oAnwserk_1.innerHTML="BMR:"+*/
}
/*
 代码  太过复杂 周一和组长讨论  看如何优化
 * 
 * 
 * */