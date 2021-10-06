import Head from "next/head";
import CreatorHeader from "../components/CreatorHeader";
import Footer from "../components/Footer";
import TaskCards from "../components/TaskCards";
import TaskCards1 from "../components/TaskCards1";
import TaskCards2 from "../components/TaskCards2";
import TaskCards3 from "../components/TaskCards3";


function creator() {
    return (
        <div className="container-fluid mx-auto px-3 sm:px-5 lg:px-6 bg-gray-50">
            <Head>
                <title>Creator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <CreatorHeader/>
            {/* Body */}
            <main className="mb-36">
            <div className="mt-7 mb-7 flex justify-center">
                <div className="flex flex-3">
                    <div className="mr-10 p-3 bg-white font-semibold text-xl border-2 rounded-md shadow-sm hover:shadow-md hover:border-blue-400 hover:scale-105 transform transition duration-150 ease-out">
                        <button>New task</button>
                    </div>
                    <div className="ml-10 p-3 bg-white font-semibold text-xl border-2 rounded-md shadow-sm hover:shadow-md hover:border-blue-400 hover:scale-105 transform transition duration-150 ease-out">
                        <button>My community</button>
                    </div>
                </div>
            </div>
            <div className="w-3/4 mx-auto bg-gray-100 border-4 border-gray-600 rounded-md">
                <div className="grid grid-cols-4 p-3 space-x-3 font-bold text-blue-600">
                    <div className="flex justify-center border-4 border-gray-200 rounded-md p-2 bg-white">
                        Task
                    </div>
                    <div className="flex justify-center border-4 border-gray-200 rounded-md p-2  bg-white">
                        Status
                    </div>
                    <div className="flex justify-center border-4 border-gray-200 rounded-md p-2  bg-white">
                        No. of submissions
                    </div>
                    <div className="flex justify-center border-4 border-gray-200 rounded-md p-2 bg-white">
                        Action
                    </div>
                </div>

                <div>
                    {/* TaskCard */}
                    <TaskCards/>
                    <TaskCards1/>
                    <TaskCards2/>
                    <TaskCards3/>
                </div>
            </div> 
            </main>
             {/* Footer */}
            <div className="flex justify-center mt-200px">
                <Footer/>
            </div>
        </div>
    )
}

export default creator
