const numbers = document.querySelectorAll('.numbers');
const result = document.getElementById('result');
const clearButton = document.getElementById('clearButton');
const signs = document.querySelectorAll('.sign');
const equel = document.querySelector('.equel');
const signButton = document.querySelector('.signButton');
const percent = document.querySelector('.percent');

let firstValue = '';
let isFirstValue = false;
let secondValue = '';
let isSecondValue = false;
let sign = '';
let resultvalue = 0;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (event) =>{
        let atr = event.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(atr);
        } else if(isSecondValue === false) { // Use else if to avoid setting both values at once
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el){
    result.innerHTML = '';
    // Only add to firstValue if length is less than MAX_DIGITS
        firstValue += el;
        result.innerHTML = firstValue;
    
}


clearButton.addEventListener('click', function(){
    result.innerHTML = '0';
    firstValue = '';
    secondValue = '';
    sign = '';
    isFirstValue = false;
    isSecondValue = false;
})

function getSecondValue(el){
    if(sign !== ''){ // Only add to secondValue if sign is set
        // Only add to secondValue if length is less than MAX_DIGITS
            secondValue += el;
            result.innerHTML = secondValue;
        
    }
}

function getSign(){
    for(let i = 0; i<signs.length; i++){
        signs[i].addEventListener('click', (element) =>{
            sign = element.target.getAttribute('value'); // Set the sign variable here
            isFirstValue = true;
            isSecondValue = false; // Reset isSecondValue when a sign is clicked
        });
    }
}
getSign();

equel.addEventListener('click', () => {
    result.innerHTML = '';
    if (secondValue === '')
    {resultvalue = parseFloat(firstValue)
    }else if(sign === '+'){
        resultvalue = parseFloat(firstValue) + parseFloat(secondValue); // Use parseFloat to convert the string inputs to numbers
    }else if(sign === '-'){
        resultvalue = parseFloat(firstValue) - parseFloat(secondValue);
    }else if(sign === 'x'){
        resultvalue = parseFloat(firstValue) * parseFloat(secondValue);
    }else if(sign === '/'){
        resultvalue = parseFloat(firstValue) / parseFloat(secondValue);
     }


    result.innerHTML = resultvalue;
    firstValue = resultvalue.toString(); // Convert the result back to a string for concatenation

    secondValue = '';
    sign = '';
    isSecondValue = false; // Reset isSecondValue
    checkResultLength()
});

function checkResultLength(){
    resultvalue = JSON.stringify(resultvalue)
    if(resultvalue.length > 8){
        resultvalue = JSON.parse(resultvalue)
        result.innerHTML = resultvalue.toFixed(5)

    }
}


signButton.addEventListener('click',  () => {
    result.innerHTML = ''
    if(firstValue != ''){
        resultvalue = -firstValue;
        firstValue = resultvalue
    }

    if(firstValue != '' && secondValue != '' && sign != ''){
        resultvalue = -resultvalue
    }

    result.innerHTML = resultvalue
}) 

percent.addEventListener('click', () => {
    result.innerHTML = '';

    if (firstValue !== '') {
        firstValue /= 100;
        resultvalue = firstValue;
        result.innerHTML = resultvalue;
    }

    if (secondValue !== '' ) {
        secondValue /= 100;
        resultvalue = secondValue;
    }

    if (firstValue !== '' && secondValue !== '' && sign !== '') {
        result.innerHTML = resultvalue;
    }
});

// function checkResultLength(){
//     resultvalue = JSON.stringify(resultvalue);
//     if(resultvalue.length > 8){
//         resultvalue = parseFloat(resultvalue).toFixed(8);
//     }
//     result.innerHTML = resultvalue;
// }