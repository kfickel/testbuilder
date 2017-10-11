var detectNetwork = function(cardNumber) {
  var prefixOne = cardNumber.slice(0,1);
  var prefix = cardNumber.slice(0,2);
  var prefixFour = cardNumber.slice(0,4);
  var prefixThree = cardNumber.slice(0,3);
  var prefixSix = cardNumber.slice(0,6);
  var length = cardNumber.length;

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
 };


