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
	if (month == null || year = null) {
		var now = new Date();
		month = now.getMonth() + 1; //getMonth() is zero based
		year = now.getYear();
	}
	
	//Iterate all days in the month and display values in the detailsTable
	for (var i=1; i<=31; i++) {
		var day = (i < 10) ? "0" + i : i.toString();
		var ymd = year + month + day;
		var item = localStorage.getItem(ymd); 
		if (item != null) {
			var hours = item.split(",");
			if (hours.length == 2) {
				
			}
		}
	}
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

/**
 * add method getHm which returns the time in hh:mm format to Date objects
 */
Date.prototype.getHm = function()
{
    var hh = this.getHours();
    if (hh < 10)
    {
    	hh = "0" + hh.toString();
    }
    else
    {
    	hh = hh.toString();
    }
    
    var mm = this.getMinutes();
    if (mm < 10)
    {
    	mm = "0" + mm.toString();
    }
    else
    {
    	mm = mm.toString();
    }
    
    return hh + ":" + mm;
};

/**
 * add method getYmd which returns the date in yyyymmdd format to Date objects
 */
Date.prototype.getYmd = function() {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = this.getDate().toString();
	return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]); // padding
};