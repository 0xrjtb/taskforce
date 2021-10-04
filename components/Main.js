import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function Main() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500-px] xl:h-[600px] 2xl:h-[700px] py-36">
         <Link href="/creator">
         <div className="flex flex-1 border-2 p-2 rounded-md max-w-sm mt-10 cursor-pointer bg-white
          hover:border-blue-400 shadow-sm hover:shadow-lg hover:scale-105 transform transition duration-150 ease-out">
            <p className="font-semibold mr-10 text-xl">Creator</p>
            <div>
                <ArrowNarrowRightIcon className="mt-2 h-6"/>
            </div>
            <div>
                <p className="ml-2 text-gray-500">Create your own community. Assign tasks, review submissions and reward your community members.</p>
            </div>
          </div>
         </Link>

          <Link href="/member">
          <div className="flex flex-1 border-2 p-2 rounded-md max-w-sm mt-10 cursor-pointer bg-white
          hover:border-blue-400 shadow-sm hover:shadow-lg hover:scale-105 transform transition duration-150 ease-out">
            <p className="font-semibold mr-10 text-xl">Member</p>
            <div>
                <ArrowNarrowRightIcon className="mt-2 h-6"/>
            </div>
            <div>
                <p className="ml-2 text-gray-500">Be a part of community. Contribute and get rewarded by the creator.</p>
            </div>
          </div>
          </Link>
        </div>
    )
}

export default Main
