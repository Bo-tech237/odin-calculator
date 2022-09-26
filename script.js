const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector('.input');

buttons.forEach(button => {
  button.addEventListener('click', enterValue);
});

function enterValue(e){
  if (!(e.target.value === "Clear" || e.target.value === "Delete" || e.target.value === "=")){
    screen.value = screen.value + e.target.value;  
  } else if (e.target.value === "Clear"){
    clearScreen();
  } else if (e.target.value === "Delete") {
    deleteScreen();
  } else if (e.target.value === "="){
    return calculate();
  }
}

function clearScreen(){
  screen.value = "";
}

function deleteScreen(){
  let string = screen.value;
  screen.value = string.slice(0, -1);
}

function calculate(){
  let result = Function('return ' + screen.value);
  screen.value = result();
}
