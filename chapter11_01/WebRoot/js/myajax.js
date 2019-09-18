function ajax(url,method,data,success,error){
	//创建XMLHttpRequest对象
	xmlHttpRequest=createXmlHttpRequest();
	//设定回调函数
	xmlHttpRequest.onreadystatechange=callback;
	//初始化请求
	if(method.toUpperCase()=="GET"){
		xmlHttpRequest.open("GET",url+"?"+data,true);
		//发送请求
		xmlHttpRequest.send(null);
	}else{
		xmlHttpRequest.open("POST",url,true);
		xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//发送请求
		xmlHttpRequest.send(data);
	}
	
	
	//回调函数
	function callback(){
		if(xmlHttpRequest.readyState==4){
			if(xmlHttpRequest.status==200){
				//响应正确完成
				success(xmlHttpRequest.responseText);
			}else if(xmlHttpRequest.status==404){
				//显示一句话，页面不存在。。。
			}else if(xmlHttpRequest.status==500){
				//显示一句话，服务器异常。。。
				error();
			}
		}else{
			//显示一个转圈的gif图
			//显示一句话，请求处理中。。。
		}
	}//end of callback()
}

//创建XMLhttpRequest对象
function createXmlHttpRequest(){
	if(window.XMLHttpRequest){	//火狐，chrome，新版IE
		return new XMLHttpRequest();
	}else{	//IE5/6
		return new ActiveXOBject("Microsoft.XMLHTTP");
	}
}