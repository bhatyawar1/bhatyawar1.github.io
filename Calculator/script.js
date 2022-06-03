class Calculator {
    constructor(potext, coptext) {
        this.potext = potext;
        this.coptext = coptext;
        this.clear();
    }
    clear() {
        this.co = '';
        this.po = '';
        this.operation = undefined;
    }
    delete() {
        this.co = this.co.toString().slice(0, -1);
    }
    appendNumber(number) {
        if (number === '.' && this.co.includes('.')) return;
        this.co = this.co.toString() + number.toString();

    }
    chooseOperation(operation) {
        if (this.co === '') return;
        if (this.po !== '') {
            this.compute();
        }
        this.operation = operation;
        this.po = this.co;
        this.co = '';
    }
    compute() {
        let computation;
        const prev = parseFloat(this.po);
        const current = parseFloat(this.co);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;

            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.co = computation;
        this.operation = undefined;
        this.po = '';

    }
    getDisplayNumber(number) {
        const strNum = number.toString();
        const intDigits = parseFloat(strNum.split('.')[0])
        const deciDigits = strNum.split('.')[1]
        let intDisplay;
        if (isNaN(intDigits)) {
            intDisplay = '';
        } else {
            intDisplay = intDigits.toLocaleString('en', { maximumFractionDigits: 0 })

        }
        if (deciDigits != null) {
            return `${intDigits}.${deciDigits}`
        } else {
            return intDisplay;
        }

    }
    updateDisplay() {
        this.coptext.innerText = this.getDisplayNumber(this.co);
        if (this.operation != null) {
            this.potext.innerText = `${this.getDisplayNumber(this.po)} ${this.operation}`;
        } else {
            this.potext.innerText = this.po;
        }
    }
}


const numberButtons = document.querySelectorAll('#dnum');
const operationButtons = document.querySelectorAll('#dop');
const equalButton = document.querySelector('#equal');
const deleteButton = document.querySelector('#del');
const acButton = document.querySelector('#ac');
const potext = document.querySelector('#po');
const coptext = document.querySelector('#co');

const cla = new Calculator(potext, coptext);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        cla.appendNumber(button.innerText);
        cla.updateDisplay();
    });
});
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        cla.chooseOperation(button.innerText);
        cla.updateDisplay();
    });
});
equalButton.addEventListener('click', button => {
    cla.compute();
    cla.updateDisplay();
});
acButton.addEventListener('click', button => {
    cla.clear();
    cla.updateDisplay();
});
deleteButton.addEventListener('click', button => {
    cla.delete();
    cla.updateDisplay();
});