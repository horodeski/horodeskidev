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
			<h4>Stacks</h4>

			<div className={styles["stacks"]}>
				#java #javascript #react #reactnative #vue #typescript #html #node #sass #css #python #django #scss #php #postgres #ux #figma #ui
			</div>
			<div className={styles["actions"]}>
				<Button text="Baixar currículo" type="primary" />
				<Button text="Entrar em contato" />
			</div>
		</div>
	);
}
