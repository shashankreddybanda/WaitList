"use client"

import { deleteEvent } from "@/actions/deleteEvent"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TrashIcon } from "lucide-react"
import Link from "next/link"

export default function EventsTable(data: any) {
    const events = data.data
    return (events &&
        <Table className=" p-0">
            <TableHeader>
                <TableRow>
                    <TableHead className=" p-0">Event Name</TableHead>
                    <TableHead>Owner</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {events.map((event: any) => (
                    <TableRow key={event.id} >
                        <TableCell className=" p-0">
                            <Link href={`/events/${event.id}`}>
                                {event.name}
                            </Link>
                        </TableCell>
                        <TableCell>{event.owner}</TableCell>
                        <TableCell className="flex justify-end"><Button onClick={()=> deleteEvent(event.id)}><TrashIcon className=" cursor-pointer bg-gray-800 stroke-slate-100 p-2 rounded-md h-8 w-8 stroke-2"></TrashIcon></Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    )
}