import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'enter username ..',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'enter password ..',
				},
			},
			async authorize(credentials, req: Request | any) {
				const password = req.body?.password;
				const username = req.body?.username;
				if (username == 'alexsirait' && password == 'password23') {
					const user: { id: number; name: string; username: string } | any = {
						id: 1,
						name: 'Alex Sirait',
						username: username,
					};
					return user;
				} else {
					return null;
				}
			},
		}),
	],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
