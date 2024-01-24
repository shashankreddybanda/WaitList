'use client'

import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function Event (eventName:{data:string}) {

    const [isChecked, setIsChecked] = useState(false);

    function toggleEvent(checked: any){
        if (checked)
        console.log("here");
        
        setIsChecked(!isChecked)
        
    }

    return (
        <div className="p-16">
            <div className="flex gap-6 items-center border-2 rounded-md p-8 justify-between">
                <h1 className="text-2xl">{eventName.data}</h1>
                <Switch checked={isChecked} onCheckedChange={toggleEvent} />
            </div>
        </div>
    )
}