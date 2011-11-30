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
		serializeRowData: GridHelper.serializeData('recipe'),

		// TODO move 'recipes' string to recipe-specific code
		//      move rest of onSelectRow to boilerplate section
		onSelectRow: function(id) {
			if(id && id != this.prevId) {
				$(this).jqGrid('setGridParam', {editurl:'/recipes/' + id + '.json'});
				this.prevId=id;
			}
		},

		//
		//boilerplate for Rails, ajax
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
				dataFilter: GridHelper.trimEmptyResponse
			}				
		},

		ajaxRowOptions: { 
			//contentType: 'application/json; charset=utf-8',
			type: "PUT",
			dataFilter: GridHelper.trimEmptyResponse
		},
    	viewrecords: true
  	});

	$("#add-btn").click(function() { 
		$("#recipe-grid").editGridRow("new", { 
			mtype:'POST',
			closeAfterAdd:true,
			url: 'recipes.json',
			serializeEditData: GridHelper.serializeData('recipe')
	 	});
	});
});
