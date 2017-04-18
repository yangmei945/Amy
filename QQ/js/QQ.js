$(function(){
	/*底部菜单选项卡切换*/
	$(".menu>li>a").bind("click", function(){
		$(".search_linkman").hide();
		$(this).children("em").addClass("ch").parent().parent().siblings().children("a").children("em").removeClass("ch");
		$(".main>ul").eq($(this).parent("li").index()).show().siblings().hide();
		$(this).addClass("select").parent().siblings().children("a").removeClass("select");
	});
	/*会话*/
	$(".menu>li:nth-child(1)>a").bind("click", function(){
		$(".topic_name").text("会话");
	});
	/*联系人*/
	$(".menu>li:nth-child(2)>a").bind("click", function(){
		$(".search_linkman").show();
		$(".topic_name").text("联系人");
	});
	var linkmanFlag	= false;
	$(".linkman_group").bind("click", function(){
		if(linkmanFlag){
			$(this).siblings(".linkman_list").hide();
			linkmanFlag	= false;
		}
		else{
			$(this).siblings(".linkman_list").show();
			linkmanFlag	= true;
		}
	});
	$(".linkman_title>ul>li").bind("click", function(){
		$(this).addClass("linkman_title_css").siblings().removeClass("linkman_title_css");
		$(".linkman>li").eq(($(this).index())+1).show().siblings().hide();
		$(".linkman_title").show();
	});
	/*发现*/
	$(".menu>li:nth-child(3)>a").bind("click", function(){
		$(".topic_name").text("发现");
	});
	/*设置*/
	$(".menu>li:nth-child(4)>a").bind("click", function(){
		$(".topic_name").text("设置");
	});
	var settingStateFlag	= false;
	$(".setting_state").bind("click", function(){
		if(settingStateFlag){
			$(".setting_state_list").hide();
			settingStateFlag	= false;
		}
		else{
			$(".setting_state_list").show();
			settingStateFlag	= true;
		}
	});
	var aboutQQFlag	= false;
	$(".about_qq").bind("click", function(){
		if(aboutQQFlag){
			$(".about_qq_list").hide();
			aboutQQFlag	= false;
		}
		else{
			$(".about_qq_list").show();
			aboutQQFlag	= true;
		}
	});
	/*修改状态*/
	$(".setting_state_list>li>a").bind("click", function(){
		switch($(this).children("i").attr("state")){
			case "online":
				$(".setting_state>i").addClass("state_online").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_offline");
				$(".top .photo .state").addClass("state_online").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_offline");
				break;
			case "Qme":
				$(".setting_state>i").addClass("state_Qme").removeClass("state_online")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_offline");
				$(".top .photo .state").addClass("state_Qme").removeClass("state_online")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_offline");
				break;
			case "leave":
				$(".setting_state>i").addClass("state_leave").removeClass("state_Qme")
				.removeClass("state_online").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_offline");
				$(".top .photo .state").addClass("state_leave").removeClass("state_Qme")
				.removeClass("state_online").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_offline");
				break;
			case "busy":
				$(".setting_state>i").addClass("state_busy").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_online").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_offline");
				$(".top .photo .state").addClass("state_busy").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_online").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_offline");
				break;
			case "silence":
				$(".setting_state>i").addClass("state_silence").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_online")
				.removeClass("state_hide").removeClass("state_offline");
				$(".top .photo .state").addClass("state_silence").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_online")
				.removeClass("state_hide").removeClass("state_offline");
				break;
			case "hide":
				$(".setting_state>i").addClass("state_hide").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_online").removeClass("state_offline");
				$(".top .photo .state").addClass("state_hide").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_online").removeClass("state_offline");
				break;
			case "offline":
				$(".setting_state>i").addClass("state_offline").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_online");
				$(".top .photo .state").addClass("state_offline").removeClass("state_Qme")
				.removeClass("state_leave").removeClass("state_busy").removeClass("state_silence")
				.removeClass("state_hide").removeClass("state_online");
				break;
		}
	});
	
	/*对话框*/
	var identity	= null;
	function showSessionPopbox(ele){
		$(".session_popbox").show();
		$(".popbox_detail").hide();
		$(".wrap_emoji").hide();
		$(".popbox_content").css({"height":"618px"});
		$(".me").html("");
		$(".session_popbox .popbox_name").text(ele.children(".txt").children("p:first-child").text());
		identity	= ele.attr("identity");
	}
	function showDetail(){
		switch(identity){
			case "mass":
				$(".popbox_detail>.mass").show().siblings().hide();
				break;
			case "group":
				$(".popbox_detail>.group").show().siblings().hide();
				break;
			case "person":
				$(".popbox_detail>.person").show().siblings().hide();
				break;
		}
	}
	$(".session>li>a").bind("click", function(){
		showSessionPopbox($(this));
		identity	= $(this).attr("identity");
		showDetail();
	});
	$(".linkman_list>li>a").bind("click", function(){
		showSessionPopbox($(this));
		identity	= $(this).attr("identity");
		showDetail();
	});
	var detailFlag	= false;
	$(".detail_btn").bind("click", function(){
		if(detailFlag){
			$(".popbox_detail").hide();
			detailFlag	= false;
		}
		else{
			$(".popbox_detail").show();
			detailFlag	= true;
			showDetail();
		}
	});
	$(".close_btn").bind("click", function(){
		$(".session_popbox").hide();
	});
	
	/*表情*/
	var es	= 0;
	var emojiFlag	= false;
	$(".emoji_btn").bind("click", function(){
		if(emojiFlag){
			$(".wrap_emoji").hide();
			$(".popbox_content").height(618);
			emojiFlag	= false;
		}
		else{
			$(".wrap_emoji").show();
			$(".popbox_content").height(308);
			emojiFlag	= true;
			es	= 0;
			$(".emoji>table").removeClass("in").removeClass("out");
			$(".emoji>table").eq(es).removeClass("in").removeClass("out").addClass("show");
			$(".emoji_tabs>span").eq(es).addClass("eh").siblings().removeClass("eh");
		}
	});
	/*表情列表切换*/
	$(".emoji_tabs>span").bind("click", function(){
		$(this).addClass("eh").siblings().removeClass("eh");
		$(".emoji>table").eq(es).addClass("out").removeClass("show");
		$(".emoji>table").eq($(this).index()).addClass("in").removeClass("out").removeClass("show");
		es	= $(this).index();
		$(".emoji>table").eq($(this).index()).siblings().addClass("ready").removeClass("in").removeClass("show");
	});
	/*资料框*/
	$(".mass, .group, .person").children("li:last-child").click(function(){
		$(".session_popbox").hide();
		$(".information").show();
		$(".who").text($(".popbox_name").text());
	});
	$(".information .who").click(function(){
		$(".session_popbox").show().children(".popbox_name").text($(".who").text());
		$(".information").hide();
	});
	/*聊天记录*/
	$(".chat_records").click(function(){
		$(".records").show();
	});
	$(".records .back").click(function(){
		$(".records").hide();
	});
	/*成员*/
	$(".mass, .group").children("li:first-child").click(function(){
		$(".session_popbox").hide();
		$(".member").show();
	});
	$(".member .back").click(function(){
		$(".member").hide();
		$(".session_popbox").show();
	});
	
	/*发送信息*/
	function switchEmoji(){
		var emojiName	= ["[微笑]","[撇嘴]","[色]","[发呆]","[得意]","[流泪]","[害羞]","[闭嘴]","[睡]","[大哭]","[尴尬]","[发怒]","[调皮]","[呲牙]","[惊讶]","[难过]","[酷]","[冷汗]","[抓狂]","[吐]",
							"[偷笑]","[可爱]","[白眼]","[傲慢]","[饥饿]","[困]","[惊恐]","[流汗]","[憨笑]","[大兵]","[奋斗]","[咒骂]","[疑问]","[嘘]","[晕]","[折磨]","[衰]","[骷髅]","[敲打]","[再见]",
							"[擦汗]","[抠鼻]","[鼓掌]","[糗大了]","[坏笑]","[左哼哼]","[右哼哼]","[哈欠]","[鄙视]","[委屈]","[快哭了]","[阴险]","[亲亲]","[吓]","[可怜]","[菜刀]","[啤酒]","[咖啡]","[饭]","[猪头]",
							"[玫瑰]","[凋谢]","[示爱]","[爱心]","[心碎]","[蛋糕]","[闪电]","[炸弹]","[刀]","[足球]","[瓢虫]","[便便]","[拥抱]","[强]","[弱]","[握手]","[胜利]","[抱拳]","[勾引]","[拳头]",
							"[差劲]","[爱你]","[NO]","[OK]","[跳跳]","[发抖]","[怄火]","[磕头]","[回头]","[激动]","[街舞]","[呵呵]","[哈哈]","[吐舌]","[啊]","[酷]","[怒]","[开心]","[汗]","[泪]",
							"[黑线]","[鄙视]","[不高兴]","[真棒]","[钱]","[疑问]","[阴脸]","[吐]","[咦]","[委屈]","[花心]","[呼~]","[笑脸]","[冷]","[太开心]","[滑稽]","[勉强]","[狂汗]","[乖]","[睡觉]"];
		var str	= $("#input_txt").val();
		var b1="<img src='img/emoji/";
		var b2=".gif' />";
		for(var i=0;i<emojiName.length;i++){
			while(str.indexOf(emojiName[i])!=-1){
				str=str.replace(emojiName[i],b1+parseInt(i+1)+b2);
			}
		}
		return str;
	}
	function sendMessage(str){
		var li	= document.createElement("li");
		var div	= document.createElement("div");
		div.className	= "me_talk";
		div.innerHTML	= str;
		var img	= document.createElement("img");
		img.src	= "img/common/g.jpg";
		img.className	= "me_photo";
		li.appendChild(div);
		li.appendChild(img);
		$(".popbox_content .me").append(li);
		$('#input_txt').val("");
	}
	$(".send").click(function(){
		sendMessage(switchEmoji());
	});
	document.onkeydown = function (e) {  
	    if (!e) e = window.event;  
	    if ((e.keyCode || e.which) == 13) {  
	        sendMessage(switchEmoji());
	    }  
	}  
	document.onkeyup = function (e) {  
	    if (!e) e = window.event;  
	    if ((e.keyCode || e.which) == 13) {  
	        $('#input_txt').val("");
	    }  
	}  
	/*发送表情*/
	$(".emoji a").click(function(){
		if($(this).children("img").attr("title")!="delKey"){
			var txt	= $("#input_txt").val()+"["+$(this).children("img").attr("title")+"]";
			$("#input_txt").val(txt);
		}
		else{
			var tempStr	= $("#input_txt").val();
			$("#input_txt").val(tempStr.replace(tempStr.substr(tempStr.lastIndexOf('[')), ""));
		}
	});
	/*消息设置*/
	$(".ms").click(function(){
		$(".info_setting").show();
	});
	$(".info_setting .back").click(function(){
		$(".info_setting").hide();
	});
	var seton	= false;
	$(".setting_switch").click(function(){
		if(seton){
			$(this).removeClass("switch_on").children("span").removeClass("son");
			seton	= false;
		}
		else{
			$(this).addClass("switch_on").children("span").addClass("son");
			seton	= true;
		}
	});
});
