	
	var oCon9_hour=document.getElementsByClassName("con9_hour")[0];
			for(var i=0;i<=24;i++){
				var Option=document.createElement("option");
				Option.className="hour"+i;
				Option.innerHTML=i;
				Option.value=i;
				oCon9_hour.appendChild(Option);
			}
	var oCon9_min=document.getElementsByClassName("con9_min")[0];	
	for(var i=0;i<=59;i++){
				var Option=document.createElement("option");
				Option.className="min"+i;
				Option.innerHTML=i;
				Option.value=i;
				oCon9_min.appendChild(Option);
			}
	var oCon9_sec=document.getElementsByClassName("con9_sec")[0];
	for(var i=0;i<=59;i++){
				var Option=document.createElement("option");
				Option.className="sec"+i;
				Option.innerHTML=i;
				Option.value=i;
				//console.log(Option);
				oCon9_sec.appendChild(Option);
			}
	var oCon9_man=document.getElementById("con9_man");
	for(var i=0;i<oCon9_man.length;i++){
		oCon9_man[i].onclick=function(){
			console.log(this.value);
			Sex=this.value;
		}
	}
	
	//男
	var oCon9_man=document.getElementById("con9_man");
	//女
	var oCon9_nv=document.getElementById("con9_nv");
	//年龄
	var oCon9_age=document.getElementById("con9_age");
	//距离
	var gumm=document.getElementsByClassName("gumm")[1];
	//性别
	var Sex=document.getElementsByClassName("jihua")[0];
	
	//var juli1=document.getElementById("juli1");
	var oCon9_but1=document.getElementsByClassName("con9-but1")[0];
	var oCon9_but2=document.getElementsByClassName("con9-but2")[0];
	var oCon9_ans1=document.getElementById("con9_ans1");
	var oCon9_ans2=document.getElementById("con9_ans2");
