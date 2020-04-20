'use strict';

const deliveryCountry = prompt('Укажите, пожалуйста, страну доставки');

let deliveryPrice;

switch (deliveryCountry.toLowerCase()) {
  case 'китай':
    deliveryPrice = 100;
    alert(
      `Доставка в ${deliveryCountry} будет стоить ${deliveryPrice} кредитов`,
    );
    break;

  case 'чили':
    deliveryPrice = 250;
    alert(
      `Доставка в ${deliveryCountry} будет стоить ${deliveryPrice} кредитов`,
    );
    break;

  case 'австралия':
    deliveryPrice = 170;
    alert(
      `Доставка в ${deliveryCountry} будет стоить ${deliveryPrice} кредитов`,
    );
    break;

  case 'индия':
    deliveryPrice = 80;
    alert(
      `Доставка в ${deliveryCountry} будет стоить ${deliveryPrice} кредитов`,
    );
    break;

  case 'ямайка':
    deliveryPrice = 120;
    alert(
      `Доставка в ${deliveryCountry} будет стоить ${deliveryPrice} кредитов`,
    );
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
