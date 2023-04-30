'use client';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';

export default function Button({ session }: any) {
	return (
		<div>
			{session == null ? (
				<button onClick={() => signIn()}>Sign in</button>
			) : (
				<button onClick={() => signOut()}>Sign out</button>
			)}
		</div>
	);
}
