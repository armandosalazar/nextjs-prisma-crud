'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data = await res.json();
      console.log(data);
    } else {
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
      console.log(data);
    }

    router.refresh();
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 mb-4 w-full text-sm outline-none text-slate-900"
        ></textarea>
        <button
          type="submit"
          className="text-sm bg-blue-500 py-2 w-full font-bold rounded-md"
        >
          {params.id ? 'Update' : 'Create'}
        </button>
      </form>
    </main>
  );
}
