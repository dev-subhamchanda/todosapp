//elements target
let createTodo = document.getElementById('createTodo')
let inputBox = document.getElementById('inputBox')
let mainBox = document.getElementById('mainBox')
let doneTodo = document.getElementById('done')
let cancelTodo = document.getElementById('cancel')
let TodoTitle = document.getElementById('title')
let TodoDesc = document.getElementById('desc')
let showTodo = document.getElementById('showTodo')
let todoView = document.getElementById('todoFullview')
let closeFullview= document.getElementById('closeWindow')
let TitleContent = document.getElementById('todoTitlec')
let DescriptionContent = document.getElementById('todoDescc')

//functions
const wakeInput = (e) => {
    e.preventDefault()
    mainBox.classList.toggle("hidden")
    inputBox.classList.toggle("hidden")
    
}

const addToList = (title , desc) => {
    
    showTodo.innerHTML = showTodo.innerHTML +
        `<div class="todos box-border bg-slate-200 h-16 rounded-xl p-2 shadow-xl flex justify-between cursor-pointer mt-5">
        <h2 class="font-semibold">${TodoTitle.value}</h2>
    <a id="delete" class="text-red-700 font-bold text-2xl  hover:text-slate-950">&Cross; </a>
    </div>
    `
}

const done = (e) => {
    e.preventDefault()
    if (TodoTitle.value == '') {
        alert("Can't create todo without a title. Please insert a title to you todo");
    }
    else {
        mainBox.classList.toggle("hidden")
        inputBox.classList.toggle("hidden")
        addToList(TodoTitle.value , TodoDesc.value)
        localStorage.setItem(`${TodoTitle.value}` ,`${TodoDesc.value}`)
        TodoTitle.value = ''
        TodoDesc.value = ''

    }
}

const cancel = (e) => {
    e.preventDefault()
    mainBox.classList.toggle("hidden")
    inputBox.classList.toggle("hidden")
}

const todoFullview = (activeTitle , activeDesc) =>{
    TitleContent.textContent = activeTitle
    DescriptionContent.textContent = activeDesc
    todoView.classList.toggle('hidden')
    mainBox.classList.toggle('hidden')
}

const removeTodo = (e) => {
    e.preventDefault()
    if (e.target.tagName === 'H2'){
        let Title = e.target.parentElement.firstElementChild.textContent
        let Desc = localStorage.getItem(Title)
        todoFullview(Title , Desc)
    }
    else if (e.target.tagName === 'A') {
        e.target.parentElement.remove()
    }
}

const FullviewClose = (e) =>{
    e.preventDefault()
    todoView.classList.toggle('hidden')
    mainBox.classList.toggle('hidden')
}


//custom alert functions



//events
createTodo.addEventListener('click', wakeInput)
doneTodo.addEventListener('click', done)
cancelTodo.addEventListener('click', cancel)
showTodo.addEventListener('click', removeTodo) 
closeFullview.addEventListener('click', FullviewClose)