//	console.log("oCon9_ans1");
//	console.log("oCon9_but1");
//	console.log(juli1);
//	console.log(gumm);
//	console.log(Sex);
	//计算速度
	var dis=null;
	var age=null;
	var time=null;	
	//按钮重置
	oCon9_but2.onclick=function(){
		oCon9_age.value=null;
	}
	//按钮计算
	oCon9_but1.onclick=function(){
		
		var age=oCon9_age.value;
		var h=oCon9_hour.options[oCon9_hour.selectedIndex].value;
		var m=oCon9_min.options[oCon9_min.selectedIndex].value;
		var s=oCon9_sec.options[oCon9_sec.selectedIndex].value;
		dis=gumm.options[gumm.selectedIndex].value;
	    time=3600*h+60*m+(s-0);
	    console.log(h);
		console.log(m);
		console.log(s);
	    console.log(time);
	    console.log(age);
	    console.log(dis);
	    //console.log(speed);
	    //console.log(oCon9_man.checked);
	    if(oCon9_man.checked){
		if(age<=30){
			if(dis==5000){
				 if(time<=1140){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：19:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际级运动健将的水平，达标成绩为：13:31";
				 }else if(time>=1230&&time<1335){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：20:30";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：14:10";
				 }else if(time>=1335){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：22:15";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:基本达标成绩为：17:40";
				 }
				}
			if(dis==10000){
				if(time<=2640){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：44:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际健将的水平，达标成绩为：28:19";
				}
				else if(time>3000&&time<3360){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：50:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：34:00";
				}
				else if(time>=3360){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：56:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：37:00";
				}
			}
			if(dis==21097.5){
				if(time<=6600){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：1:50:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据";
				}
				else if(time>=6960&&time<7230){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：1:56:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据";
				}
				else if(time>=7230){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：2:02:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据";
				}
			}
			if(dis==42195){
				if(time<=13200){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：3:40:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际健将的水平，达标成绩为：2:13:00";
				}
				else if(time>=14400&&time<15600){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：4:00:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：2:20:00";
				}
				else if(time>=1560){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：4:20:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：2:34:00";
				}
			}
		}
			if(age>30){
				if(dis==5000){
				 if(time<=1230){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：20:30";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际级运动健将的水平，达标成绩为：13:31";
				 }else if(time>=1335&&time<1455){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：22:15";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：16:10";
				 }
				 else if(time>=1455){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：24:15";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：17:40";
				 }
				}
				if(dis==10000){
				 if(time<=3000){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：50:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际级运动健将的水平，达标成绩为：28:19";
				 }else if(time>=3360&&time<3780){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：56:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：34:00";
				 }
				 else if(time>=3780){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：1:03:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：37:00";
				 }
				}
				if(dis==21097.5){
				 if(time<=6960){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：1:56:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据。";
				 }else if(time>=7320&&time<7800){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：2:02:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据。";
				 }
				 else if(time>=7800){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：2:10:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据。";
				 }
				}
				if(dis==42195){
				 if(time<=14400){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：4:00:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际级运动健将的水平，达标成绩为：2:13:00";
				 }else if(time>=15600&&time<16800){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：4:20:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：3:10:00";
				 }
				 else if(time>=16800){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：4:40:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：4:00:00";
				 }
				 
				}
				
			}
		}
	    if(oCon9_nv.checked){
	    			if(age<=30){
			if(dis==5000){
				 if(time<=1140){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：19:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际级运动健将的水平，达标成绩为：13:31";
				 }else if(time>=1230&&time<1335){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：20:30";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：14:10";
				 }else if(time>=1335){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：22:15";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:基本达标成绩为：17:40";
				 }
				}
			if(dis==10000){
				if(time<=2640){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：44:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际健将的水平，达标成绩为：28:19";
				}
				else if(time>3000&&time<3360){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：50:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：34:00";
				}
				else if(time>=3360){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：56:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：37:00";
				}
			}
			if(dis==21097.5){
				if(time<=6600){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：1:50:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据";
				}
				else if(time>=6960&&time<7230){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：1:56:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据";
				}
				else if(time>=7230){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：2:02:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据";
				}
			}
			if(dis==42195){
				if(time<=13200){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：3:40:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际健将的水平，达标成绩为：2:13:00";
				}
				else if(time>=14400&&time<15600){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：4:00:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：2:20:00";
				}
				else if(time>=1560){
					oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：4:20:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：2:34:00";
				}
			}
		}
			if(age>30){
				if(dis==5000){
				 if(time<=1230){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：20:30";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际级运动健将的水平，达标成绩为：13:31";
				 }else if(time>=1335&&time<1455){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：22:15";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：16:10";
				 }
				 else if(time>=1455){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：24:15";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：17:40";
				 }
				}
				if(dis==10000){
				 if(time<=3000){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：50:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际级运动健将的水平，达标成绩为：28:19";
				 }else if(time>=3360&&time<3780){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：56:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：34:00";
				 }
				 else if(time>=3780){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：1:03:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：37:00";
				 }
				}
				if(dis==21097.5){
				 if(time<=6960){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：1:56:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据。";
				 }else if(time>=7320&&time<7800){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：2:02:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据。";
				 }
				 else if(time>=7800){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：2:10:00";
				 	oCon9_ans2.innerHTML="没有该级别专业运动员标准数据。";
				 }
				}
				if(dis==42195){
				 if(time<=14400){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为：4:00:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际级运动健将的水平，达标成绩为：2:13:00";
				 }else if(time>=15600&&time<16800){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为：4:20:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：3:10:00";
				 }
				 else if(time>=16800){
				 	oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为：4:40:00";
				 	oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：4:00:00";
				 }
				 
				}
				
			}
		}
	    
	}		
	   
	
	
		
	

	
	
	

