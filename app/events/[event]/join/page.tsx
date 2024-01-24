import { getEventWithoutUser } from "@/actions/getEventWitoutUser"

export default async function join({params} : {params : {event: string}}){

	const eventName = await getEventWithoutUser( params.event)

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