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

/**
 * add method getDayName which returns the day name in DDD format
 */
var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

Date.prototype.getDayName = function() {
    return days[ this.getDay() ];
};