//	
//	var oJuli1=document.getElementById("con9_juli1");
//	var oJuli2=document.getElementById("con9_juli2");
//	var oJuli3=document.getElementById("con9_juli3");
//	var oJuli4=document.getElementById("con9_juli4");
//	
//	
//	var oCon9_but2=document.getElementsByClassName("con9-but2")[0];
//	
//	
//	
//	oCon9_but1.onclick=function(){
//		var oCon_answer=document.getElementsByClassName("con9_answer")[0];
//		
//		var onvy=parseFloat(oCon9_age.value*0.4+oJuli1.value*0.3+oCon9_hour.value*0.5+oCon9_min.value*0.5+oCon9_sec*0.5).toFixed(2);
//		var onvz=parseFloat(oCon9_age.value*0.3+oJuli1.value*0.2+oCon9_hour.value*0.4+oCon9_min.value*0.4+oCon9_sec*0.4).toFixed(2);
//		
//		var oCon9_ans1=document.getElementById("con9_ans1");
//		var oCon9_ans2=document.getElementById("con9_ans2");
//		if(Sex=='con9_man'){
//			for(j=0;j>=19;j++){
//			oman=19;
//			oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):一级运动员的水平，达标成绩为:"+19.00;
//			}
//			else if(oman>19&&oman<=20.30){
//				oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):二级运动员的水平，达标成绩为:"+20.30;
//			}
//			else if(oman>20.30&&oman<=22.15){
//				oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(男子):三级运动员的水平，达标成绩为:"+22.15;
//			}
//			else if(oman>22.15){
//				oCon9_ans1.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准(男子)运动员的水平，基本达标成绩为："+omany;
//			}
//			for(j=0;j>=13.31;j++){
//				oman<=13.31
//				oCon9_ans2.innerHTML="您的成绩达到了(男子)专业:国际级运动健将的水平，达标成绩为:"+13.31;
//			}
//			else if(oman>=13.31&&oman<=14.10){
//				您的成绩达到了(男子)专业:一级运动员的水平，达标成绩为：14.10;
//			}
//			else if(oman>=14.10&&oman<=16.10){
//				您的成绩达到了(男子)专业:二级运动员的水平，达标成绩为：16.10;
//			}
//			else if(oman>=16.10&&oman<=17.14){
//				您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：17.14;
//			}
//			else if(oman>=17.14){
//				您的成绩达到了(男子)专业:三级运动员的水平，达标成绩为：omanz;
//			}
//			
//		}
//		if(Sex=='con9_nv'){
//			for(j=0;j>=24.45;j++){
//			onvy=24.45;
//			oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(女子):一级运动员的水平，达标成绩为:"+24.45;
//			}
//			else if(onvy>19&&onvy<=26.45){
//				oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(女子):二级运动员的水平，达标成绩为:"+26.45;
//			}
//			else if(onvy>26.45&&onvy<=29.00){
//				oCon9_ans1.innerHTML="您的成绩达到了全国田径业余锻炼等级标准(女子):三级运动员的水平，达标成绩为:"+29.00;
//			}
//			else if(onvy>29.00){
//				oCon9_ans1.innerHTML="您的成绩没有达到全国田径业余锻炼等级标准(女子)运动员的水平，基本达标成绩为："+onvy;
//			}
//			for(j=0;j>=15.30;j++){
//				onvz<=15.30
//				oCon9_ans2.innerHTML="您的成绩达到了(女子)专业:国际级运动健将的水平，达标成绩为:"+15.30;
//			}
//			else if(onvz>=15.30&&onvz<=17.10){
//				您的成绩达到了(女子)专业:一级运动员的水平，达标成绩为：17.10;
//			}
//			else if(onvz>=17.10&&onvz<=20.00){
//				您的成绩达到了(女子)专业:二级运动员的水平，达标成绩为：20.00;
//			}
//			else if(onvz>=20.00&&onvz<=23.00){
//				您的成绩达到了(女子)专业:三级运动员的水平，达标成绩为：23.00;
//			}
//			else if(onvz>=23.00){
//				您的成绩没有达到(女子)专业运动员的水平，基本达标成绩为：omanz;
//			}
//		    	
//		
//	}

			
			
			
			
			
			
			
			
			
			
			
