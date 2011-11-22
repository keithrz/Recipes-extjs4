$(document).ready(function(){
	$("#recipe-grid").jqGrid({ 
		//
		// specific to recipes
	    //
		url:'recipes.json',
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
    	caption: 'Recipe List',
		//TODO move 'recipe' string to recipe-specific code
		//     move rest of serializeRowData to boilerplate
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

		// TODO move 'recipes' string to recipe-specific code
		//      move rest of onSelectRow to boilerplate section
		onSelectRow: function(id) {
			if(id && id != this.prevId) {
				$(this).jqGrid('setGridParam', {editurl:'/recipes/' + id + '.json'});
				this.prevId=id;
			}
		},

		//
		//boilerplate for RoR, ajax
		//
		//TODO if creating 2nd grid, move all boilerplate to a common Obj
		datatype: 'json',
		jsonReader: {
			repeatitems: false
		},
		
		delOptions: {
			mtype: 'DELETE',
			ajaxDelOptions: {
				//contentType: 'application/json; charset=utf-8',

				// For successful PUTs and DELETEs, RoR returns a single whitespace
				// jQuery.ajaxConvert() does not like parsing the whitespace
				// this is a workaround
				dataFilter: function(responseData, dataType) {
					if(responseData.trim() == "") {
						return "";
					} else {
						return responseData;
					}
				}
			}				
		},
		//editOptions: {mtype: 'PUT'},
		
		ajaxRowOptions: { 
			//contentType: 'application/json; charset=utf-8',
			type: "PUT",
			dataFilter: function(responseData, dataType) {
				if(responseData.trim() == "") {
					return "";
				} else {
					return responseData;
				}
			}
		},
    	viewrecords: true
  	});
});
