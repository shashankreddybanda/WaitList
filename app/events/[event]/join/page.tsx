import { getEvent } from "@/actions/getEvent"
import { getSession } from "@auth0/nextjs-auth0"

export default async function join({params} : {params : {event: string}}){

    const user = await getSession()
	const eventName = await getEvent(user, params.event)

    if(eventName)
    return(
        <div className="p-16">
            <div className="flex flex-col border-2 rounded-md p-8">
                <div>
                    <span className="text-xl">Enter details to join the queue: {params.event}</span>
                </div>
            </div>
        </div>
    )

    return(
        <div className="p-16 text-3xl text-gray-500">
            There is no event with this id.
        </div>
    )
}