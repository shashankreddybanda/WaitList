"use server"

import { Session } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';

export async function getEvent( user: Session|null|undefined, id:string) {

    var event;
    var eventName;
    try {
        if(user){
            event = await sql`SELECT * FROM Events WHERE Owner=${user?.user.email} AND Id=${id}`;
            if(event.rowCount>0)
            eventName = event.rows[0].name;
        }
    } catch (error) {
        console.error(error);
        
    }
    return eventName;
}