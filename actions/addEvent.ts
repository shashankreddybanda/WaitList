"use server"

import { sql } from '@vercel/postgres';

export async function addEvent(formData: FormData) {

    const name = formData.get('name');
    try {
        await sql`INSERT INTO Events (Name, Owner) VALUES (${name as string}, 'test');`;
    } catch (error) {
        console.error(error);
        
    }

}