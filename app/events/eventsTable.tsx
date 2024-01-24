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
import Link from "next/link"

export default function EventsTable(data: any) {
    const events = data.data
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Event Name</TableHead>
                    <TableHead>Owner</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {events.map((event: any) => (
                    <TableRow>
                        <TableCell>
                            <Link href={`/events/${event.id}`}>
                                {event.name}
                            </Link>
                        </TableCell>
                        <TableCell>{event.owner}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    )
}