// declaring variables
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");
let array = [];
let errorMassage= "";

// get input value

button.addEventListener("click",addItem);
input.addEventListener("keypress",addItemKeypress);
//add item with pressing enter key
function addItemKeypress(event){
    if(event.keyCode === 13){
         addItem();
    }
}

function validateInput(){
    input.value= input.value.trim("")
    if(input.value !== ""){
    // loop through array and if array item is equal to value return false
    for(let i = 0; i<array.length;i++){
        if (array[i] === input.value){
          //it is duplicated
          errorMassage = "This item is already in your list.";
          return false;
        }
        
       } 
        return true;
    }
    errorMassage = "Please enter some items!"
   return false;
}

function addItem(){
    if(validateInput()){
        //add input to array for validation checks
        array.push(input.value);
    let li = document.createElement("li");
    // add input value
    li.innerText = input.value;
    ul.appendChild(li);
    clearInput();
   } else{
    clearInput();
    alert(errorMassage);
   }
}
function clearInput(){
    input.value = "";
    input.placeholder ="enter new item";
    input.focus();
}

// function: create a new list element and it to the list item