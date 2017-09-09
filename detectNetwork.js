// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var prefixOne = cardNumber.slice(0,1);
  var prefix = cardNumber.slice(0,2);
  var prefixFour = cardNumber.slice(0,4);
  var prefixThree = cardNumber.slice(0,3);
  var prefixSix = cardNumber.slice(0,6);
  var length = cardNumber.length;
  //console.log(cardNumber.length);
  //console.log(prefix);
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if ((prefix === '38' || prefix === '39') && length === 14){
  	return 'Diner\'s Club';
  } else if ((prefix === '34' || prefix === '37') && length === 15) {
  	return 'American Express';
  } else if (prefixOne === '4' && (length === 13 || length === 16 || length === 19) && (prefixFour !== '4903' && prefixFour !== '4905' && prefixFour !== '4911' && prefixFour !== '4936')) {
  	return 'Visa';
  } else if ((prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55') && length === 16) {
  	return 'MasterCard';
  } else if ((prefixFour === '6011' || prefix === '65' || prefixThree === '644' || prefixThree === '645' || prefixThree === '646' || prefixThree === '647' || prefixThree === '648' || prefixThree === '649') && (length === 16 || length === 19)) {
  	return 'Discover';
  } else if (prefixFour === '5018' || prefixFour === '5020' || prefixFour === '5038' || prefixFour === '6304') {
  	for(var i = 12; i <= 19; i++) {
  		if (length === i) {
  			return 'Maestro';
  		}
  	}
  } else if (length === 16 || length === 17 || length === 18 || length ===19) {
  	if(prefix === '62') {
  		for (var j = 622126; j <= 622925; j++) {
	  		if(prefixSix === j.toString()) {
	  			return 'China UnionPay';
	  		} 
	  	}
	  	for (var k = 624; k <= 626; k++) {
	  		if (prefixThree === k.toString()) {
	  			return 'China UnionPay';
	  		}
	  	}
	  	for (var l = 6282; l <= 6288; l++) {
	  		if (prefixFour === l.toString()) {
	  			return 'China UnionPay';
	  		}
	  	}
  	} else if((prefixFour === '4903' || prefixFour === '4905' || prefixFour === '4911' || prefixFour === '4936') && length !== 17) {
  		return 'Switch';
  	} else if ((prefixSix === '564182' || prefixSix === '633110') && length !== 17) {
  		return 'Switch';
  	} else if ((prefixFour === '6333' || prefixFour === '6759') && length !== 17) {
  		return 'Switch';
  	}
  } else {
   	return prefix + ' ' + length;
   }
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


