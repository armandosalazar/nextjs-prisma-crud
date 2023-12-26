import Prisma from '@/libs/prisma';

async function loadTask() {
  // get data with fetch
  // const res = await fetch('http://localhost:3000/api/tasks');
  // const data = await res.json();
  // console.log(data);

  // get data with prisma
  return await Prisma.task.findMany();
}

export default async function Home() {
  const tasks = await loadTask();
  console.log(tasks);

  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold my-5">Home page</h1>
      <section className="grid grid-cols-3 gap-3">
        {tasks.map((task) => {
          return (
            <article
              key={task.id}
              className="bg-slate-900 p-5 hover:bg-slate-800 hover:cursor-pointer"
            >
              <h2 className="text-2xl font-bold">{task.title}</h2>
              <p>{task.description}</p>
              <p>{new Date(task.createdAt).toLocaleDateString()}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
