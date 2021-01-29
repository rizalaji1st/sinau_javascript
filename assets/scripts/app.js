const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getUserInput(){
    return parseInt(userInput.value);
}

//Generates
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operator,
    prevResult,
    operationNumber,
    newResult
){
    const logEntry = {
        operation : operator,
        prevResult : prevResult,
        number : operationNumber,
        result : newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult =  currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult, enteredNumber);
    writeToLog('ADD',initialResult, enteredNumber, currentResult);
}

function subtract(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult, enteredNumber);
    writeToLog('SUBTRACT',initialResult, enteredNumber, currentResult);
}

function multiply(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult, enteredNumber);
    writeToLog('MULTIPLY',initialResult, enteredNumber, currentResult);
}

function divide(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult, enteredNumber);
    writeToLog('DIVIDE',initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);