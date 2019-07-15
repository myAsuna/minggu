   var as=document.querySelectorAll("[trigger=g_tab]");
for(var a of as){
	a.onclick=function(){
		//this->a
		document.querySelector("#g_tab>li>.g_yaoguan").className="";
		document.querySelector("#g_container>div.g_show")
			.className="";
		this.className="g_yaoguan";
		var i=this.href.lastIndexOf("#");
		var id=this.href.slice(i);//#content1
		var div=document.querySelector(id);
		div.className="g_show";
	}
}