import createElement from "./createElement.js";
import {mines, numberClicks} from "../utils/counting.js";

const {body} = document;

const blackout = createElement('div', '', 'blackout');
const container = createElement('div', '', 'container');

const textContainer = createElement('div', '', 'texts-container');
let clickedContainer = createElement('div', '', 'text-content');
const clickedText = createElement('span', 'Number of clicks :', 'text');
const clickedAmountText = createElement('span', numberClicks.count, 'text');

let stopwatchContainer = createElement('div', '', 'text-content');
const stopwatchText = createElement('span', 'Stopwatch:', 'text');
const stopwatchAmountText = createElement('span', '00 : 00', 'text');

let flagContainer = createElement('div', '', 'text-content');
const flagText = createElement('span', '🔺 :', 'text');
const flagAmountText = createElement('span', mines.count, 'text');

let minesContainer = createElement('div', '', 'text-content');
const minesText = createElement('span', '💣 :', 'text');
const minesAmountText = createElement('input', '', 'text-mines');
minesAmountText.value = 10;
minesAmountText.type = 'number';
minesAmountText.step = '1';
minesAmountText.min = '10';
minesAmountText.max = '99';

const btnNewMines = createElement('button', 'set mines', 'btn-new-mines');

const resultBTN = createElement('button', 'Results', 'btn-result');
const resultContainer = createElement('div', '', 'result');
const resultTextAmount = createElement('span', '', 'text-result');
const resultCross = createElement('div', '❌', 'cross-result');

const soundContainer = createElement('div', '', 'text-content', 'sound');
const soundText = createElement('p', 'Sound:', 'text');
const soundSwitch = createElement('button', 'off', 'btn-text', 'sound-btn');

const themeContainer = createElement('div', '', 'just-container');
const chooseThemeText = createElement('span', 'Theme :', 'text');
const lightTeam = createElement('button', 'Light', 'btn-team__text');
const darkTeam = createElement('button', 'Dark', 'btn-team__text');

const header = createElement('div', '', 'header');
const btnNewGame = createElement('button', 'New game', 'btn-new-game');
const levelsContainer = createElement('div', '', 'just-container');
const chooseLevelText = createElement('span', 'Choose level:', 'text');
const easyLevel = createElement('button', 'easy 10x10', 'btn-text');
const middleLevel = createElement('button', 'medium 15x15', 'btn-text');
const hardLevel = createElement('button', 'hard 25x25', 'btn-text');
const modal = createElement('div', '', 'modal', 'hidden');
const modalCross = createElement('div', '❌', 'cross-modal');
const modalText = createElement('p', '', 'modal-text');


flagContainer.append(flagText, flagAmountText);
stopwatchContainer.append(stopwatchText, stopwatchAmountText);
clickedContainer.append(clickedText, clickedAmountText);
soundContainer.append(soundText, soundSwitch);
minesContainer.append(minesText, minesAmountText);
resultContainer.append(resultCross, resultTextAmount)

textContainer.append(clickedContainer, stopwatchContainer, flagContainer, minesContainer, btnNewMines, soundContainer)
container.append(textContainer);

themeContainer.append(chooseThemeText, lightTeam, darkTeam);
levelsContainer.append(chooseLevelText, easyLevel, middleLevel, hardLevel);
header.append(btnNewGame, levelsContainer, themeContainer, resultBTN)
modal.append(modalCross, modalText);
body.append(blackout, header, modal, container, resultContainer);

export { minesAmountText, flagAmountText, easyLevel, btnNewGame, middleLevel, hardLevel, lightTeam, darkTeam, soundSwitch, btnNewMines,
 resultBTN, resultCross, clickedAmountText, stopwatchAmountText, header, body, container, modal, modalText, modalCross, blackout, textContainer,
 themeContainer, resultContainer, resultTextAmount};
