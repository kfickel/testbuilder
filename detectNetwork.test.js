var FILL_ME_IN = 'Fill this value in';
 
describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});


describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});


describe('Visa', function() {
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});


describe('MasterCard', function() {
  var should = chai.should();
 
  it('has a prefix of 51 and length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});


describe('Discover', function() {
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011123456789123').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011123456789123456').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6512345678912345').should.equal('Discover');
  });
  it('has a prefix of 65 and length of 19', function() {
    detectNetwork('6512345678912345678').should.equal('Discover');
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        detectNetwork(prefix.toString() + '1234567891234').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        detectNetwork(prefix.toString() + '1234567891234567').should.equal('Discover');
      });
    })(prefix)
  }
});


describe('Maestro', function() {
  var should = chai.should();

  for(var length = 12; length <= 19; length++) {
    (function(length) {
      var suffix = '11111111';
      
      for(var i = 0; i < length - 12; i++) {
        suffix += '1';
      }

      it('has a prefix of 5018 and a length of ' + length, function() {
        detectNetwork('5018' + suffix).should.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + length, function() {
        detectNetwork('5020' + suffix).should.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + length, function() {
        detectNetwork('5038' + suffix).should.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + length, function() {
        detectNetwork('6304' + suffix).should.equal('Maestro');
      });
    })(length)
  }
});


describe('should support China UnionPay', function () {
  var should = chai.should();

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    let prefixLet = prefix;

    it('has a prefix of ' + prefixLet + ' and a length of 16', function() {
      detectNetwork(prefixLet.toString() + '1234567891').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefixLet + ' and a length of 17', function() {
      detectNetwork(prefixLet.toString() + '12345678912').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefixLet + ' and a length of 18', function() {
      detectNetwork(prefixLet.toString() + '123456789123').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefixLet + ' and a length of 19', function() {
      detectNetwork(prefixLet.toString() + '1234567891234').should.equal('China UnionPay');
    });
  }

  for (var prefix = 624; prefix <= 626; prefix++) {
     let prefixLet = prefix 
      it('has a prefix of ' + prefixLet + ' and a length of 16', function() {
        detectNetwork(prefixLet.toString() + '1234567891234').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefixLet + ' and a length of 17', function() {
        detectNetwork(prefixLet.toString() + '12345678912345').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefixLet + ' and a length of 18', function() {
        detectNetwork(prefixLet.toString() + '123456789123456').should.equal('China UnionPay');
      });
      it('has a prefix of ' + prefixLet + ' and a length of 19', function() {
        detectNetwork(prefixLet.toString() + '1234567891234567').should.equal('China UnionPay');
      });
    }

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    let prefixLet = prefix;
    it('has a prefix of ' + prefixLet + ' and a length of 16', function() {
      detectNetwork(prefixLet.toString() + '123456789123').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefixLet + ' and a length of 17', function() {
      detectNetwork(prefixLet.toString() + '1234567891234').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefixLet + ' and a length of 18', function() {
      detectNetwork(prefixLet.toString() + '12345678912345').should.equal('China UnionPay');
    });
    it('has a prefix of ' + prefixLet + ' and a length of 19', function() {
      detectNetwork(prefixLet.toString() + '123456789123456').should.equal('China UnionPay');
    });
  }
});


describe('should support Switch', function() {
  var should = chai.should();

  for (var length = 16; length <= 19; length++) {
    (function(length) {
      if (length !== 17) {
        var suffixOne = '';
        for (var suffixLength = 1; suffixLength <= length - 4; suffixLength++) {
          suffixOne  += '1';
        }
      
        it('has a prefix of 4903 and a length of ' + length, function () {
          detectNetwork('4903' + suffixOne).should.equal('Switch');
        }); 
        it('has a prefix of 4905 and a length of ' + length, function () {
          detectNetwork('4905' + suffixOne).should.equal('Switch');
        });
        it('has a prefix of 4911 and a length of ' + length, function () {
          detectNetwork('4911' + suffixOne).should.equal('Switch');
        });
        it('has a prefix of 4936 and a length of ' + length, function () {
          detectNetwork('4936' + suffixOne).should.equal('Switch');
        });
        it('has a prefix of 6333 and a length of ' + length, function () {
          detectNetwork('6333' + suffixOne).should.equal('Switch');
        }); 
        it('has a prefix of 6759 and a length of ' + length, function () {
          detectNetwork('6759' + suffixOne).should.equal('Switch');
        });
      }
    })(length)
  }
  for (var length = 16; length <= 19; length++) {
    (function(length) {
      if(length !== 17) {
        var suffix = '';
        for (var suffixLength = 1; suffixLength <= length - 6; suffixLength++) {
          suffix += '1';
        }
        it('has a prefix of 564182 and a length of ' + length, function () {
          detectNetwork('564182' + suffix).should.equal('Switch');
        }); 
        it('has a prefix of 633110 and a length of ' + length, function () {
          detectNetwork('633110' + suffix).should.equal('Switch');
        });
      }
    })(length);
  }

});
