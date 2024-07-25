function addToDisplay(value) {
    document.calc.display.value += value;
}

function clearDisplay() {
    document.calc.display.value = '';
}

function deleteChar() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.calc.display.value);
        document.calc.display.value = result;
        addToHistory(document.calc.display.value);
    } catch (error) {
        document.calc.display.value = 'Error';
    }
}

function addToHistory(result) {
    const historyList = document.getElementById('history');
    const listItem = document.createElement('li');
    listItem.textContent = result;
    historyList.appendChild(listItem);
}

function clearHistory() {
    const historyList = document.getElementById('history');
    historyList.innerHTML = '';
}
