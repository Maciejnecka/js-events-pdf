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
// const btnEl = document.querySelector('button');
// const sectionEl = document.querySelector('section');
// if (btnEl && sectionEl) {
//   btnEl.addEventListener('click', function () {
//     console.log('button was clicked');
//   });
// }

// sectionEl.addEventListener('click', function () {
//   console.log('section was clicked too!');
//   // zauwaz, ze klikajac w <button/> rownoczesnie klikasz tez w <div/> ktory zawiera w sobie ten przycisk
// });
// const itemsList = document.querySelectorAll('section, article, h1');
// // wyszukuje wszystkie elementy razem
// const showTagName = function () {
//   console.log(this.tagName);
//   // pobieram nazwe tagu, na ktorym zostalo wywolane zdarzenie
// };
// itemsList.forEach(function (item) {
//   item.addEventListener('click', showTagName, true);
//   // ostatni parametr jest ustawiany domyslnie na false dlatego nie musimy go pisac dla [click] oznacza to, ze ma zostac wykorzystana faza [bubbling] propagacji
// });

// const itemsList = document.querySelectorAll('section, article, h1');
// // wyszukuje wszystkie elementy razem
// const showTagName = function (e) {
//   console.log(this.tagName);
//   if (this.tagName === 'ARTICLE') {
//     this.removeEventListener('click', showTagName, true);
//     // usuwam nasluchiwanie na <article/> poniewaz korzystam z [capturing], to 3 parametr ustawiony jest na [true]
//   }
// };
// itemsList.forEach(function (item) {
//   item.addEventListener('click', showTagName, true);
// });

// const itemsList = document.querySelectorAll('section, article, h1');
// // wyszukuje wszystkie elementy razem

// const showTagName = function () {
//   console.log(this.tagName);
//   // wyswietlam informacje o tagu
// };

// itemsList.forEach(function (item) {
//   item.addEventListener('mouseenter', showTagName);
//   // mimo, ze nie uzywam fazy capturing, to kolejnosc wyswietlanych tagow w konsoli jest zgodna z faza capturing tj. section, article, h1
// });
// const btnsList = document.querySelectorAll('button');
// const shotInformation = function (e) {
//   // nazwa parametru jest dowolna, najczesciej jest to [e] lub [event]
//   console.log(e.type, this.innerText);
//   // moge dzieki wlasciwosci [type] pobrac informacje o typie eventu
// };
// btnsList.forEach(function (item) {
//   item.addEventListener('mouseenter', shotInformation);
//   item.addEventListener('click', shotInformation);
//   // nasluchuje na tym samym elemencie klikniecei i najechanie kursorem myszy
// });

// const btnsList = document.querySelectorAll('button');
// const showObject = function (e) {
//   console.log(e);
//   // wyswietlam obiekt [e] w konsoli, aby sprawdzic, jakei wlasciwosci posiada
// };
// btnsList.forEach(function (item) {
//   item.addEventListener('click', showObject);
//   // nasluchuje event [click] na tym elemencie
// });

// const btnsList = document.querySelectorAll('button');
// const pElement = document.querySelector('p');
// const renderInfo = function (e) {
//   if (pElement) {
//     let text = parseInt(e.timeStamp / 1000);
//     // ilosc sekund od uruchomienia strony
//     text += ': ' + this.tagName;
//     // nazwa nasluchiwanego tagu
//     text += ' -> ' + e.type;
//     // typ uruchomionego zdarzenia
//     pElement.innerText = text;
//   }
// };
// btnsList.forEach(function (item) {
//   item.addEventListener('click', renderInfo);
//   item.addEventListener('mouseenter', renderInfo);
// });

// const linksList = document.querySelectorAll('a');
// // pobieram wszystkie <a/> na stronie

// const getHref = function (e) {
//   e.preventDefault();
//   // zatrzymuje domyslna akcje

//   const href = this.getAttribute('href');
//   // pobieram adres, ktory jest zapisany w atrybucie href w kliknietym <a/>
//   console.log(href);
// };

// linksList.forEach(function (item) {
//   item.addEventListener('click', getHref);
// });

// const linksList = document.querySelectorAll('a');
// const confirmRedirect = function (e) {
//   const newUrl = this.getAttribute('href');
//   const userDecision = confirm('Are you sure? -> ' + newUrl);
//   // pobieram potwierdzenie

//   if (!userDecision) {
//     // jesli uzytkownik nie potwierdzil
//     e.preventDefault();
//     // nie przekierowuje go na nowy adres url
//   }
// };
// linksList.forEach(function (item) {
//   item.addEventListener('click', confirmRedirect);
// });

// const formEl = document.querySelector('form');
// const handleSubmit = function (e) {
//   e.preventDefault();
//   // jesli nie uzyje zatrzymania domyslnej akcji to dane formularza zostana wyslane do adresu zdefiniowanego w atrybucie [action] jesli formularz nie posiada tego atrybutu to strona zostanie przeładowana
//   console.log('submit!');
// };
// formEl && formEl.addEventListener('submit', handleSubmit);

// const itemsList = document.querySelectorAll('section, article, h1');
// // wyszukuje wszystkkie lementy razem
// const showTagName = function (e) {
//   console.log(this.tagName);
//   if (this.tagName === 'ARTICLE') {
//     e.stopPropagation();
//     // zatrzymuje propagacje na <article/> dla elementow wyzej w drzewie DOM tj. przodkow dla <article/> nie sa uruchamiane callbacki
//   }
// };
// itemsList.forEach(function (item) {
//   item.addEventListener('click', showTagName);
// });

// const itemsList = document.querySelectorAll('section, article, h1');
// const showTagName = function (e) {
//   console.log(this.tagName);
//   if (this.tagName === 'ARTICLE') {
//     e.stopImmediatePropagation();
//   }
// };
// const showText = function () {
//   console.log('click on article!');
// };
// itemsList.forEach(function (item) {
//   item.addEventListener('click', showTagName);
//   if (item.tagName === 'ARTICLE') {
//     item.addEventListener('click', showText);
//   }
// });
// const itemsList = document.querySelectorAll('section, article, h1');
// const showInfo = function (e) {
//   let text = e.target.tagName + ': ';
//   // pobieram nazwe tagu elementu, na ktorym zostalo wywoalen zdarzenie, w tym przypadku jest to element, w ktory kliknieto
//   text += this.tagName;
//   console.log(text);
// };
// itemsList.forEach(function (item) {
//   item.addEventListener('click', showInfo);
// });
// const itemsList = document.querySelectorAll('section, article, h1');
// const showInfo = function (e) {
//   let text = e.currentTarget.tagName + ': ';
//   // pobieram nazwe tagu elementu, na ktorym zostal uruchomiony callback
//   text += e.currentTarget === this ? 'Y' : 'N';
//   // sprawdzam czy zmienne wskazuja na ten sam element w drzewie DOM
//   console.log(text);
// };

// itemsList.forEach(function (item) {
//   item.addEventListener('click', showInfo);
// });

// const itemsList = document.querySelectorAll('section, article, h1');
// const showInfo = function (e) {
//   if (e.target === e.currentTarget) {
//     // wykonaj instrukcje tylko wtedy, gdy callback jest uruchomiony bezposrednio, czyli nie przez propagacje
//     const text = e.target.tagName;
//     console.log(text + ' was clicked');
//   }
// };

// itemsList.forEach(function (item) {
//   item.addEventListener('click', showInfo);
// });
