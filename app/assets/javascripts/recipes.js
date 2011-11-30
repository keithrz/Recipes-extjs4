$(document).ready(function(){
	$("#recipe-grid").jqGrid($.extend({ 
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
		}
  	}, GridOptions));

	$("#add-btn").click(function() { 
		$("#recipe-grid").editGridRow("new", { 
			mtype:'POST',
			closeAfterAdd:true,
			url: 'recipes.json',
			serializeEditData: GridHelper.serializeData('recipe')
	 	});
	});
});
