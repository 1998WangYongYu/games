require.config({
	baseUrl:"/HBuilderProjects/require",
	paths:{
		index1:"index1",
		easy:"easy.templatejs",
	}
})

define(["index1","easy"],function(user,Et){
	function Delete(){
		this.deleList=function(){
			$("fieldset").on("click","a",function(){
				var id=$(this).attr("id");
				console.log($(this).attr("id"))
				user.deleList(id);
				
				$("#test").remove();
				var html=$("#table").html();
				var data=user.getList();
				var res=Et.template(html,{"list":data});
				document.querySelector("fieldset").innerHTML=res;
			})
		}
	}
	var deleList=new Delete();
	return deleList;
})