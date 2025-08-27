export default function TaskItem({ task, handleDeleteTask, handleCompleted }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => handleCompleted(task.id)}>Marcar concluída</button>
      <button onClick={() => handleDeleteTask(task.id)}>Apagar</button>
    </li>
  )
}
