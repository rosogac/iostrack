var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('backbutton', this.onBackButton, true);
        document.addEventListener('resume', this.onResume, true);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    	
    	//Hide not needed elements
//    	$("#checkInToast").hide();
    	
    	//If a check in was made today transform the checkIn button to a check out button
    	var now = new Date();
    	if (localStorage.getItem(now.getYmd()) != null) {
    		checkInToCheckOut();
    	}
    	
    	//Handler for clicking on btnToWork button 
    	$("#btnCheckIn").click(function() {
    		checkIn();
    	});
    	
    	//Handler for clicking on btnDetails button 
    	$("#btnDetails").click(function() {
    		showDetailsView();
    	});

    	//Handler for clicking on btnBack button 
    	$(".btnBack").click(function() {
    		goBack();
    	});
    	
    },
    
    // back button Event Handler
    //
    onBackButton: function() {   	
    	goBack();
    },
    
    // resume event handler
    //
    onResume: function() {
		$("#busesView").hide();
		$("#selectView").hide();
		$("#mainView").show();
    },
};

/**
 * Check in work for today. Persists either start time or end time
 */
function checkIn() {
	
	var now = new Date();
	var currentTime = now.getHm();
	var currentDay = now.getYmd();
	
	if (localStorage.getItem(currentDay) == null) {
		localStorage.setItem(currentDay, currentTime);
	} else {
		var timeline = localStorage.getItem(currentDay).split(",");
		var startTime = timeline[0];
		localStorage.setItem(currentDay, startTime + "," + currentTime);
	}

	//Create a confirmation toast
	$("#checkInToast").html("Checkin registered at " + currentTime);
	$("#checkInToast").css("visibility", "visible");
	setTimeout(function() {
		$("#checkInToast").css("visibility", "hidden");
	}, 1500);
	
	//Transform the check in button to a checkout button
	checkInToCheckOut();
}

/**
 * Displays the details view with data for the current month
 * @param: month - if null the current month will be displayed,
 * else the provided month is displayed if it has any values registered
 */
function showDetailsView(month, year) {
	$("#mainView").hide();
	$("#detailsView").show();
	
	//If month is null get the current month
	if (month == null || year == null) {
		var now = new Date();
		month = now.getMonth() + 1; //getMonth() is zero based
		month = (month < 10) ? "0" + month : month.toString();
		year = now.getFullYear();
	}
	
	//Clear old entries from the details table 
//	$("#detailsTable tbody").empty();
	
	//Iterate all days in the month and display values in the detailsTable
	for (var i=1; i<=31; i++) {
		var day = (i < 10) ? "0" + i : i.toString();
		var ymd = year + month + day;
		var item = localStorage.getItem(ymd); 
		if (item != null) {
			var hours = item.split(",");
			if (hours.length <= 2) { //There is only a check in time and no check out time
				
				var row = createDetailsRow(new Date(year + '-' + month + '-' + day + 'T00:00:00.000Z'),
						hours[0], hours[1]);
				
				$("#detailsTable").append(row);
			}
//			else  { //There is a check in time and a check out time present
//TODO handle time frames				
//			}
		}
	}
}

/**
 * creates a row in the details table
 */
function createDetailsRow(date, startTime, endTime) {
	
	var row = '<td>' + date.getDate() + '</td>';
	row += '<td>' + date.getDayName() + '</td>';
	row += '<td>' + startTime + '</td>';
	row += '<td>' + (endTime != null ? endTime : '') + '</td>';
	row += '<td>dif</td>';
	
	return '<tr>' + row + '</tr>';
}

/**
 * navigates back or exists the application
 */
function goBack() {
	if ($("#mainView").is(":visible")) { //pressing back on mainView results in killing the application
		navigator.app.exitApp();
	}
	
	if ($("#detailsView").is(":visible")) { //detailsView is the child of mainView
		$("#detailsView").hide();
		$("#mainView").show();
	}
	
	if ($("#settingsView").is(":visible")) { //settingsView is the child of mainView
		$("#settingsView").hide();
		$("#mainView").show();
	}
}

/**
 * Transforms the checkIn button to a check out button
 * by changing the background to red and the text to check out 
 */
function checkInToCheckOut() {
	$("#btnCheckIn").removeClass("btn-danger");
	$("#btnCheckIn b").text("Check out");
	$("#btnCheckIn").addClass("btn-success");    		
}