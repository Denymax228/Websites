var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

var myDate = new Date();
var fullDate = (days[myDate.getDay()] + ", " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear());
console.log(fullDate);

var mDate = document.getElementById('mDate');
mDate.innerHTML = fullDate;