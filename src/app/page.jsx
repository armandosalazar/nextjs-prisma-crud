import Prisma from '@/libs/prisma';
import TaskCard from '@/components/TaskCard';

export const dynamic = 'force-dynamic';

async function loadTask() {
  // get data with fetch
  // const res = await fetch('http://localhost:3000/api/tasks');
  // const data = await res.json();
  // console.log(data);

  // get data with prisma
  return await Prisma.task.findMany();
}

export default async function HomePage() {
  const tasks = await loadTask();
  console.log(tasks);

  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold my-5">Home page</h1>
      <section className="grid grid-cols-3 gap-3">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </section>
    </main>
  );
}
