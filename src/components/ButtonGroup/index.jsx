import React from "react";

import styles from "./styles.module.css";

export default function ButtonGroup({ options = [], selected = "", onChange }) {
	return (
		<div className={styles["mydict"]}>
			<div>
				{options.map((option) => (
					<label key={option}>
						<input type="radio" name="radio" value={option} checked={selected === option} onChange={() => onChange(option)} />
						<span>{option}</span>
					</label>
				))}
			</div>
		</div>
	);
}
