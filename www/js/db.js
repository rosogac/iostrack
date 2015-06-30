/**
 * Database for the buses
 */

/*** Create arrays for all available buses ***/

//Buses to work MON-THU
toWorkMonThu = [
  {time : "06:40", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "07:05", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "07:30", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "07:45", workDay : MON_THU, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "08:00", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},			
  {time : "08:10", workDay : MON_THU, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "08:20", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "08:30", workDay : MON_THU, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "08:30", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "08:40", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "08:50", workDay : MON_THU, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "09:00", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "09:10", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "09:20", workDay : MON_THU, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "09:30", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "09:30", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "09:45", workDay : MON_THU, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "10:45", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "13:45", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "15:30", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "16:15", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "16:45", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "17:25", workDay : MON_THU, isApproximate : true,  busType : BIG_BUS,  startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "17:45", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "18:00", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "18:15", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "18:30", workDay : MON_THU, isApproximate : true,  busType : BIG_BUS,  startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "18:45", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "19:00", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "19:15", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "19:30", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "20:00", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "20:30", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "21:00", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
];

//Buses to work FRIDAY
toWorkFri = [
  {time : "06:40", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},			
  {time : "07:05", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "07:30", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "07:45", workDay : FRIDAY, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "08:00", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},			
  {time : "08:10", workDay : FRIDAY, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "08:20", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "08:30", workDay : FRIDAY, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "08:30", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "08:40", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "08:50", workDay : FRIDAY, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "09:00", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "09:10", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "09:20", workDay : FRIDAY, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "09:30", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
  {time : "09:30", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "09:45", workDay : FRIDAY, isApproximate : false, busType : BIG_BUS,  startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "10:45", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},	
  {time : "13:45", workDay : FRIDAY, isApproximate : true,  busType : BIG_BUS,  startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "15:00", workDay : FRIDAY, isApproximate : true,  busType : BIG_BUS,  startStation : PIPERA, endStation: METRO_SYSTEMS},
  {time : "15:45", workDay : FRIDAY, isApproximate : true,  busType : BIG_BUS,  startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "16:30", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "17:30", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "18:00", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},
  {time : "18:45", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : PIPERA, endStation : METRO_SYSTEMS},				
  {time : "19:45", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : AUREL_VLAICU, endStation : METRO_SYSTEMS},
];

//Buses from work MON-THU
fromWorkMonThu = [
  {time : "06:55", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "07:20", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "07:30", workDay : MON_THU, isApproximate : true,  busType : BIG_BUS,  startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "07:50", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:00", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:10", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:20", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:20", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "08:30", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:40", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:50", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "09:00", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "09:10", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "09:20", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "09:20", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "09:30", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "10:30", workDay : MON_THU, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "13:30", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "15:15", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "16:00", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "16:30", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "17:10", workDay : MON_THU, isApproximate : false, busType : BIG_BUS,  startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "17:30", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "17:45", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "18:00", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},								
  {time : "18:15", workDay : MON_THU, isApproximate : false, busType : BIG_BUS,  startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "18:30", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "18:45", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "19:00", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "19:15", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "19:30", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "19:45", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "20:15", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "20:45", workDay : MON_THU, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
];

//Buses from work FRIDAY
fromWorkFri = [ 
  {time : "06:55", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "07:20", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "07:30", workDay : FRIDAY, isApproximate : true,  busType : BIG_BUS,  startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "07:50", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:00", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:10", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:20", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:20", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "08:30", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:40", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "08:50", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "09:00", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "09:10", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "09:20", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "09:20", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "09:30", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "10:30", workDay : FRIDAY, isApproximate : true,  busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},	        	
  {time : "13:30", workDay : FRIDAY, isApproximate : false, busType : BIG_BUS,  startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "14:40", workDay : FRIDAY, isApproximate : false, busType : BIG_BUS,  startStation : METRO_SYSTEMS, endStation : PIPERA},							
  {time : "15:30", workDay : FRIDAY, isApproximate : false, busType : BIG_BUS,  startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "16:15", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "17:15", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "17:45", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "18:30", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : PIPERA},
  {time : "19:15", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},
  {time : "20:15", workDay : FRIDAY, isApproximate : false, busType : MINI_BUS, startStation : METRO_SYSTEMS, endStation : AUREL_VLAICU},	        
];


/*** DB functions ***/

/**
 * Gets all buses that need to leave after the currentTime
 * @param currentTime - time in "HH:mm" string format
 * @param goingToWork - boolean
 * @param workDay - either MON_THU or FRIDAY
 * @returns array of objects in the format {time : "", workDay : "", isApproximate : false, busType : "", startStation : "", endStation : ""}
 */
function getBuses(currentTime, goingToWork, workDay) {
	var buses = []; //empty array will be populated below
	if (goingToWork) {
		if (workDay == MON_THU) {
			for ( var i = 0; i < toWorkMonThu.length; i++) {
				if (toWorkMonThu[i].time > currentTime) {
					buses.push(toWorkMonThu[i]);
				}
			}
		} else {
			for ( var i = 0; i < toWorkFri.length; i++) {
				if (toWorkFri[i].time > currentTime) {
					buses.push(toWorkFri[i]);
				}
			}	
		}
	} else {
		if (workDay == MON_THU) {
			for ( var i = 0; i < fromWorkMonThu.length; i++) {
				if (fromWorkMonThu[i].time > currentTime) {
					buses.push(fromWorkMonThu[i]);
				}
			}			
		} else {
			for ( var i = 0; i < fromWorkFri.length; i++) {
				if (fromWorkFri[i].time > currentTime) {
					buses.push(fromWorkFri[i]);
				}
			}			
		}
	}
	
	return buses;
}
