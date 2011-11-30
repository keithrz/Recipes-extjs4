var GridHelper = {
	serializeData: function(jsonRoot) {
		// returns a function that can be used for jqGrid methods:
		// serializeEditData
		// serializeGridData
		// ex.
		// $("#my-grid").jqGrid({ ...
		//   serializeRowData: GridHelper.serializeData('myObject'),
		//   ... )};
		return function(postData) {
			var rootData = {};
			var objectData = {};
			for(var key in postData) {
				// id should always be at root of the row Obj
				// oper is a jqGrid property
				if(key == "id" || key == "oper") {
					rootData[key] = postData[key];
				} else {
					objectData[key] = postData[key];
				}
			}
			rootData[jsonRoot] = objectData;
			return rootData;
		}
	},
	
	// For successful PUTs and DELETEs, Rails returns a single whitespace
	// jQuery.ajaxConvert() does not like parsing the whitespace
	// this is a workaround
	trimEmptyResponse: function(responseData, dataType) {
		if(responseData.trim() == "") {
			return "";
		} else {
			return responseData;
		}
	}
	
}