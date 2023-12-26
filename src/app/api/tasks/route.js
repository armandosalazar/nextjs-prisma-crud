const { NextResponse } = require('next/server');

function GET(req) {
  return NextResponse.json({ message: 'Hello from /api/tasks' });
}

async function POST(req) {
  return NextResponse.json(await req.json());
}

export { GET, POST };
