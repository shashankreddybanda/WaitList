"use server"

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function getAttendees(event_id: string) {

    var attendees;
    try {
        attendees = await sql`SELECT * FROM Attendees WHERE event_id=${event_id}`;
    } catch (error) {
        console.error(error);
    }
    revalidatePath(`/events/${event_id}`)
    return attendees;
}