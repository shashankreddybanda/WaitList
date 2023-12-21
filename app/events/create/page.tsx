import CreateForm from "./createForm"

export default function Create() {
    return (
        <div className="p-16 flex flex-col gap-4">
            <div className="font-bold text-4xl">Create</div>
            <p className="text-md font-thin text-opacity-80 space-x-1">Create an event here to start acepting users.</p>
            <CreateForm/>
        </div>
    )
}