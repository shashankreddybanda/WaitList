'use client';

import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"

export default function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className="flex items-center justify-center h-screen w-screen content-center ">Loading...</div>
  if (error) return <div className="flex items-center justify-center h-screen w-screen content-center ">{error.message}</div>

  if (user) {
    return (
      <div className="flex items-center justify-center h-screen w-screen content-center ">
        <div className="flex flex-col gap-8 items-center">
          <p className=" text-6xl">Create an Event</p>
          <div className="flex gap-8">
          <Link href="/events/create" className=" border-2 px-8 py-2 min-w-fit hover:bg-gray-800 active:border-4">Create</Link>
          <Link href="/api/auth/logout" className=" border-2 px-8 py-2 w-min hover:bg-gray-800 active:border-4">Logout</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    (
      <div className="flex items-center justify-center h-screen w-screen content-center ">
        <Link href="/api/auth/login" className=" border-2 px-8 py-4 hover:bg-gray-800 active:border-4">Login</Link>
      </div>

    )
  )
}
