$(document).ready(function(){
	$("#recipe-grid").jqGrid({ 
	    url:'recipes.json',
		datatype: 'json',
		colNames:['Actions','Title','Content'],
		colModel :[ 
		    {name:'actions', width:60, fixed:true, sortable:false, resize:false, formatter: 'actions'},
			{name:'title', index:'title',editable:true}, 
			{name:'content', index:'content',editable:true}, 
		],
//    pager: '#pager',
    rowNum:10,
//    rowList:[10,20,30],
    sortname: 'title',
    sortorder: 'asc',
    viewrecords: true,
    caption: 'Recipe List',
	editurl: 'recipes/1/edit'
  });
});
