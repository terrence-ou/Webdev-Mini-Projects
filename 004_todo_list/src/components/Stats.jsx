export default function Stats({ todoList }){

  const results = Object.values(todoList).map((item) => item.completed);
  const totalTasks = results.length;
  const completedTasks = results.filter(value => value === true).length;

  return (
    <section
      className="my-3 font-serif font-bold tracking-tight text-xl text-zinc-500"
    >
      <h2>Tasks Completed <span className="ml-4">{completedTasks}/{totalTasks}</span></h2>
    </section>
  )
}
