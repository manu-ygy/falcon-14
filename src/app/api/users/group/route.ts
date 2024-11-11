import prisma from '@/prisma/prisma'; // pastikan prisma sudah di-setup
import { NextResponse } from 'next/server';
import { verifyAdmin } from '@/lib/auth-helper';

// Mengambil data user
export async function GET() {
  const verify = await verifyAdmin()
  if (verify instanceof NextResponse) return verify

  const groups = await prisma.group.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      _count: {
        select: {
          users: true, // Menghitung jumlah pengguna di dalam grup
        },
      }  
    },
  });

  console.log(groups)

  return NextResponse.json(groups);
}

// Menambah user baru
export async function POST(req: Request) {
  const verify = await verifyAdmin()
  if (verify instanceof NextResponse) return verify

  const { name } = await req.json();

  try {
    const newGroup = await prisma.group.create({
      data: {
        name
      },
    });

    return NextResponse.json(newGroup);
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error creating group' }, { status: 500 });
  }
}
