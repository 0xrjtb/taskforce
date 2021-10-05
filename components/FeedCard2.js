import { FolderOpenIcon, UserCircleIcon } from "@heroicons/react/solid"

function FeedCard2() {
    return (
        <div className="mx-auto bg-gray-100 border-2 border-gray-200 rounded-md mt-11">
            <div className="flex flex-2 space-x-1 m-3">
                <div className="py-2 text-gray-500">
                    <UserCircleIcon className="h-8 cursor-pointer border-2 border-gray-500 rounded-full"/>
                </div>
                <div className="py-3 text-xl">
                    Creator 3
                </div>
            </div>
            <div className="flex flex-2 m-3">
                <div className="flex flex-1 border-4 p-2 rounded-md cursor-pointer bg-white
                     hover:border-blue-400 text-blue-500">
                    <FolderOpenIcon className="h-36"/>
                </div>
                <div className="p-4 text-base">
                    <p className="text-gray-700">I am releasing my Vlog-83 this Saturday and I need a thumbnail.</p>
                    <p className="text-gray-700">Download the required assets and submit it by Thursday.</p>
                    <p className="text-gray-700">The vlog is about surprising one of my friends with a brand new car.</p>
                    <div className="flex flex-2 justify-center p-4 space-x-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View details
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedCard2
