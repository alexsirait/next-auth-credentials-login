import { authOptions } from './auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
	const session = await getServerSession(authOptions);
	return NextResponse.json({ auth: !!session });
};
