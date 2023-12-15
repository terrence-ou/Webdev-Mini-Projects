export default function Stats({ todoList }){

  const results = Object.values(todoList).map((item) => item.completed);
  const totalTasks = results.length;
  const completedTasks = results.filter(value => value === true).length;

  return (
    <section>
      <h2>Task Completed: {completedTasks}/{totalTasks}</h2>
    </section>
  )
}
