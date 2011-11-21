$(document).ready(function(){
	$("#recipe-tabs").tabs();
	
	$("#recipe-grid").jqGrid({ 
	    url:'recipes.json',
		datatype: 'json',
		colNames:['Title','Content'],
		colModel :[ 	    
			{name:'title', index:'title'}, 
			{name:'content', index:'content'}, 
		],
//    pager: '#pager',
    rowNum:10,
//    rowList:[10,20,30],
    sortname: 'title',
    sortorder: 'asc',
    viewrecords: true,
    caption: 'Recipe List'
  });
});
