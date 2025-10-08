import React, { useState } from "react";

import ButtonGroup from "../../ButtonGroup";
import Card from "./card";

import styles from "./styles.module.css";

export default function Projects() {
	const [selected, setSelected] = useState('code');
	return (
		<>
			<div className={styles["header"]}>
				<div className={styles["title"]}>
					<i class="ph ph-rocket-launch"></i>
					<h3>Formação & Reconhecimentos</h3>
				</div>
				<ButtonGroup options={["code", "figma"]} selected={selected} onChange={setSelected} />
			</div>
			<div className={styles["cards"]}>
				
			</div>
		</>
	);
}
