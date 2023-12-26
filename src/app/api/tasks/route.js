import { NextResponse } from 'next/server';
import Prisma from '@/libs/prisma';

async function GET() {
  const tasks = await Prisma.task.findMany();

  return NextResponse.json(tasks);
}

async function POST(request) {
  const { title, description } = await request.json();

  const task = await Prisma.task.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(task);
}

export { GET, POST };
