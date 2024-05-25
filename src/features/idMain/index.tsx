import React from 'react';
import { Photo } from './types';
import styles from './styles.module.css';

interface IdMainProps {
    props: Photo;
}

const IdMain: React.FC<IdMainProps> = ({ props }) => {
    return (
        <main className={styles.mainWrapper}>
            <div className={styles.mainBox}>
                <div className={styles.divholder}>
                    <h1>{props.title}</h1>
                </div>
                <div className={styles.divholder}>
                    <div className={styles.tagholder}>Ақпарат</div>
                    <div>12 қараша 2019</div>
                </div>
                <img src={props.url} alt={props.title} className={styles.img} />
            </div>
        </main>
    );
};

export default IdMain;
