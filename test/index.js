var card = require('component-credit-card-type');

describe('cards:', function() {
  it('should return undefined on unsupported card number', function() {
    assert.equal(card('00'), undefined);
  });
  it('should return right card type on supported card number', function() {
    for (var cardType in fixtures){
      fixtures[cardType].forEach(function(cardNumber){
        assert.equal(card(cardNumber), cardType);
      });
    }
  });
});
