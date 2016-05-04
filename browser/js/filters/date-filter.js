// var date = "2016-05-01T03:42:28.261Z";


app.filter('toDate', function() {
	return function (date) {
		var year = date[0] + date[1] + date[2] + date[3];
		var month;
		if (date[5] + date[6] === '01') month = 'January';
		if (date[5] + date[6] === '02') month = 'February';
		if (date[5] + date[6] === '03') month = 'March';
		if (date[5] + date[6] === '04') month = 'April';
		if (date[5] + date[6] === '05') month = 'May';
		if (date[5] + date[6] === '06') month = 'June';
		if (date[5] + date[6] === '07') month = 'July';
		if (date[5] + date[6] === '08') month = 'August';
		if (date[5] + date[6] === '09') month = 'September';
		if (date[5] + date[6] === '10') month = 'October';
		if (date[5] + date[6] === '11') month = 'November';
		if (date[5] + date[6] === '12') month = 'December';
		var day = date[8] + date[9];
		if (day[0] === '0') day = date[9];
		return month + ' ' + day + ', ' + year;
	};	
});

// make more ways of producing date & make it an npm package??