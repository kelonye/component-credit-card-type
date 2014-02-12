/**
  * Credit card types
  * Source: http://stackoverflow.com/questions/72768/how-do-you-detect-credit-card-type-based-on-number#answer-72801
  *
  * @api private
  */

var cardTypes = {
  'visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
  'master-card': /^5[1-5][0-9]{14}$/,
  'american-express': /^3[47][0-9]{13}$/,
  'diners-club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  'discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  'jcb': /^(?:2131|1800|35\d{3})\d{11}$/
};

/**
  * Return typeof `cardNumber`
  *
  * @param {String} cardNumber
  * @return {String} cardType
  * @api public
  */

function CreditCard(cardNumber){
  for (var cardType in cardTypes){
    var cardTypeRegex = cardTypes[cardType];
    if (cardTypeRegex.exec(cardNumber)){
      return cardType;
    }
  }
}

/**
  * Expose `CreditCard`.
  */
module.exports = CreditCard;