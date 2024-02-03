import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useQRCode } from "next-qrcode"


export default function QRDialog({id}:{id:string}) {

    const {Canvas} = useQRCode()
    const url = process.env.NEXT_PUBLIC_BASE_URL + `/events/${id}/join`

    return (
        <Dialog>
            <DialogTrigger className=" bg-slate-900 text-gray-100 px-4 rounded-md">Qr Code</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>QR Code for the waitlist</DialogTitle>
                    <DialogDescription>
                        Use this QR code to redirect attendees to the join-in form for your waitlist.
                    </DialogDescription>
                </DialogHeader>
                <Canvas
                text={url}
                />
            </DialogContent>
        </Dialog>

    )
}