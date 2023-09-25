'use strict';

// const btnEl = document.querySelector('.btn');
// if (btnEl) {
//   // jeśli został wyszukany
//   btnEl.addEventListener('click', function () {
//     // wywołaj tę funkcje, jesli wyszukany przycisk zostanie klikniety
//     console.log('Button was clicked');
//     // wyswietl napis w konsoli
//   });
// }

// const handleClick = function () {
//   console.log('button was clicked');
// };
// // utworzylem wyrażenie funkcyjne, tj. funkcja została przypisana do zadeklarowanej zmiennej

// const btnEl = document.querySelector('.btn');
// if (btnEl) {
//   // jesli został wyszukany element...

//   btnEl.addEventListener('click', handleClick);
//   // nasłuchuj kliknięcia na ten element, tzn. wywołaj funcje handleClick, jesli wyszukany przycisk zostanie kliknięty
// }

// const handleClick = function () {
//   console.log('Button was clicked');
// };

// const btnEl = document.querySelector('.btn');
// if (btnEl) {
//   // jesli został wyszukany element...
//   btnEl.addEventListener('click', handleClick);
//   // nasłuchuj kliknięcia na ten element, tzn. wywołaj funkcje anonimowa (bez nazwy), jesli wyszukany przycisk zostanie klikniety
// }

// const contentEl = document.querySelector('content');
// // jesli plik js jest podpiety do sekcji <head/>, to zmienna [contentEl] bedzie zawierac [null]

// const init = function () {
//   const contentEl = document.querySelector('.content');
//   // jesli wyszukanie nastapi po załadowaniu DOM-u, to element zostanie odnaleziony prawidłowo. Dzięki wykorzystaniu DOMContentLoaded miejsce podpiecia pliku JS nie ma juz znaczenia!
// };

// document.addEventListener('DOMContentLoaded', init);
// const btnEl = document.querySelector('.btn');
// const textEl = document.querySelector('.text');

// const onEnter = function () {
//   textEl.textContent = 'enter...';
// };

// const onLeave = function () {
//   textEl.textContent = 'leave...';
// };

// if (btnEl && textEl) {
//   btnEl.addEventListener('mouseenter', onEnter);
//   btnEl.addEventListener('mouseleave', onLeave);
// }

// const emailEl = document.querySelector('.email');

// const getValue = function () {
//   console.log(emailEl.value);
//   // wyswietl aktualna zawartość pola
// };

// emailEl && emailEl.addEventListener('keyup', getValue);
// // operator logiczny && pozwoli wykonac operacje po prawej stronei tylko wtedy, gdy lewa strona bedzie prawidlowa

// const userEl = document.querySelector('[name="user"]');
// // wyszukaj element, ktory posiada atrybut [name] ustawiony na [user]
// const showCurrentUserId = function () {
//   console.log(userEl.value);
//   // pobierz zawartosc atrybutu [value] ustawionego dla wybranego <option/>
// };
// if (userEl) {
//   userEl.addEventListener('change', showCurrentUserId);
//   // wywołaj metodę przypisaną do [showCurrentUserId], gdy wybrany element z listy bedzie inny niz poprzedni
// }

// const counterEl = document.querySelector('.counter');
// const incrementCounter = function () {
//   let value = parseInt(counterEl.innerText);
//   // pobieram tekst z przycisku oraz zmieniam go na liczbe
//   counterEl.innerText = ++value;
//   // przypisuje nowa wartosc powiekszając ją o 1
//   if (value > 3) {
//     counterEl.removeEventListener('click', incrementCounter);
//     // usuwam nasluchiwanie, gdy [value] przekroczy wartosc 3
//   }
// };
// counterEl.addEventListener('click', incrementCounter);

// const btnEl = document.querySelector('button');

// if (btnEl) {
//   btnEl.addEventListener('click', function () {
//     btnEl.innerText -= 1;
//     // nie mam jak usunac tego nasluchiwania, poniewaz nie mam nazwy funkcji ktora musze przekazac przy .removeEventListener('click'),[nazwa fn]
//   });
// }
// const btnEl = document.querySelector('button');
// const sectionEl = document.querySelector('section');
// if (btnEl && sectionEl) {
//   btnEl.addEventListener('click', function () {
//     console.log('Button was clicked');
//   });

//   sectionEl.addEventListener('click', function () {
//     console.log('section was clicked too!');
//     // zawuaz, ze klikajac w <button/> rownoczesnie klikasz tez w <section/> ktora zawiera w sobie ten przycisk
//   });
// }

// const btnEl = document.querySelector('button');
// const sectionEl = document.querySelector('section');

// const addClassToElement = function () {
//   const className = this.tagName.toLowerCase();
//   // pobieram nazwe kliknietego tagu oraz zmieniam wielkie litery na małe
//   this.classList.add(className);
//   console.log(className + ' was clicked');
// };

// if (btnEl && sectionEl) {
//   btnEl.addEventListener('click', addClassToElement);
//   // this wskazuje na [btnEl]
//   sectionEl.addEventListener('click', addClassToElement);
//   // this wskazuje na [sectionEl]
// }
// const btnsList = document.querySelectorAll('button');
// const changeText = function () {
//   this.innerText = 'clicked';
//   // zmien tekst na klikniętym elemencie
// };

// btnsList.forEach(function (btnEl) {
//   // do kazdego przycisku ktory jest dostepny pod zmienna [btnEl]
//   btnEl.addEventListener('click', changeText);
//   // dopisz nasluchiwanie na event [click] - [this] będzie wskazywał na [btnEl]
// });
