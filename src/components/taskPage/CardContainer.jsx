import Card from "./Card";

export default function CardContainer({ title, tasks }) {
  return (
    <div style={{ flex: 1, margin: "0 10px" }}>
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <Card key={index} task={task} />
      ))}
    </div>
  );
}