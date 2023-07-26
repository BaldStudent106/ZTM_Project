var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemList = document.getElementsByTagName("li");
var deleteList = document.getElementsByTagName("button");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function createDeleteButton(){
	var deletebut = document.createElement("button");
	deletebut.appendChild(document.createTextNode("Delete"));
	ul.appendChild(deletebut);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		createDeleteButton();
	}
	addAllToggle();
	addAllDelete();
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		createDeleteButton();
	}
	addAllToggle();
	addAllDelete();
}

function toggleDone(event){
	event.target.classList.toggle("done");
}

function deleteItem(event){
		event.target.previousElementSibling.remove();
		event.target.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function addAllToggle (){
Array.from(itemList).forEach(element => {
	element.addEventListener("click",toggleDone);
});
}

function addAllDelete(){
Array.from(deleteList).forEach(element => {
	element.addEventListener("click",deleteItem);
});
}

addAllToggle();
addAllDelete();