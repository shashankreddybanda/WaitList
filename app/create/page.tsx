export default function Create(){
    return (
        <div className="p-16 flex flex-col gap-16">
            <div className="font-bold text-3xl">Create</div>
            <div className="bg-gray-500 p-16 gap-8">
                <form action="submit">
                    <div>
                        <label htmlFor="name">Event Name</label>
                        <div>
                            <input type="text" className="w-64 text-white p-3 rounded-md border border-white-500 bg-transparent focus:border-black text-md"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}