"use server"

import { sql } from "@vercel/postgres";

export default async function addAttendees(values: any, event_id: string) {

    const name = values.name
    const email = values.email
    const phone = values.phone

    
    
    try {
        await sql`INSERT INTO Attendees (Name, Email, Phone_number, Event_id) VALUES (${name as string}, ${email as string}, ${phone as string}, ${event_id});`;
    } catch (error) {
        console.error(error);
        
    }
}