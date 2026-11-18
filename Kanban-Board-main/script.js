const todo = document.querySelector("#todo")
const progress = document.querySelector("#progress")
const done = document.querySelector("#done")
let dragElement = null
const tasks = document.querySelectorAll(".task")


tasks.forEach(task =>{
    task.addEventListener("drag", (e)=>{
        dragElement = task;
    })
    
})


// progress.addEventListener("dragenter", (e)=>{
//     progress.classList.add("hover-over");

// })


// progress.addEventListener("dragleave", (e)=>{
//     progress.classList.remove("hover-over");

// })


function addDragEventsOnColumn(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        column.classList.add("hover-over")

    })

    column.addEventListener("dragleave",(e)=>{
        e.preventDefault();
        column.classList.remove("hover-over")
    })

    column.addEventListener("dragover", (e)=>{
        e.preventDefault();

    })

    column.addEventListener("drop", (e)=>{
        // console.log(dragElement)

        column.appendChild(dragElement);
        column.classList.remove("hover-over")

    })
}

addDragEventsOnColumn(todo)
addDragEventsOnColumn(progress)
addDragEventsOnColumn(done)

const toggelModalButton = document.querySelector("#toggel-modal")
const bg = document.querySelector(".modal .bg")
const modal = document.querySelector(".modal")
const addTaskButton = document.querySelector("#add-new-task")

toggelModalButton.addEventListener("click", () => {
        modal.classList.toggle("active")

})

bg.addEventListener("click", () => {
        modal.classList.remove("active")

})

addTaskButton.addEventListener("click", ()=>{

     const taskTitle = document.querySelector("#task-title-input").value
     const taskDesc = document.querySelector("#task-desc-input").value

     const div = document.createElement("div")
     div.classList.add("task")
     div.setAttribute("draggable", "true")
     div.innerHTML= `<h2>${taskTitle}</h2>
                     <p>${taskDesc}</p>
                     <button>Delete</button>` 
     
     todo.appendChild(div)
     modal.classList.remove("active")                


    //  const template = ` <div class="task" draggable="true">
    //                 <h2>${taskTitle}</h2>
    //                 <p>${taskDesc}</p>
    //                 <button>
    //                     Delete
    //                 </button>
    //             </div>`

    //             todo.appendChild

})


