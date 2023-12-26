'use client';
import { useRouter } from 'next/navigation';

function TaskCard({ task }) {
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
      className="bg-slate-900 p-5 hover:bg-slate-800 hover:cursor-pointer"
    >
      <h2 className="text-2xl font-bold">{task.title}</h2>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </article>
  );
}

export default TaskCard;
