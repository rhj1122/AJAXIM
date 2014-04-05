function sendMsg(msgData){
	var formatTime = new Date();
		formatTime = formatTime.getHours() + ":" + formatTime.getMinutes();
	var data = {
		//用户ID，待修改
		user : "rhj",
		text : msgData,
		time : formatTime
	};

	$.ajax({
		type : "POST",
		url  : "server/msgServer.php",
		data : data,
		success : function(re){
			var data = null;
			if(typeof JSON != "undefined"){
				data = JSON.parse(decodeURIComponent(re));
			}else{
				data = eval("(" + decodeURIComponent(re) + ")");
			}
			$("#msgBox-textarea").val("");
			writeMsg(data, "self");
		},
		error: function(a,b,c){
			console.log(b);
		},
		complete: function(){
			console.log("请求完成");
		}
	});
}

function writeMsg(data, target){
	var tree = $("#msgBox-msgArea");
	var div = document.createElement("div");
		div.className = "single-msg";
	tree.append(div);
	
	var photoEle = document.createElement("div");
		$(photoEle).addClass("single-msg-photo");
	if(target == "self"){
		$(photoEle).addClass("fr");
	}
		
	//待修改
	$(photoEle).append('<img width="35" height="35" src="' + 'http://hdn.xnimg.cn/photos/hdn321/20110428/2030/tiny_lsqV_30850b019118.jpg' + '">');
	div.appendChild(photoEle);
	
	var textEle = document.createElement("div");
		$(textEle).addClass("single-msg-text");
	if(target == "them"){
		$(textEle).addClass("marL10-9hack");
	}
	var p = document.createElement("p");
		//待修改
		var datatext = data.text.replace(/<script>\w*(<\/script>)*/," {脚本被过滤} ");
		alert(datatext);
		$(p).text(datatext);
	textEle.appendChild(p);
	var span = document.createElement("span");
		span.className = "single-msg-time fr";
		span.innerHTML = data.time;
	textEle.appendChild(span);
	
	div.appendChild(textEle);
}

/*
<div class="single-msg">
	<div class="single-msg-photo fr">
		<img width="35" height="35" src="http://hdn.xnimg.cn/photos/hdn321/20110428/2030/tiny_lsqV_30850b019118.jpg">
	</div>
                    
	<div class="single-msg-text">
		<p>这里是消息的内容这里是消息的内容的内容这里是消息的内容这里是消息的内容这里是消息的内容</p>
		<span class="single-msg-time fr">16:42</span>
	</div>
</div>

<div class="single-msg">
    <div class="single-msg-photo">
        <img width="35" height="35" src="http://hdn.xnimg.cn/photos/hdn321/20110428/2030/tiny_lsqV_30850b019118.jpg">
    </div>
    
    <div class="single-msg-text marL10-9hack">
        <p>这里是消这里是消息的内容这里是消息的内容这里是消息的内容</p>
        <span class="single-msg-time fr">16:22</span>
    </div>
</div>
*/







