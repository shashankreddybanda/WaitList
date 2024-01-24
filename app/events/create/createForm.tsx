'use client'

import { addEvent } from '@/actions/addEvent';
import { useRef } from 'react';
import { Input } from '@/components/ui/input';
import { useUser } from '@auth0/nextjs-auth0/client';


export default function CreateForm() {

    const ref = useRef<HTMLFormElement>(null)
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;


    return ( user &&
        <div className="bg-gray-600 bg-opacity-50 p-16 flex gap-4">
            <form ref={ref} action={async (formData) => {
                ref.current?.reset();
                await addEvent(formData,user);
            }} className="flex flex-col gap-4">
                <div>
                    <label>Event Name</label>
                    <div>
                        <Input type='text' name='name' placeholder='Name' />
                    </div>
                </div>

                <button type="submit" className="bg-white text-black py-2 px-3 w-min">Submit</button>
            </form>
        </div>
    )
}
