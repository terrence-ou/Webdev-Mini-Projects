import TaskItems from "./TaskItems.jsx";


const DATE_FORMAT = {
  weekday: "long",
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC"
}

export default function ListsByDate( {todoList, handleComplete, handleDelete} ){

  // If the list is empty, display "No Tasks"
  if (Object.keys(todoList).length === 0){
    return (
      <h2 className="font-sans text-zinc-300">
        No Upcoming Tasks
      </h2>
    )
  }

  // Reorganize the todoList by date
  const reoderedList = new Object();
  for (const [key, value] of Object.entries(todoList)){
    if (value.date in reoderedList){
      reoderedList[value.date].push({...value, id: key});
    } else {
      reoderedList[value.date] = [{...value, id: key}];
    }
  }

  // Sort date in descending order
  const sortedDates = Object.keys(reoderedList).sort((a, b) => {
    const day_a = Number(a.split("-").join(""));
    const day_b = Number(b.split("-").join(""));
    return day_a - day_b;
  });

  // Generate HTML elements
  return (
    <section>
      {sortedDates.map((date) => {
        let formatedDate = new Date(date).toLocaleString("en-US", DATE_FORMAT);
        formatedDate = formatedDate.split(",").join(" ");
        return (
          <div key={date}>
            <h3
              className="mt-6 text-md font-sans font-medium tracking-tight text-zinc-600"
            >
              {formatedDate}
            </h3>
            <TaskItems
              tasks={reoderedList[date]}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          </div>
        )
      })}
    </section>
  )
}
