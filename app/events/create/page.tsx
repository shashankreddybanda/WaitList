import CreateForm from "./createForm"

export default function Create() {
    return (
        <div className="p-16 flex flex-col gap-16">
            <div className="font-bold text-3xl">Create</div>
            <CreateForm/>
        </div>
    )
}