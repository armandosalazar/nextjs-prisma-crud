const { NextResponse } = require('next/server');

function GET(req) {
  return NextResponse.json({ message: 'Hello from /api/tasks' });
}

export { GET };
