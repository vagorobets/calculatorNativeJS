let signs = document.querySelectorAll('.sign');	
let input = document.querySelector('#input');

for(let sign of signs){
if(sign.value == '='){
  sign.addEventListener('click', evalResult);
} else if(sign.value == 'C'){
  sign.addEventListener('click', everyClear);
} else if(sign.value == 'x!'){
  sign.addEventListener('click', factorial);
} else if(sign.value == 'log'){
  sign.addEventListener('click', log);
} else if(sign.value == '<'){
  sign.addEventListener('click', back);
} else if(sign.value == '1/x'){
  sign.addEventListener('click', split);
} else if(sign.value == 'x²'){
  sign.addEventListener('click', sqrt);
} else if(sign.value == '√'){
  sign.addEventListener('click', radic);
} else if(sign.value == '±'){
  sign.addEventListener('click', plusmin);
} else {
  sign.addEventListener('click', addElement);
}
}


function evalResult(){
  if(isNaN(eval(calc.input.value)) || eval(calc.input.value) == undefined || eval(calc.input.value) == null){
    alert('Введите числовое выражение')
  } else {
    calc.input.value = eval(calc.input.value);
  }
}

document.addEventListener('keydown', function(e){
  if(e.code == 'Enter') evalResult();
})

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

function addElement(){
  calc.input.value += this.value;
}


