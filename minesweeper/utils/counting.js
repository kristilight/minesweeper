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

const mines = createCounter(10);
const rows = createCounter(10);
const columns = createCounter(10);
const countFlag = createCounter(10);
const newMines = createCounter(10);
const numberClicks = createCounter(0);
const cellsClicked = createCounter(0);
const timerID = createCounter(0)

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

function create(initialAmount) {
  return {
    amount: initialAmount,

    get mean() {
      return this.amount;
    },
    set mean(value) {
      this.amount = value;
    },
  };
}

const gameOver = create(false);
const soundOff = create(false);


let field =  [];
let minesArr = []


export {mines, level, rows, columns, field, minesArr, timerID, gameOver, countFlag, numberClicks, cellsClicked, soundOff, newMines};
