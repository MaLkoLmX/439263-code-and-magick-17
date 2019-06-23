'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var COUNT_WIZARDS = 4;
var wizards = [];

var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimular = document.querySelector('.setup-similar');
var fragment = document.createDocumentFragment();

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}
function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}
function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

function getWizard() {
  var wizard = {
    name: NAMES[getRandomValue(NAMES)] + ' ' + LAST_NAMES[getRandomValue(LAST_NAMES)],
    coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
  };

  return wizard;
}

function getRandomValue(arr) {
  return Math.floor(Math.random() * arr.length);
}

for (var i = 0; i < COUNT_WIZARDS; i++) {
  var wizard = getWizard();
  wizards.push(wizard);
}

function renderWizard(arr) {
  for (i = 0; i < COUNT_WIZARDS; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = arr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
    fragment.appendChild(wizardElement);
  }

  return fragment;
}

setup.classList.remove('hidden');
setupSimular.classList.remove('hidden');

similarListElement.appendChild(renderWizard(wizards));

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomValue(COAT_COLORS)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLORS[getRandomValue(EYES_COLORS)];
});

fireball.addEventListener('click', function () {
  fireball.style.background = FIREBALL_COLORS[getRandomValue(FIREBALL_COLORS)];
});
