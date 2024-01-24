'use client'

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useQRCode } from "next-qrcode";
import Link from "next/link";
import { useState } from "react";
import {usePathname} from "next/navigation"

export default function Event({eventName, id}: { eventName: string, id:string }) {

    const [isChecked, setIsChecked] = useState(false);

    function toggleEvent(checked: any) {
        if (checked)
            console.log("here");

        setIsChecked(!isChecked)

    }

    const {Canvas} = useQRCode()
    const pathName = usePathname()

    return (
        <div className="p-16">
            <div className="border-2 rounded-md p-8 flex gap-8 flex-col">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">{eventName}</h1>
                    <Switch checked={isChecked} onCheckedChange={toggleEvent} />
                </div>
                <div className="flex item-center">
                    <Link href={`/events/${id}/join`}><Button>Join</Button></Link>
                </div>
                <Canvas
                text={'https://github.com/bunlong/next-qrcode'}
                />
                <span className="text-m">{pathName}</span>
            </div>
        </div>
    )
}