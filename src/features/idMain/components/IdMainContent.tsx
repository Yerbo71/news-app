import React from 'react';
import styles from "@/features/idMain/styles.module.css";
import {Photo} from "@/features/idMain/types";

const IdMainContent = (props: Photo) => {
    const repeatedTitle1 = Array(15).fill(props.title).join(' ');
    const repeatedTitle2 = Array(9).fill(props.title).join(' ');
    const repeatedTitle3 = Array(18).fill(props.title).join(' ');
    return (
        <div>
            <div className={styles.divHolder}>
                <h1 style={{ margin: '0' }}>{props.title}</h1>
            </div>
            <div className={styles.divHolder}>
                <div className={styles.tagHolder}>Ақпарат</div>
                <div>12 қараша 2019</div>
            </div>
            <div className={styles.divHolder}>
                <img src={props.url} alt={props.title} className={styles.img} />
            </div>
            <div className={styles.divHolder}>
                <p>{repeatedTitle1}</p>
                <p>{repeatedTitle2}</p>
                <p>{repeatedTitle3}</p>
            </div>

            <div className={styles.horline} />

            <div className={styles.quoteHolder}>
                <p>{repeatedTitle2}</p>
            </div>

            <div className={styles.horline} />

            <div className={styles.divHolder}>
                <p>{repeatedTitle1}</p>
                <p>{repeatedTitle2}</p>
                <p>{repeatedTitle3}</p>
            </div>

            <div className={styles.divHolder}>
                <img src={props.url} alt={props.title} className={styles.img} />
            </div>

        </div>
    );
};

export default IdMainContent;