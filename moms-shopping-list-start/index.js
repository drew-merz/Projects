const shoppingForm = document["addItem"];
const shoppingList = document.getElementById("list");

//submits the item to the list//
shoppingForm.addEventListener("submit", function(e){;
    e.preventDefault();
    var shoppingItemValue = shoppingForm.itemInput.value;
    //creates list container//
    const listContainer = document.createElement("li");
    listContainer.classList.add('list-container')
    shoppingList.appendChild(listContainer);
    //creates div//
    const itemDiv = document.createElement('div');
    itemDiv.textContent = shoppingItemValue + "";
    itemDiv.classList.add('item');
    listContainer.appendChild(itemDiv);
    //creates delete button//
    const deleteButton = document.createElement("button");
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = "X";
    listContainer.appendChild(deleteButton);
    //removes item//
        deleteButton.addEventListener('click', function(e) {;
            deleteButton.parentNode.remove(listContainer);
        });
    //creates edit button//
    const editButton = document.createElement("button");
    editButton.classList.add('edit-button');
    editButton.innerHTML = 'Edit';
    listContainer.appendChild(editButton);
    //opens edit input//
        editButton.addEventListener('click', function(e) {;
            const editInput = document.createElement('input');
            editInput.classList.add('edit-input');
            editInput.textContent = shoppingItemValue + "";
            listContainer.appendChild(editInput);
        });




});




    



 

