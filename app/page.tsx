import { authOptions } from './api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import Button from './components/Button';
import { redirect } from 'next/navigation';
import UserClient from './components/UserClient';

export default async function page() {
	const session = await getServerSession(authOptions);
	if (session === null) {
		return redirect('api/auth/signin');
	} else {
		return (
			<>
				<h1>Server</h1>
				<span>{session?.user?.name != null ? session?.user?.name : '-'}</span>
				<UserClient />
				<Button session={session} />
			</>
		);
	}
}
