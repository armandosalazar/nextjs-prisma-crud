'use client';
import { useRouter } from 'next/navigation';

export default function New() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;

    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    const data = await res.json();

    router.push('/');
  }

  return (
    <main className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
      >
        <label htmlFor="title" className="text-gray-400 font-bold text-sm">
          Title of the task
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter a title "
          className="p-2 mb-4 w-full text-sm outline-none text-slate-900"
        />
        <label
          htmlFor="description"
          className="text-slate-400 font-bold text-sm"
        >
          Description of the task
        </label>
        <textarea
          rows="3"
          id="description"
          placeholder="Enter a description"
          className="p-2 mb-4 w-full text-sm outline-none text-slate-900"
        ></textarea>
        <button
          type="submit"
          className="text-sm bg-blue-500 py-2 w-full font-bold rounded-md"
        >
          Create
        </button>
      </form>
    </main>
  );
}
