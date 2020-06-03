let signs = document.querySelectorAll('.sign');	
let input = document.querySelector('#input');

for(let sign of signs){
  switch(sign.value){
    case '=':
    sign.addEventListener('click', evalResult);
    break;
    case 'C':
    sign.addEventListener('click', everyClear);
    break;
    case'x!':
    sign.addEventListener('click', factorial);
    break;
    case 'log':
    sign.addEventListener('click', log);
    break;
    case '<':
    sign.addEventListener('click', back);
    break;
    case '1/x':
    sign.addEventListener('click', split);
    break;
    case 'x²':
    sign.addEventListener('click', sqrt);
    break;
    case '√':
    sign.addEventListener('click', radic);
    break;
    case '+/-':
    sign.addEventListener('click', plusmin);
    break;
    default:
    sign.addEventListener('click', addElement);
    break;
    }
}

function evalResult(){  
  if(isNaN(eval(calc.input.value)) || eval(calc.input.value) == undefined || eval(calc.input.value) == null){
    alert('Введите числовое выражение')
  } else {
    calc.input.value = eval(calc.input.value);
  }
}

function everyClear(){
  calc.input.value = '';
}

function factorial(){
  let num = Number(calc.input.value);
  let result = 1;
  while(num){
    result *= num--;
  }
  calc.input.value = result;
}

function log(){
  calc.input.value = Math.log(Number(calc.input.value));
}

function back(){
  let arr = (calc.input.value).split('');
  arr.splice(length - 1, 1);
  calc.input.value = arr.join('');
}


function split(){
  calc.input.value = 1/Number(calc.input.value);
}

function sqrt(){
  calc.input.value = Math.pow(Number(calc.input.value), 2);
}

function radic(){
  calc.input.value = Math.sqrt(Number(calc.input.value));
}

function plusmin(){
  if(Number(calc.input.value) == -Number(calc.input.value)) {
    calc.input.value = Number(calc.input.value);
  } else {
    calc.input.value = -Number(calc.input.value);
  }
}

function addElement(e){
  if(this.value == undefined){
    calc.input.value += e; 
  } else {
    calc.input.value += this.value;
  }
}

document.addEventListener('keydown', function(e){
  e.preventDefault();
  if(e.code == 'Enter' || e.key == '=') evalResult();
  if(e.code == 'Backspace') back();
  if(e.code == 'KeyC') everyClear();
  if(e.key == '0') addElement(0);
  if(e.key == '1') addElement(1);
  if(e.key == '2') addElement(2);
  if(e.key == '3') addElement(3);
  if(e.key == '4') addElement(4);
  if(e.key == '5') addElement(5);
  if(e.key == '6') addElement(6);
  if(e.key == '7') addElement(7);
  if(e.key == '8') addElement(8);
  if(e.key == '9') addElement(9);
  if(e.key == '+') addElement('+');
  if(e.key == '-') addElement('-');
  if(e.key == '/') addElement('/');
  if(e.key == '*') addElement('*');
  if(e.key == '.') addElement('.');
})
