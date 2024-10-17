let curr = '';  // current input
let oper = '';  // current operator
let prev = '';  // previous input

// adding number to the screen
function addNum(num) {
    curr += num;
    updDisp();
}

// sets the operator
function setOper(operator) {
    if (curr === '' && prev === '') return;

    if (curr === '' && prev !== '') {
        oper = operator;
        return;
    }

    if (prev === '') {
        prev = curr;
        oper = operator;
        curr = '';
    } else {
        calcRes();
        oper = operator;
    }
}

// updates the display
function updDisp() {
    document.getElementById('display').value = curr || prev;
}

// clears everything
function clrDisp() {
    curr = '';
    prev = '';
    oper = '';
    updDisp();
}

// calculates the result
function calcRes() {
    let res;
    const p = parseFloat(prev);
    const c = parseFloat(curr);

    if (isNaN(p) || isNaN(c)) return;

    switch (oper) {
        case '+':
            res = p + c;
            break;
        case '-':
            res = p - c;
            break;
        case '*':
            res = p * c;
            break;
        case '/':
            res = p / c;
            break;
        default:
            return;
    }

    curr = res.toString();
    prev = '';
    oper = '';
    updDisp();
}


