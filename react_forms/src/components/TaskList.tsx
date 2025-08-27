import TaskItem from './TaskItem';

export default function TaskList({ tasks, handleDeleteTask, handleCompleted }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleCompleted={handleCompleted}
        />
      ))}
    </ul>
  )
}