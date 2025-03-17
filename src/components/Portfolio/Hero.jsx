import React from "react";
import styles from "./Portfolio.module.css";


const Hero = () => {
    return (
        <section className={styles.hero}>
            <img
                src= "/Belleza.jpg" // Fixed Path
                alt="Profile"
                className={styles.heroBackground}
            />
            <div className={styles.heroText}>
                <div className={styles.name}>
                    Hi! I’M{" "}
                    <span className={styles.highlight}>
                        JONATHAN A. MARRERO BERMUDEZ
                    </span>
                </div>
                <div className={styles.title}>
                    Electrical and Computer Engineer
                    <br />
                </div>
            </div>
        </section>
    );
}

export default Hero;
