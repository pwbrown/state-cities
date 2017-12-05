var states = require('./data/states').states;

//Main Method
var getCities = function(state){
	state = state.trim().toUpperCase();
	if(!states[state]){
		return null;
	}else{
		return states[state].cities;
	}
};

var getStates = function() {
  if(states) {
    return Object.keys(states);
  } else {
    return null;
  }
};

exports.getCities = getCities;