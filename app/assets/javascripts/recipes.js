$(document).ready(function(){
	$("#recipe-grid").jqGrid({ 
	    url:'recipes.json',
		datatype: 'json',
		editmtype: 'PUT',
		jsonReader: {
			repeatitems: false
		},
		ajaxRowOptions: { 
//			contentType: "application/json",
			type: "PUT" 
		},
		colNames:[
			'Actions',
			'Title',
			'Content'
		], 
		colModel :[ 
		    {name:'actions', width:60, fixed:true, sortable:false, resize:false, formatter: 'actions'},
			{name:'title', index:'title',editable:true}, 
			{name:'content', index:'content',editable:true}, 
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
