import { NextResponse } from 'next/server';
import { auth } from '@/auth';

interface UserType {
  name: string;
  image?: string;
  accountType: 'guest' | 'student' | 'administrator'; // Sesuaikan tipe dengan nilai yang benar
}

export async function verifyAdmin() {
  const session = await auth();

  // Pastikan session benar-benar memiliki properti user dan accountType
  const user = (session as { user?: UserType })?.user;

  if (!user || user.accountType !== 'guest') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return session;
}
