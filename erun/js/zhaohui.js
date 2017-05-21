window.onload=function(){
		var odi=document.getElementById('distance');
		var owe=document.getElementById('weight');
		var obtn1=document.getElementById('btn2');
		var obtn=document.getElementById('btn');
		var oji=document.getElementById('jieguo');
					      
		obtn1.onclick=function(){
		var mun=(odi.value*owe.value*1.036).toFixed(1);
				if(odi.value.length>0 && owe.value.length>0){
				oji.innerHTML="您消耗了"+mun+"千卡kcal";
				}else{
					  oji.style.display='inline-block';
				 }
			  }
			obtn.onclick=function(){
					odi.value='';
					owe.value='';
					oji.innerHTML=''
			    }
			}

			