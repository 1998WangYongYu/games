define(["/HBuilderProjects/require/tableSev.js"],function(data){
	function User(){
			this.getList=function(){
				return data;
			}
			this.deleList=function(id){
				data.forEach(function(item,index){
					if(item.userId==id){
						data.splice(index,1);
					}
				})
			}
			this.addList=function(obj){
				data.push(obj);
			}
	}
	var user=new User();
	return user;
})