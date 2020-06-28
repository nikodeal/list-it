
let listName = document.getElementById('list-name-input');
let liNamePageTwo = document.getElementById('list-name-page-two');
let input = document.getElementById('list-input-adder');
let secondPage = document.getElementById('page-no2');
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");
let firstPage = document.getElementById('page-no1');
let firstPageBtn = document.getElementById('first-page-btn');
let firstPageInputError = document.getElementById('first-page-input-error');


function inputLength(){
  return input.value.length;
}

function listLength(){
  return item.length;
}


function createListElement(){
 
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
   
    input.value = "";
   
   
    function crossOut(){
      li.classList.toggle("done");
    }
      li.addEventListener("click", crossOut);
   
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
  
   
  
    function deleteListItem(){
      li.classList.add("delete");
    }
  
  }
  
  function check(){
    if(input.value.length > 0){
       createListElement();
       }
  }
  

const changeFirstPage = () => {
    if (listName.value.length >= 3) {
        firstPage.style.display = "none";
        secondPage.style.display = "block";
        liNamePageTwo.innerHTML = listName.value;
    } else {
        firstPageInputError.innerHTML = "List name too short"
    }
};
firstPageBtn.addEventListener('click', changeFirstPage);

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();

    }
}

input.addEventListener("keypress", addListAfterKeypress);
