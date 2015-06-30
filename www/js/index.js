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

    	//Initialize the LANG array depending on the locale
    	LANG = {};
    	if (navigator != null && navigator.globalization != null) {   	
			navigator.globalization.getLocaleName(
					function (locale) { //If a valid locale exists then this will be executed
						if (locale.value == 'ro-RO') {
							LANG = LANG_RO;
						} else {
							LANG = LANG_EN;
						}
					},
					function () { //If a locale doesn't exists then this will be executed
						LANG = LANG_EN;
					}
			);
    	} else { //Hack to make the application work on PC too
			LANG = LANG_EN;
    	}
    	
    	//Hide views which are not the mainView
    	$("#busesView").hide();
    	$("#selectView").hide();
    	
    	//Set i18n for button labels
    	setTimeout(function() {    		
    		$("#btnToWork b").text(" " + LANG.btn_going_to_work);
    		$("#btnFromWork b").text(" " + LANG.btn_back_from_work);
    		$("#btnTimetable b").text(" " + LANG.btn_timetable);    	
    	}, 100);
    	
    	//Handler for clicking on btnToWork button 
    	$("#btnToWork").click(function() {
    		createBusesView(true);
    	});
    	
    	//Handler for clicking on btnFromWork button 
    	$("#btnFromWork").click(function() {
    		createBusesView(false);
    	});
    	
    	//Handler for clicking on btnTimetable button 
    	$("#btnTimetable").click(function() {
    		$("#btnToWorkMonThu b").text(" " + LANG.btn_to_work_mon_thu);
    		$("#btnToWorkFri b").text(" " + LANG.btn_to_work_fri);
    		$("#btnFromWorkMonThu b").text(" " + LANG.btn_from_work_mon_thu);
    		$("#btnFromWorkFri b").text(" " + LANG.btn_from_work_fri);
    		$("#mainView").hide();
    		$("#selectView").show();
    	});
    	
    	//Handler for clicking on btnToWorkMonThu button 
    	$("#btnToWorkMonThu").click(function() {
    		createBusesView(true, MON_THU);
    	});

    	//Handler for clicking on btnToWorkFri button 
    	$("#btnToWorkFri").click(function() {
    		createBusesView(true, FRIDAY);
    	});
    	
    	//Handler for clicking on btnFromWorkMonThu button 
    	$("#btnFromWorkMonThu").click(function() {
    		createBusesView(false, MON_THU);
    	});

    	//Handler for clicking on btnFromWorkFri button 
    	$("#btnFromWorkFri").click(function() {
    		createBusesView(false, FRIDAY);
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
 * Creates the buses view
 * @param isGoingToWork boolean
 * @param workDay [optional] FRIDAY or MON_THU
 */
function createBusesView(isGoingToWork, workDay) {
	$("#mainView").hide();
	$("#selectView").hide();
	$("#busesView .content").empty();
	$("#busesView").show();
	$("#busesView .content").append("<h4>" + LANG.label_main + "</h4>");
	
	var currentTime = null;
	if (workDay == null) { //if nor provided workDay needs to be calculated 
		var now = new Date();
		workDay = (now.getDay() == 5) ? FRIDAY : MON_THU;
		currentTime = now.getHourMinute();
	} else {		
		currentTime = "00:00";
	}
	var buses = getBuses(currentTime, isGoingToWork, workDay);
	var isApproximate = false;
	
	for ( var i = 0; i < buses.length; i++) {
		$("#busesView .content").append(createBusView(buses[i]));
		if (! isApproximate && buses[i].isApproximate) {
			isApproximate = true
		}
	} 
	
	if (isApproximate) {
		$("#busesView .content").append("<h4>" + LANG.label_approximate + "</h4>");
	}
}

/**
 * Creates a bus view well (widget)
 * @param bus Object
 */
function createBusView(bus) {
	var main = document.createElement("div");
	main.className = "well well-sm marginBtmSmall"; 
	
	var table = document.createElement("table");
	var tr = document.createElement("tr");
	
	var tdTime = document.createElement("td");
	tdTime.className = "busTime"
	tdTime.innerHTML = bus.time;	
	tr.appendChild(tdTime);
	
	var tdImg = document.createElement("td");
	var img = document.createElement("img");
	img.src = (bus.busType == BIG_BUS) ? "img/big_bus.png" : "img/mini_bus.png";
	tdImg.appendChild(img);
	tr.appendChild(tdImg);
	
	var tdLegend = document.createElement("td");
	tdLegend.className = "busLegend";
	tdLegend.innerHTML = LANG.legend_part_1 + " " + bus.startStation + " " + LANG.legend_part_2 + " " + bus.endStation 
							+ (bus.isApproximate ? " *" : "");	
	tr.appendChild(tdLegend);
		
	table.appendChild(tr);
	main.appendChild(table);
	
	return main;
}

/**
 * navigates back or exists the application
 */
function goBack() {
	if ($("#mainView").is(":visible")) { //pressing back on mainView results in killing the application
		navigator.app.exitApp();
	}
	
	if ($("#busesView").is(":visible")) { //busesView is the child of mainView
		$("#busesView").hide();
		$("#mainView").show();
	}
	
	if ($("#selectView").is(":visible")) { //selectView is the child of mainView
		$("#selectView").hide();
		$("#mainView").show();
	}
}

/**
 * add method 
 */
Date.prototype.getHourMinute = function()
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
}