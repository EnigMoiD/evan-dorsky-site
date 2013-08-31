//Date improvements

weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

Date.prototype.weekDay = function() {
	return weekDays[this.getDay()];
}

Date.prototype.blogFormat = function() {
	if (new Date().getTime() - this.getTime() < 86400000)
		return this.weekDay();
	else
		return this.getMonth()+1+'/'+this.getDate()+'/'+this.getFullYear();
}