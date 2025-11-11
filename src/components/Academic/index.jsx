import React, { useState } from "react";


import styles from "./styles.module.css";

export default function Academic() {
    const [selected, setSelected] = useState('code');
    return (
        <>
            <div className={styles["header"]}>
                <div className={styles["title"]}>
                    <i class="ph ph-books"></i>
                    <h3>Educação</h3>
                </div>
            </div>
            <div className={styles["cards"]}>
                
            </div>
        </>
    );
}
