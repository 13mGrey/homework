// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. Пример: const checkAge = function(age) { Ваши преобразования }. Вывести в консоль результат работы функции с возрастами 17, 18, 61.
function checkAge(age){
  let age_2 = 18;
  let age_3 = 60;
  if (age < age_2) {
  return "You don't have access cause your age is " + age + " It's less then ";
  } else if (age >= age_2 && age < age_3) {
  return "Welcome !";
  } else if (age > age_3) {
  return "Keep calm and look Culture channel ";
  } else {
  return "Technical work";
  }
}
console.log(checkAge(17))
console.log(checkAge(18))
console.log(checkAge(61))

// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
function checkAge(age){
  let age_2 = 18;
  let age_3 = 60;
  if(typeof age == 'number') {
    if (age < age_2) {
      return "You don't have access cause your age is " + age + " It's less then ";
    } else if (age >= age_2 && age < age_3) {
      return "Welcome !";
    } else if (age > age_3) {
      return "Keep calm and look Culture channel ";
    } else {
      return "Technical work";
    }
  } else
   return "Error 'The data type is not number'";
}
console.log(checkAge(17))
console.log(checkAge(18))
console.log(checkAge(61))
console.log(checkAge('60'))
console.log(checkAge('abc'))

// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
function checkAge(age){
  let age_2 = 18;
  let age_3 = 60;
  if(!isNaN(age) && age) {
    if (age < age_2) {
      return "You don't have access cause your age is " + age + " It's less then ";
    } else if (age >= age_2 && age < age_3) {
      return "Welcome !";
    } else if (age > age_3) {
      return "Keep calm and look Culture channel ";
    } else {
      return "Technical work";
    }
  } else
   return "Error 'The data type is not number'";
  }
  console.log(checkAge('2'))
  console.log(checkAge(17))
  console.log(checkAge(18))
  console.log(checkAge(61))
  console.log(checkAge('60'))
  console.log(checkAge('abc'))
  console.log(checkAge(''))

  // 4***: Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt в привязанной верстке
function checkAge(age){
  let age_2 = 18;
  let age_3 = 60;
  if(!isNaN(age) && age) {
    if (age < age_2) {
      alert("You don't have access cause your age is " + age + " It's less then ");
    } else if (age >= age_2 && age < age_3) {
      alert("Welcome !");
    } else if (age > age_3) {
      alert("Keep calm and look Culture channel ");
    } else {
      alert("Technical work");
    }
  } else
   alert("Error 'The data type is not number'");
  }
  let a = prompt('Enter your age')
  checkAge(a)