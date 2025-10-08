import React from "react";

import Button from "../Button";
import styles from "./styles.module.css";

export default function CardMe() {
	return (
		<div className={styles["card"]}>
			<img src="/images/eu.jpg" alt="" />
			<h3>Geovana Sophia Horodeski</h3>
			{/* <div className={styles["redes"]}>
				<div className={styles["btn"]}>
					<i class="ph ph-linkedin-logo"></i>
				</div>
				<div className={styles["btn"]}>
					<i class="ph ph-github-logo"></i>
				</div>
			</div> */}
			<div className={styles["buttons"]}>
				<Button text="Baixar CV" />
				<Button text="Falar comigo" type="primary" />
			</div>
		</div>
	);
}
