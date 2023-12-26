import { NextResponse } from 'next/server';
import Prisma from '@/libs/prisma';

export async function GET(_request, { params: { id } }) {
  const task = await Prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(task);
}

export function PUT(request, { params: { id } }) {
  return NextResponse.json({
    message: `Hello from /api/tasks/[${id}]`,
    id: id,
  });
}

export function DELETE(request, { params: { id } }) {
  return NextResponse.json({
    message: `Hello from /api/tasks/[${id}]`,
    id: id,
  });
}
