import { addEvent } from '@/actions/addEvent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getSession } from '@auth0/nextjs-auth0';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export default async function CreateForm() {

    const user = await getSession();

    async function handleSubmit(formData: FormData) {
        "use server"
        await addEvent(formData, user);
        revalidatePath("/events")
        // redirect('/events')
    }

    return (user &&
        <Dialog>
            <DialogTrigger className=" bg-slate-900 text-gray-100 px-4 rounded-md">Create</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create an event</DialogTitle>
                    <DialogDescription>
                        Create an event here to start acepting users.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 border-2 rounded-md p-8">
                    <form action={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label>Event Name</label>
                            <div>
                                <Input type='text' name='name' placeholder='Name' />
                            </div>
                        </div>
                        <DialogClose asChild>
                            <Button type="submit" className="py-2 px-3 w-min">Submit</Button>
                        </DialogClose>
                    </form>
                </div>
            </DialogContent>
        </Dialog>

    )
}
