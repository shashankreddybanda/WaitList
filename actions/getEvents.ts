"use server"

import { Session } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';

export async function getEvents( user: Session|null|undefined) {

    var events;
    try {
        if(user){
            events = await sql`SELECT * FROM Events WHERE Owner=${user?.user.email}`;
        }
    } catch (error) {
        console.error(error);
        
    }
    return events;
}