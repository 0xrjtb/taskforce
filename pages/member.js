import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from '../styles/Home.module.css'

function member() {
    return (
        <div className={styles.container}>
            {/* Header */}
            <Header/>
            {/* Body */}
            <div className="mt-40 mb-40">
                <p>Member</p>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default member
