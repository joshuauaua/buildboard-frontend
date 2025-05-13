import TaskCard from "./TaskCard";

export default function Column({ column, tasks, onCardClick }) {
  return (
    <div className="column">
      <h2>{column.name}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onClick={() => onCardClick(task)} />
      ))}
    </div>
  );
}