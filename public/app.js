const API_URL = 'http://localhost:5000/api/tasks'

//Obtener y mostrar tareas
const fetchTasks = async () => {
    const res = await fetch(API_URL)
    const tasks = await res.json()
    const taskList = document.getElementById('taskList')
    taskList.innerHTML = ''
    tasks.forEach(task => {
        taskList.innerHTML += `
            <li class="p-4 bg-white shadow rounded flex justify-between items-center">
                <div>
                    <h2 class="font-bold">${task.title}</h2>
                    <p>${task.description}</p>
                </div>
                <div>
                    <button onclick="deleteTask("${task._id}")" class="text-red-500">Borrar</button>
                </div>
            </li>
        `
    })
}

//Crear tarea
document.getElementById('taskForm').addEventListener('submit', async(e) => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'content-Type': 'application/json'},
        body: JSON.stringify({ title, description })
    })

    e.target.reset()
    fetchTasks()
})

//Eliminar tarea
const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {method: 'DELETE'})
    fetchTasks()
}

//inicializar
fetchTasks()