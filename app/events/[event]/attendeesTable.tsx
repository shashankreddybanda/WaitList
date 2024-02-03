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

export default async function AttendeesTable({attendees}:{attendees: any}) {
    return (attendees &&
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Attendees</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {attendees?.map((attendee: any) => (
                    <TableRow key={attendee.id}>
                        <TableCell>{attendee.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    )
}