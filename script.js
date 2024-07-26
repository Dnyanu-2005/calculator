function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.value);
        addToHistory(`${display.value} = ${result}`);
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    let historyList = document.getElementById('historyList');
    let li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
}

function clearHistory() {
    let historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
}

