'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimular = document.querySelector('.setup-similar');
var fragment = document.createDocumentFragment();
var wizards = [
  {
    name: NAMES[getRandomValue(NAMES)] + ' ' + LAST_NAMES[getRandomValue(LAST_NAMES)],
    coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
  },
  {
    name: NAMES[getRandomValue(NAMES)] + ' ' + LAST_NAMES[getRandomValue(LAST_NAMES)],
    coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
  },
  {
    name: NAMES[getRandomValue(NAMES)] + ' ' + LAST_NAMES[getRandomValue(LAST_NAMES)],
    coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
  },
  {
    name: NAMES[getRandomValue(NAMES)] + ' ' + LAST_NAMES[getRandomValue(LAST_NAMES)],
    coatColor: COAT_COLORS[getRandomValue(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomValue(EYES_COLORS)]
  }
];

function getRandomValue(arr) {
  return Math.floor(Math.random() * arr.length);
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

setup.classList.remove('hidden');
setupSimular.classList.remove('hidden');

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
