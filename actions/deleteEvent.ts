"use server"

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function deleteEvent(eventId:any) {

    try {
        await sql`DELETE FROM Events WHERE id=${eventId};`;
    } catch (error) {
        console.error(error);
    }
    revalidatePath('/events')
}