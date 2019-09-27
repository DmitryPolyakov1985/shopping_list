const inputField = document.getElementById("inputField");
const addListItemBtn = document.getElementById("addListItemBtn");
const ul = document.getElementById("myList");

//creates li elements
function createLi() {
    const li = document.createElement("li");
    li.innerHTML = "<span>" + inputField.value + "</span>";

    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "buttonDiv");
    li.appendChild(buttonDiv);

    //add Done button to li
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.setAttribute("id", "done");
    buttonDiv.appendChild(doneButton);
    
    //add Delete button to li
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", "delete");
    buttonDiv.appendChild(deleteButton);

    //append li to ul
    ul.appendChild(li);
    inputField.value = "";
}
//function to addList item on click
function addListItemOnClick() {
    if(inputField.value.length > 0) {
        createLi();
    }
}
//function to add list item on Enter keypress
function addListItemOnEnterPress(e) {
    if(inputField.value.length > 0 && e.keyCode === 13) {
        createLi();
    }
}

//delete list items and toggle strikethrough
ul.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON") {
        if(e.target.textContent === "Delete") {
            const button = e.target;
            const li = button.parentNode.parentNode;
            const ul = li.parentNode;
            ul.removeChild(li);
        } else if(e.target.textContent === "Done") {
            const button = e.target;
            const liTextContent = e.target.parentNode.previousElementSibling;
            liTextContent.classList.add("strikeThrough");
            button.textContent = "Undo";
            
        } else if(e.target.textContent === "Undo") {
            const button = e.target;
            const liTextContent = e.target.parentNode.previousElementSibling;
            liTextContent.classList.remove("strikeThrough");
            button.textContent = "Done";
        }

    }
});

addListItemBtn.addEventListener("click", addListItemOnClick);
inputField.addEventListener("keypress", addListItemOnEnterPress);