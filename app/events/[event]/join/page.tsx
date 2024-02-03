import { getEventWithoutUser } from "@/actions/getEventWitoutUser"
import JoinForm from "./joinForm"

export default async function join({ params }: { params: { event: string } }) {

    const eventName = await getEventWithoutUser(params.event)

    if (eventName)
        return (
            <div className="p-16">
                <div className="flex flex-col gap-4 border-2 rounded-md p-8">
                    <div>
                        <span className="text-xl">Enter details to join the wait-list: {eventName}</span>
                    </div>
                    <JoinForm event_id={params.event}/>
                </div>
            </div>
        )

    return (
        <div className="p-16 text-3xl text-gray-500">
            There is no event with this id.
        </div>
    )
}