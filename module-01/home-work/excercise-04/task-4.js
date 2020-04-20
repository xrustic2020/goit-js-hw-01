'use strict';

let credits = 23580;

const pricePerDroid = 3000;

const quantityGoods = prompt(
  'Укажите колличество дроидов, которое желаете приобрести',
);

let totalPrice;

if (quantityGoods === null) {
  alert('Отменено пользователем!');
} else {
  totalPrice = quantityGoods * pricePerDroid;
  if (credits >= totalPrice) {
    credits -= totalPrice;
    alert(
      `Вы купили ${quantityGoods} дроидов, на счету осталось ${credits} кредитов.`,
    );
  } else {
    alert('Недостаточно средств на счету!');
  }
}
