'use strict';

const deliveryCountry = prompt('Укажите, пожалуйста, страну доставки');

let deliveryPrice;

switch (deliveryCountry.toLowerCase()) {
  case 'китай':
    deliveryPrice = 100;
    break;

  case 'чили':
    deliveryPrice = 250;
    break;

  case 'австралия':
    deliveryPrice = 170;
    break;

  case 'индия':
    deliveryPrice = 80;
    break;

  case 'ямайка':
    deliveryPrice = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

alert(`Доставка в ${deliveryCountry} будет стоить ${deliveryPrice} кредитов`);
