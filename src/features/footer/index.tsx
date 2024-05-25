import NavFoot from "@/features_2/navfoot/navfoot";
import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerBox}>
                <NavFoot/>
            </div>
            <div className={styles.footerHr}/>
            <div className={styles.footerBox} style={{opacity: 0.7}}>
                Байлыныс үшін: magzhankz@gmail.com
            </div>
            <div className={styles.footerHr}/>
            <div className={styles.footerBox} style={{opacity: 0.7}}>
                Барлық құқықтар сақталған@2024
            </div>
        </footer>
    );
};

export default Footer;