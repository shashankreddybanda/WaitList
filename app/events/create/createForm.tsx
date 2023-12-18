'use client'

import { addEvent } from '@/actions/addEvent';
import { useState, FormEvent, useRef } from 'react';


export default function CreateForm() {

    const ref = useRef<HTMLFormElement>(null)

    return (
        <div className="bg-gray-500 p-16 flex gap-4">
            <form ref={ref} action={async (formData) => {
                ref.current?.reset();
                await addEvent(formData);
            }} className="flex flex-col gap-4">
                <div>
                    <label>Event Name</label>
                    <div>
                        <input required name="name" placeholder="Name" type="text" className="w-64 text-white p-3 border border-white-500 bg-transparent focus:border-black text-md" />
                    </div>
                </div>

                <button type="submit" className="bg-white text-black py-2 px-3 w-min">Submit</button>
            </form>
        </div>
    )
}
