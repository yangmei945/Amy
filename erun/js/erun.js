/*write by 杨梅*/
$(function(){
	$(".menu li").bind("click", function(){
		$(".content>div").eq($(this).index()).show().siblings().hide();
		$(this).addClass("kua").siblings().removeClass("kua");
	});
	/*配速计算器*/
	var con1_submit	= document.getElementById("con1_submit");
	con1_submit.onclick = function(){
		var con1_m	= document.getElementById("con1_m");
		var con1_t_hour	= document.getElementById("con1_t_hour");
		var con1_t_minute	= document.getElementById("con1_t_minute");
		var con1_t_second	= document.getElementById("con1_t_second");
		var con1_s_minute	= document.getElementById("con1_s_minute");
		var con1_s_second	= document.getElementById("con1_s_second");
		/*计算速度*/
		if(con1_m.value.length>0&&(con1_t_minute.value.length>0||con1_t_second.value.length>0)){
			var m	= Number(con1_m.value);
			var t	= Number(con1_t_hour.value)*3600+Number(con1_t_minute.value)*60+Number(con1_t_second.value);
			var s	= t/m;
			if(s<60){
				con1_s_second.value	= Math.round(s);
			}
			else{
				con1_s_minute.value	= parseInt(s/60);
				con1_s_second.value	= s%60;
			}
		}
		/*计算距离*/
		else if(con1_m.value.length==0&&(con1_t_minute.value.length>0||con1_t_second.value.length>0)&&(con1_s_minute.value.length>0||con1_s_second.value.length>0)){
			var t	= Number(con1_t_hour.value)*3600+Number(con1_t_minute.value)*60+Number(con1_t_second.value);
			var s	= Number(con1_s_minute.value)*60+Number(con1_s_second.value);
			var m	= t/s;
			con1_m.value	= m.toFixed(2);
		}
		/*计算时间*/
		else if(con1_m.value.length>0&&(con1_s_minute.value.length>0||con1_s_second.value.length>0)){
			var m	= Number(con1_m.value);
			var s	= Number(con1_s_minute.value)*60+Number(con1_s_second.value);
			var t	= m*s;
			con1_t_hour.value	= parseInt(t/3600);
			con1_t_minute.value	= parseInt((t%3600)/60);
			con1_t_second.value	= ((t%3600)%60).toFixed(2);
		}
	}
	var con1_reset	= document.getElementById("con1_reset");
	con1_reset.onclick	= function(){
		var con1_m	= document.getElementById("con1_m");
		var con1_t_hour	= document.getElementById("con1_t_hour");
		var con1_t_minute	= document.getElementById("con1_t_minute");
		var con1_t_second	= document.getElementById("con1_t_second");
		var con1_s_minute	= document.getElementById("con1_s_minute");
		var con1_s_second	= document.getElementById("con1_s_second");
		con1_m.value	= "";
		con1_t_hour.value	= 0;
		con1_t_minute.value	= "";
		con1_t_second.value	= "";
		con1_s_minute.value	= "";
		con1_s_second.value	= "";
	}
	/*配速转换器*/
	$(".con2 .left>.but1").bind('click',function(){
		var method1_minute	= $("#con2_input1");
		var method1_second	= $("#con2_input2");
		var method2	= $("#con2_input3");
		var method3	= $("#con2_input4");
		/*方法一转换成二三*/
		if(method1_minute.val().length>0||method1_second.val().length>0){
			var method1	= method1_minute.val()*60+method1_second.val();
			method2.val((1/(method1/3600)).toFixed(2));
			method3.val((1/method1*1000).toFixed(2));
		}
		/*方法二转换成一三*/
		else if(method1_minute.val().length==0&&method1_second.val().length==0&&method2.val().length>0){
			var method1	= ((1/method2.val()).toFixed(2))*3600;
			method1_minute.val((method1/60).toFixed(2));
			method1_second.val((method1%60).toFixed(2));
			method3.val((method2.val()*1000/3600).toFixed(2));
		}
		/*方式三转换成一二*/
		else if(method1_minute.val().length==0&&method1_second.val().length==0&&method2.val().length==0&&method3.val()>0){
			var method1	= (1/method3.val()/1000).toFixed(2);
			method1_minute.val((method1/60).toFixed(2));
			method1_second.val((method1%60).toFixed(2));
			method2.val((method3.val()/1000/3600).toFixed(2));
		}
	});
	$(".con2 .left>.but2").bind('click',function(){
		$("#con2_input1").val("");
		$("#con2_input2").val("");
		$("#con2_input3").val("");
		$("#con2_input4").val("");
	});
	/*完跑计算器*/
	for(var i=0;i<=24;i++){
		var con3_option	= document.createElement("option");
		con3_option.value	= i;
		con3_option.innerHTML	= i;
		$("#con3_hour").append(con3_option)
	}
	for(var i=0;i<=59;i++){
		var con3_option	= document.createElement("option");
		con3_option.value	= i;
		con3_option.innerHTML	= i;
		$("#con3_minute").append(con3_option);
	}
	for(var i=0;i<=59;i++){
		var con3_option	= document.createElement("option");
		con3_option.value	= i;
		con3_option.innerHTML	= i;
		$("#con3_second").append(con3_option);
	}
	$("#con3_submit").bind("click",function(){
		var con3_t	= Number($("#con3_hour").val())*3600+Number($("#con3_minute").val())*60+Number($("#con3_second").val());
		var con3_s	= Number($("#con3_input1").val())/con3_t;
		var con3_finish_t	= (Number($("#con3_input2").val())/con3_s).toFixed(2);
		document.getElementsByClassName("con3")[0].getElementsByClassName("jiegou")[0].innerHTML	= "完成的时间是："+parseInt(con3_finish_t/3600)+"时"+parseInt(con3_finish_t%3600/60)+"分"+parseInt(con3_finish_t%3600%60)+"秒";
	});
	$("#con3_reset").bind("click",function(){
		$("#con3_input1").val("");
		$("#con3_input2").val("");
		$("#con3_hour").val("");
		$("#con3_minute").val("");
		$("#con3_second").val("");
	});
});
