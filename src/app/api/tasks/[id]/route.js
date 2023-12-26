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

export async function PUT(request, { params: { id } }) {
  try {
    const data = await request.json();

    const task = await Prisma.task.update({
      where: {
        id: Number(id),
      },
      data: data,
    });

    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({
      error: error.meta.cause,
    });
  }
}

export async function DELETE(_request, { params: { id } }) {
  try {
    const task = await Prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({
      error: error.meta.cause,
    });
  }
}
