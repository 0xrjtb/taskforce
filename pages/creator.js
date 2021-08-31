import Head from "next/head";
import CreatorHeader from "../components/CreatorHeader";
import Footer from "../components/Footer";
import styles from '../styles/Home.module.css'


function creator() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Creator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <CreatorHeader/>
            {/* Body */}
            <div className="mt-7 mb-7">
                <div className="flex flex-3">
                    <div className="mr-10 p-3 bg-white font-semibold text-xl border-2 rounded-md shadow-sm hover:shadow-md hover:border-blue-400 hover:scale-105 transform transition duration-150 ease-out">
                        <button>Create a task</button>
                    </div>
                    <div className="ml-10 p-3 bg-white font-semibold text-xl border-2 rounded-md shadow-sm hover:shadow-md hover:border-blue-400 hover:scale-105 transform transition duration-150 ease-out">
                        <button>My community</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-4 space-x-44 font-bold text-blue-600 border-2 border-gray-500 p-3 rounded-md">
                <div>
                    Assignment
                </div>
                <div>
                    Status
                </div>
                <div>
                    No. of submissions
                </div>
                <div>
                    Action
                </div>
            </div>
            <div className="mb-40">
                <div className="mb-5 flex flex-4 bg-white space-x-44 text-gray-500 border-4 p-3 rounded-md hover:shadow-lg  hover:text-black">
                    <div className="">
                        Background Music
                    </div>
                    <div>
                        Active
                    </div>
                    <div>
                        254
                    </div>
                    <div className="flex flex-2">
                        <div className="border-2 border-gray-700 p-1 text-blue-600 mr-2 rounded-md hover:scale-105 transform transition duration-150 ease-out">
                            <p>Review</p>
                        </div>
                        <div className="border-2 border-gray-700 p-1 text-red-600 mr-2 rounded-md hover:scale-105 transform transition duration-150 ease-out">
                            <p>End Task</p>
                        </div>
                    </div>
                </div>
                <div className="mb-5 flex flex-4 bg-white space-x-48 text-gray-500 border-4 p-3 rounded-md hover:shadow-lg  hover:text-black">
                    <div className="">
                        Thumbnail art
                    </div>
                    <div>
                        Active
                    </div>
                    <div>
                        105
                    </div>
                    <div className="flex flex-2">
                        <div className="border-2 border-gray-700 p-1 text-blue-600 mr-2 rounded-md hover:scale-105 transform transition duration-150 ease-out">
                            <p>Review</p>
                        </div>
                        <div className="border-2 border-gray-700 p-1 text-red-600 mr-2 rounded-md hover:scale-105 transform transition duration-150 ease-out">
                            <p>End Task</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-4 bg-white space-x-44 text-gray-500 border-4 p-3 rounded-md hover:shadow-lg  hover:text-black">
                    <div className="">
                        Paid promotion
                    </div>
                    <div>
                        Closed
                    </div>
                    <div>
                        254
                    </div>
                    <div className="flex flex-2">
                        <div className="border-2 border-gray-700 p-1 text-blue-600 mr-2 rounded-md hover:scale-105 transform transition duration-150 ease-out">
                            <p>Review</p>
                        </div>
                        <div className="border-2 border-gray-700 p-1 text-gray-600 mr-2 rounded-md">
                            <p>End Task</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default creator
