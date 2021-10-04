import { UserCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid  grid-cols-2 bg-white shadow-md p-5 md:px-10">
            {/* Left */}
            <Link href="/">
            <div className="relative flex items-center h-10 mr-0 md:mr-96
            cursor-pointer my-auto hover:scale-105 transform transition duration-150 ease-out">
                <a className="text-xl text-blue-600 font-semibold">Task</a>
                <a className="text-xl text-gray-800 font-semibold">Force</a>
            </div>
            </Link>

            {/* Right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <button className="hidden md:inline border-2 p-2 rounded-md shadow-sm hover:shadow-lg hover:scale-105 transform 
                transition duration-150 ease-out">Join as a creator</button>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:border-blue-400">
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header
