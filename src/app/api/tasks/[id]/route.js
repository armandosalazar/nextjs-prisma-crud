import { NextResponse } from 'next/server';

export function GET(request, { params: { id } }) {
  return NextResponse.json({
    message: `Hello from /api/tasks/[${id}]`,
    id: id,
  });
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
