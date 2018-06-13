require.config({
	baseUrl:"/HBuilderProjects/require",
	paths:{
		index1:"index1",
		easy:"easy.templatejs",
	}
})

define(["index1","easy"],function(user,Et){
	function AddList(){
		this.addList=function(){
			var u="u0";
			var cnt=11;
			$("#add").click(function(){
				var obj={};
				var username=$("#userName").val();
				var userage=$("#userAge").val();
				var useradd=$("#userAdd").val();
					obj.userId=u+cnt;
					obj.userName=username;
					obj.userAge=userage;
					obj.userAdd=useradd;
					user.addList(obj);
				$("#test").remove();
				var html=$("#table").html();
				var data=user.getList();
				var res=Et.template(html,{"list":data});
				document.querySelector("fieldset").innerHTML=res;
				cnt++;
			})
		}
	}
	var addList=new AddList();
	return addList;
})