//	正则验证
function checkUname() {
  var xhr = createXhr();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = xhr.responseText;
      $("s-uname").innerHTML = res;
    }
  }
  var uname = $("uname").value;
  xhr.open("get", "./data/02-checkUname.php?uname=" + uname,true);
  xhr.send(null);
}

function checkUpwd() {
  //获取密码框的值，判断值不能为空
  var check = false;
  var upwd = $("upwd").value;
  if (upwd == "") {
    $("s-upwd").innerHTML = "用户密码不能为空";
	check=false;
  } else {
    $("s-upwd").innerHTML = "通过";
	check=true;
  }
  return check;
}

//验证两次密码是否一致
function checkCpwd() {
  var check = false;
  var upwd = $("upwd").value;
  var cpwd = $("cpwd").value;
  if (upwd == cpwd) {
    $("s-cpwd").innerHTML = "通过";
	check=true;
  } else {
    $("s-cpwd").innerHTML = "两次密码不一致";
	check=false;
  }
  return check;
}

function check() {
	var check = checkUpwd() && checkCpwd();
	return check;
 
}


//点击注册按钮触发
// $("div>:checkbox").click(function(){
//	  var $chb=$(this);
//	  if($chb.is(":checked"))
//	   $("div>:disabled").prop("disabled",false);
//	    else
//		 $("button:not(:checkbox)")
//		  .prop("disabled",true)
//	 })



//			智能检测
 var vm = new Vue({
   el: '#z_app',
   data: {
     isAgree: true,
     z_uname: '',
     z_unameMsg: '输入手机号',
     //用字符串来绑定class
     /*unameClass: 'label label-default',*/
     //用object来绑定class
     z_unameClassObj: {
       label: true,
       //          'label-default': true,
       //          'label-success': false,
       //          'label-danger': false,
     },
     //密码
     z_upwd: '',
     z_upwdMsg: '输入你密码',
     //用字符串来绑定class
     /*unameClass: 'label label-default',*/
     //用object来绑定class
     z_upwdClassObj: {
       label: true,
       //          'label-default': true,
       //          'label-success': false,
       //          'label-danger': false,
     }
   },
   watch: {
     z_uname() {
       if (this.z_uname.length <= 10) {
         this.z_unameMsg = '手机号短了';
         //            this.z_unameClassObj['label-default']=false;
         //            this.z_unameClassObj['label-danger']=true;
         //            this.z_unameClassObj['label-success']=false;
       } else if (this.z_uname.length > 11) {
         this.z_unameMsg = '手机号长了';
         //            this.z_unameClassObj['label-default']=false;
         //            this.z_unameClassObj['label-danger']=true;
         //            this.z_unameClassObj['label-success']=false;
       } else {
         this.z_unameMsg = '手机号合法'
         //            this.z_unameClassObj['label-default']=false;
         //            this.z_unameClassObj['label-danger']=false;
         //            this.z_unameClassObj['label-success']=true;
       }
     },
     //             密码
     z_upwd() {
       if (this.z_upwd.length <= 5) {
         this.z_upwdMsg = '你密码短了';
         //            this.z_upwdClassObj['label-default']=false;
         //            this.z_upwdClassObj['label-danger']=true;
         //            this.z_upwdClassObj['label-success']=false;
       } else if (this.z_upwd.length > 16) {
         this.z_upwdMsg = '你密码长了';
         //            this.z_upwdClassObj['label-default']=false;
         //            this.z_upwdClassObj['label-danger']=true;
         //            this.z_upwdClassObj['label-success']=false;
       } else {
         this.z_upwdMsg = '你密码合法'
         //            this.z_upwdClassObj['label-default']=false;
         //            this.z_upwdClassObj['label-danger']=false;
         //            this.z_upwdClassObj['label-success']=true;
       }
     },
   }
 })

