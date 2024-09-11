function createCounter(initialAmount) {
  return {
    amount: initialAmount,

    get count() {
      return this.amount;
    },
    set count(value) {
      this.amount = value;
    },
  };
}

const mines = createCounter(1);
const rows = createCounter(10);
const columns = createCounter(10);
const countFlag = createCounter(10);
const newMines = createCounter(10);
const numberClicks = createCounter(0);
const cellsClicked = createCounter(0);

const level = {
  level: '',

  get result() {
    return this.level;
  },
  set result(value) {
    if (value === 1) {
      this.level = 'easy';
    } else if (value === 2) {
      this.level = 'middle';
    } else if (value === 3) {
      this.level = 'hard';
    }
  },
};

let field = [];
let minesArr = [];
let gameOver = false;
let soundOffChoose = false;
let timerId;

export {mines, level, rows, columns, field, minesArr, timerId, gameOver, countFlag, numberClicks, cellsClicked, soundOffChoose, newMines};
