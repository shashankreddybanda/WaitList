"use server"

import { sql } from '@vercel/postgres';

export async function getEventWithoutUser(id: string) {

    var event;
    var eventName;
    try {
        event = await sql`SELECT * FROM Events WHERE Id=${id}`;
        if (event.rowCount > 0)
            eventName = event.rows[0].name;
    } catch (error) {
        console.error(error);

    }
    return eventName;
}