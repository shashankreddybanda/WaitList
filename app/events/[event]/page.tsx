import { getEvent } from "@/actions/getEvent";
import Event from "./event";
import { getSession } from "@auth0/nextjs-auth0";
import { getAttendees } from "@/actions/getAttendees";


export default async function page({ params }: { params: { event: string } }) {

    const user = await getSession()
	const eventName = await getEvent(user, params.event)
    const attendeesPromise = await getAttendees(params.event)
    const attendees = attendeesPromise?.rows
    
    if(eventName)
    return (
        <Event eventName={eventName} id={params.event} attendees={attendees}/>
    )

    return(
        <div className="p-16 text-3xl text-gray-500">
            There is no event with this id.
        </div>
    )
}