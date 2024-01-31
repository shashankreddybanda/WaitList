import { addEvent } from '@/actions/addEvent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getSession } from '@auth0/nextjs-auth0';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export default async function CreateForm() {

    const user = await getSession();

    async function handleSubmit (formData: FormData) {
        "use server"
        await addEvent(formData,user);
        revalidatePath("/events")
        redirect('/events')
    }

    return ( user &&
        <div className="flex flex-col gap-4 border-2 rounded-md p-8">
            <form action={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label>Event Name</label>
                    <div>
                        <Input type='text' name='name' placeholder='Name' />
                    </div>
                </div>

                <Button type="submit" className="py-2 px-3 w-min">Submit</Button>
            </form>
        </div>
    )
}
