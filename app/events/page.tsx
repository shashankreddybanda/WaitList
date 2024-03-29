import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getSession } from "@auth0/nextjs-auth0";
import EventsTable from "./eventsTable";
import { getEvents } from "@/actions/getEvents";
import CreateForm from "./createForm";

export default async function Events() {
	const user = await getSession();
	const events = await getEvents(user);
	if(user)
	return (
		<div className="p-16">
			<div className="flex justify-between">
				<p className=" text-2xl">Events</p>
				<Button asChild>
				<CreateForm/>
				</Button>
			</div>
			<EventsTable data={events?.rows}/>
		</div>
	)
}
