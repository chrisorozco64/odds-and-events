// --- State ---
let bank = [];
let odds = [];
let evens = [];

// --- Functions ---


function sortOne() {
    const bankNum = bank.shift();
    if (bankNum % 2 === 0) {
      evens.push(bankNum);
    } else {
      odds.push(bankNum);
    }
    render();
}

function sortAll() {
  while (bank.length) {
    const bankNum = bank.shift();
    if (bankNum % 2 === 0) {
      evens.push(bankNum);
    } else {
      odds.push(bankNum);
    }
  }
  render();
}

const moveToBank = (n) => {
  let userInput = n.target[0].value;
  console.log(userInput);
  bank.push(userInput);
  render();
};

const numForm = () => {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label for="bank">Add a number to the bank</label>
    <input type="text" id="bank" name="number" placeholder="Enter a number" />
    <button type="submit">Add Number</button>
    <button type="button" id="sort1">Sort 1</button>
    <button type="button" id="sortAll">Sort All</button>
  `;
  $form.addEventListener("submit", moveToBank);
  $form.querySelector("#sort1").addEventListener("click", sortOne);
  $form.querySelector("#sortAll").addEventListener("click", sortAll);
  return $form;
};

// --- Render ---
const render = () => {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Odds and Events</h1>
    <numForm></numForm>
      <h2>Bank</h2>
      <form>
        <input type="text" name="bank" value="${bank.join(' ')}" />
      </form>
       <h2>Odds</h2>
      <form>
        <input type="text" name="odds" value="${odds.join(' ')}">
      </form>
         <h2>Evens</h2>
      <form>
        <input type="text" name="evens" value="${evens.join(' ')}">
      </form>
  `
  $app.querySelector("numForm").replaceWith(numForm());
}

render();












