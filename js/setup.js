'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COUNT_WIZARDS = 4;
var wizards = [];

var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimular = document.querySelector('.setup-similar');
var fragment = document.createDocumentFragment();

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
