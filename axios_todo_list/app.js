const todoForm = document.todoform
function getData(){
    axios.get("https://api.vschool.io/andrewmerz/todo")
        .then(res => displayData(res.data))
        .catch(err => console.log(err))
}
function displayData(data){
    clearList()
    for(let i = 0; i < data.length; i++){
        const listContainer = document.createElement('div')
        document.getElementById('todo-list').appendChild(listContainer)


        let todoTitle = document.createElement('h3')
        todoTitle.textContent = data[i].title
        listContainer.appendChild(todoTitle)
        
        const descriptionBox = document.createElement('li')
        descriptionBox.textContent = data[i].description
        listContainer.appendChild(descriptionBox)

        const price = document.createElement('h4')
        price.textContent = '$' + data[i].price 
        listContainer.appendChild(price)
        
        const image = document.createElement('img')
        image.src = data[i].imgUrl
        listContainer.appendChild(image)

        const checkedBox = document.createElement('input')
        checkedBox.setAttribute('type', 'checkbox')
        listContainer.appendChild(checkedBox)

        checkedBox.addEventListener("change", function(e){
            axios.put("https://api.vschool.io/andrewmerz/todo/" + data[i]._id,{
                completed: checkedBox.checked
            })
            .then(result => {
                if(checkedBox.checked) {
                    listContainer.style.textDecoration = "line-through"
                    completed = true
                } else {
                    listContainer.style.textDecoration = "none"
                    completed = false
                }
            })
            .catch(error => console.log(error))
        })
      
        const deleteButton = document.createElement('button')
        deleteButton.textContent = "Delete"
        deleteButton.style.backgroundColor = "cyan"
        listContainer.appendChild(deleteButton)
        deleteButton.addEventListener('click',  function(e){
            axios.delete("https://api.vschool.io/andrewmerz/todo/" + data[i]._id)
            .then(res => document.getElementById('todo-list').removeChild(listContainer))
            .catch(err => console.log(error))
        })
        listContainer.appendChild(deleteButton)
        
    }
}

todoForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgurl.value
    }
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgurl.value = ""
    axios.post("https://api.vschool.io/andrewmerz/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})


function clearList() {
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()