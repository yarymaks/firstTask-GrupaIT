const btn = document.querySelector('.btn');
const tableHead = ['Even', 'Odd'];

const getRandomInt = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min;
};

const sortNumbers = arr => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

const createTable = () => {
  const table = document.createElement('table');
  table.setAttribute('id', 'table');
  const tr = table.insertRow(-1);
  for (let i = 0; i < tableHead.length; i++) {
    const th = document.createElement('th');
    th.innerHTML = tableHead[i];
    tr.appendChild(th);
  }
  const div = document.getElementById('tableContent');
  div.appendChild(table);
};

const countLength = (even, odd) => {
  return even >= odd ? even : odd;
};

const addRow = (even, odd) => {
  const table = document.getElementById('table');
  const count = countLength(even.length, odd.length);

  for (let i = 0; i < count; i++) {
    const tr = table.insertRow(-1);
    const cell1 = tr.insertCell(0);
    const cell2 = tr.insertCell(1);
    even[i] !== undefined
      ? (cell1.innerHTML = even[i])
      : (cell1.innerHTML = '');
    odd[i] !== undefined ? (cell2.innerHTML = odd[i]) : (cell2.innerHTML = '');
  }
};

const addRandom = () => {
  const table = document.getElementById('table');
  table !== null ? table.remove() : '';
  let evenNumbers = [];
  let oddNumbers = [];
  for (let i = 0; i < 20; i++) {
    const randomNumber = getRandomInt();
    randomNumber % 2 === 0
      ? evenNumbers.push(randomNumber)
      : oddNumbers.push(randomNumber);
  }
  createTable();
  addRow(sortNumbers(evenNumbers), sortNumbers(oddNumbers));
};

btn.addEventListener('click', addRandom);
