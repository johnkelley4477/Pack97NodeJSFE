var _ = require('lodash'),getadults;

getadults  = function(attendees, context){
	if(_.isEmpty(context)){
		return 0;
	}
	var accum = '';
    for(var i = 0; i < attendees.length; i ++){
        
    	if(attendees[i].type === "adult"){
            context.data.adult = {"name":attendees[i].name,"detail":attendees[i].detail};
            context.data.index = i;
            accum += context.fn(this);
        }
    }
    return accum;
}

module.exports = getadults;