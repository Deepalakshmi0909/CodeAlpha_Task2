let display = document.getElementById('display');

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace '×' and '÷' with '*' and '/'
        let expr = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(expr);
    } catch (e) {
        display.value = 'Error';
    }
}