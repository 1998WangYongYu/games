require.config({
	baseUrl:"/HBuilderProjects/require",
	paths:{
		index1:"index1",
		easy:"easy.templatejs",
		del:"delete",
		add:"add",
	}
})
require(["index1","easy","del","add"],function(user,Et,del,add){
	console.log(data);
	var html=$("#table").html();
	var data=user.getList();
	var res=Et.template(html,{"list":data});
	document.querySelector("fieldset").innerHTML=res;
	del.deleList();
	add.addList();
})