import prisma from '@/prisma/prisma'; // pastikan prisma sudah di-setup
import { NextResponse } from 'next/server';
import { verifyAdmin } from '@/lib/auth-helper';

// Mengambil data user
export async function GET() {
  const verify = await verifyAdmin()
  if (verify instanceof NextResponse) return verify

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      accountType: true,
      createdAt: true,
      userGroups: true
    },
  });

  return NextResponse.json(users);
}

// Menambah user baru
export async function POST(req: Request) {
  const verify = await verifyAdmin()
  if (verify instanceof NextResponse) return verify

  const { name, email, accountType } = await req.json();
  console.log(accountType)

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        accountType,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
  }
}
