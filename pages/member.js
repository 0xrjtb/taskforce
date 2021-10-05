import Head from "next/head";
import FeedCard from "../components/FeedCard";
import FeedCard1 from "../components/FeedCard1";
import FeedCard2 from "../components/FeedCard2";
import FeedCard3 from "../components/FeedCard3";
import FeedCard4 from "../components/FeedCard4";
import Footer from "../components/Footer";
import MemberHeader from "../components/MemberHeader";

function member() {
    return (
        <div className="container-fluid mx-auto px-3 sm:px-5 lg:px-6 bg-gray-50">
             <Head>
                <title>Member</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <MemberHeader/>
            {/* Body */}
            <main className=" mb-36 flex justify-center">
                <div>
                    <FeedCard/>
                    <FeedCard1/>
                    <FeedCard2/>
                    <FeedCard3/>
                    <FeedCard4/>
                </div>
            </main> 
            {/* Footer */}
            <div className="flex justify-center mt-200px">
                <Footer/>
            </div>
        </div>
    )
}

export default member
