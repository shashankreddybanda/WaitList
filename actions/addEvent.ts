"use server"

import { UserProfile } from '@auth0/nextjs-auth0/client';
import { sql } from '@vercel/postgres';

export async function addEvent(formData: FormData, user: UserProfile) {

    const name = formData.get('name');
    try {
        await sql`INSERT INTO Events (Name, Owner) VALUES (${name as string}, ${user.email});`;
    } catch (error) {
        console.error(error);
        
    }

}