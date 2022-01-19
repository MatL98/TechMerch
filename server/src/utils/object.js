const helpers = {}

helpers.asPOJO = (obj) => {
	JSON.parse(JSON.stringify(obj))
},

helpers.renameField = (record, from, to) => {
		record[to] = record[from]
		delete record[from]
		return record 
	},

helpers.removeField = (record, field) => {
				const value = record[field]
				delete record[field]
				return value
		}


module.exports = helpers;