import Head from "next/head";
import Footer from "../components/Footer";
import MemberHeader from "../components/MemberHeader";
import styles from '../styles/Home.module.css'

function member() {
    return (
        <div className={styles.container}>
             <Head>
                <title>Member</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <MemberHeader/>
            {/* Body */}
            <div className="flex flex-3">
                {/* Middle */}
                <div class="container flex flex-3 border-r-4 bg-white">
                   <div></div>
                </div>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default member
