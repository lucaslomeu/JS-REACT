const inputList = document.querySelector('.input-list')
const btnList = document.querySelector('.btn-list')
const list = document.querySelector('.list')

function createLi() {
    const li = document.createElement('li')
    return li
}

function clearInput() {
    inputList.value = ''
    inputList.focus()
}

function createButtonDelete(li) {
    li.innerText += ' '
    const buttonDelete = document.createElement('button')
    buttonDelete.innerText = 'Delete'
    buttonDelete.setAttribute('class', 'delete')
    li.appendChild(buttonDelete)
}

inputList.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) { // 13 == Enter Key
        if (!inputList.value) return
        createList(inputList.value)
    }
})

function createList(textInput) {
    const li = createLi()
    li.innerText = textInput
    list.appendChild(li)
    clearInput()
    createButtonDelete(li)
    saveList()
}

btnList.addEventListener('click', function() {
    if (!inputList.value) return
    createList(inputList.value)
})

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('delete')) {
        el.parentElement.remove()
        saveList()
    }
})

function saveList() {
    const liList = list.querySelectorAll('li')
    const toDoList = []

    for (let list of liList) {
        let listText = list.innerText
        listText = listText.replace('Delete', '').trim()
        toDoList.push(listText)
    }

    const listJSON = JSON.stringify(toDoList)
    localStorage.setItem('lists', listJSON)
}

function addListSaved() {
    const list = localStorage.getItem('lists')
    const toDoList = JSON.parse(list)

    for (let list of toDoList) {
        createList(list)
    }
}

addListSaved()