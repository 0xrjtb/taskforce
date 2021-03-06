import Link from 'next/link'
import { UserCircleIcon } from '@heroicons/react/solid'
import { SearchCircleIcon } from '@heroicons/react/solid'

function MemberHeader() {
    return (
        <header className=" sticky top-0 z-50 grid
        grid-cols-3 bg-white shadow-md w-max p-2 md:px-10">
            {/* Left */}
            <Link href="/">
            <div className="relative flex items-center h-10 mr-0 md:mr-96
            cursor-pointer my-auto hover:scale-105 transform transition duration-150 ease-out">
                <a className="text-3xl text-blue-600 font-semibold">Task</a>
                <a className="text-3xl text-gray-800 font-semibold">Force</a>
            </div>
            </Link>
            
            {/* Center */}
            <div className="flex flex-2 justify-center">
                <div>
                    <SearchCircleIcon className="h-10 mr-2 mt-2 text-gray-500 border-2 rounded-full hover:border-blue-500 cursor-pointer"/>
                </div>
                <div>
                    <input className="mt-1 border p-2 bg-gray-100 rounded-md" placeholder="Search creator"/>
                </div>
            </div>

            {/* Right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <button className="hidden md:inline border-2 p-2 rounded-md shadow-sm hover:shadow-lg hover:scale-105 transform 
                transition duration-150 ease-out">My Rewards</button>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:border-blue-400">
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default MemberHeader
