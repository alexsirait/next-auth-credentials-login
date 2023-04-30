'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

export default function UserClient() {
	const { data } = useSession();
	return (
		<div>
			<h1>Client</h1>
			<span>{data?.user?.name}</span>
		</div>
	);
}
