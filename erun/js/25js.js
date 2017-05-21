var oint1=document.getElementById('int1');
var ozxc1=document.getElementById('zxc1');
var ozxc2=document.getElementById('zxc2');
var ozxc3=document.getElementById('zxc3');


var time;
var time1;
var time2;
var time3;
var time4;
var time5;
var time6;
var speed;
 
var oan1=document.getElementById('an1');
var oan2=document.getElementById('an2');

var os1=document.getElementById('s1');
var os2=document.getElementById('s2');
var os3=document.getElementById('s3');
var os4=document.getElementById('s4');
var os5=document.getElementById('s5');
var os6=document.getElementById('s6');

var op1=document.getElementById('p1');
var op2=document.getElementById('p2');
var op3=document.getElementById('p3');

oan2.onclick=function(){
	
	oint1.value='';
ozxc1.value='';
ozxc2.value='';
ozxc3.value='';
os1.innerHTML='';
os2.innerHTML='';
os3.innerHTML='';
os4.innerHTML='';
os5.innerHTML='';
os6.innerHTML='';

op1.innerHTML='';
op2.innerHTML='';
op3.innerHTML='';
}


oan1.onclick=function(){
	//距离
var d=oint1.value;
console.log(d);
//时分秒
var h=ozxc1.options[ozxc1.selectedIndex].value;
var m=ozxc2.options[ozxc2.selectedIndex].value;
var s=ozxc3.options[ozxc3.selectedIndex].value;
console.log(h);
console.log(m);
console.log(s);


time=3600*h+60*m+(s-0);

speed=1000*oint1.value/time;
	
	console.log(speed);
	time1=1500/speed;
	time2=3000/speed;
	time3=5000/speed;
	time4=10000/speed;
	time5=21000/speed;
	time6=42000/speed;
function aaa(distence,time){
	var time=ff(Math.floor(time/3600))+"时"+ff(Math.floor(time%3600/60))+"分"+ff(Math.floor(time%60))+"秒";
	console.log(time);
	distence.innerHTML=time;
}

p1.innerHTML=(0.06*speed).toFixed(2);
p2.innerHTML=(0.36*speed).toFixed(2);
p3.innerHTML=speed.toFixed(2);
					

//时间
var mmn=parseInt(h)*3600+parseInt(m)*60+parseInt(s);
console.log(mmn);
speed=1000*oint1.value/time;

time1=1500/speed;
time2=3000/speed;
time3=5000/speed;
time4=10000/speed;
time5=21000/speed;
time6=42000/speed;
//计算每公里时间
var t=mmn/d;
console.log(t);

/*补零函数*/
function ff(s) {
	return s<10?'0'+s:s;
}
//		计算时间函数
function aaa(distence,time){
	var time=ff(Math.floor(time/3600))+"时"+ff(Math.floor(time%3600/60))+"分"+ff(Math.floor(time%60))+"秒";
		console.log(time);
		distence.innerHTML=time;
	}
	
	aaa(os1,t*1.5);
	aaa(os2,t*3.0);
	aaa(os3,t*5.0);
	aaa(os4,t*10.0);
	aaa(os5,t*21.1);
	aaa(os6,t*42.195);
	aaa(os6,t*42.195);
  }

