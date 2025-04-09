import React,{useState} from 'react'
import styles from './TodoList.module.css'

const TodoList = () => {
const [task, setTask] = useState("")
const [tasks, setTasks] = useState([])

const addTask = () =>{
    if(task.trim()=== "") return;
    setTasks([...tasks,task])
    setTask("")
}

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Lista de Tarefas</h2>
        <div className={styles.inputContainer}>
            <input
              type="text"  
              placeholder='Adicione uma tarefa'
              className={styles.input}
              value = {task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onclick={addTask} className={styles.button}>Adicionar</button>
            
        </div>
        <ul className={styles.taskList}>
            <li className={styles.taskItem}>Tarefas</li>
        </ul>
    </div>
  )
}

export default TodoList