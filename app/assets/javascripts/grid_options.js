//
//boilerplate options for Rails REST
//
var GridOptions = {
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
}