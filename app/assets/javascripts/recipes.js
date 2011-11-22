$(document).ready(function(){
	$("#recipe-grid").jqGrid({ 
	    url:'recipes.json',
		datatype: 'json',
		editmtype: 'PUT',
		jsonReader: {
			repeatitems: false
		},
		ajaxRowOptions: { 
//contentType: 'application/json; charset=utf-8',
			type: "PUT" 
		},
		serializeRowData: function(postData){
			var rootData = {};
			var recipeData = {};
			for(var key in postData) {
				// id should always be at root of the row Obj
				// oper is a jqGrid property (
				if(key == "id" || key == "oper") {
					rootData[key] = postData[key];
				} else {
					recipeData[key] = postData[key];
				}
			}
			rootData['recipe'] = recipeData;
			return rootData;
		},
		colNames:[
			'Actions',
			'Title',
			'Content'
		], 
		colModel :[ 
		    {name:'actions', width:60, fixed:true, sortable:false, resize:false, formatter: 'actions'},
			{name:'title', index:'title',editable:true}, 
			{name:'content', index:'content',editable:true,edittype:'textarea', editoptions:{rows:5, cols:20}}, 
		],
		pager: '#pager',
    	rowNum: 10,
    	rowList: [10,25,50,100],
    	sortname: 'title',
    	sortorder: 'asc',
    	viewrecords: true,
    	caption: 'Recipe List',
		onSelectRow: function(id) {
			if(id && id != this.prevId) {
				$(this).jqGrid('setGridParam', {editurl:'/recipes/' + id + '.json'});
				this.prevId=id;
			}
		}
  	});
});
