'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const passwordField = prompt('Введите пароль');

if (passwordField === null) {
  message = 'Отменено пользователем!';
} else if (passwordField === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
